(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.dom :as gdom]))

(defn svg-paths
  ([paths]
   (svg-paths nil paths 0 0 1))
  ([attrs paths]
   (svg-paths attrs paths 0 0 1))
  ([paths x y]
   (svg-paths nil paths x y 1))
  ([paths x y scale]
   (svg-paths nil paths x y scale))
  ([attrs paths x y scale]
   (into [:g (merge attrs
                    {:transform (str "scale(" scale ") translate(" x "," y ")")})]
         (for [[color path] paths]
           [:path {:stroke color
                   :d      path}]))))

(defn component->hex [c]
  (let [hex (.toString c 16)]
    (if (= (.-length hex) 1) (+ 0 hex) hex)))

(defn get-color [r g b a]
  (cond
    (= a 255)
    (str "#" (component->hex r) (component->hex g) (component->hex b))
  (= a 0) false
  :else
  (str "rgba(" r "," g "," b "," (/ a 255) ")")))

;; TODO: implement horizontal color run optimization 

(defn make-path-data [x y w]
  (str "M" x " " y "h" w))

(defn make-path [color data]
  (str "[\"" color "\" \"" data "\"]\n"))

(defn img->data [img] 
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")
        width (.-width img)
        height (.-height img)]
    (set! (.-width canvas) width) 
    (set! (.-height canvas) height) 
    (.drawImage ctx img 0 0) 
    (.-data (.getImageData ctx 0 0 width height))))

(defn get-colors [img]
  (let [data (img->data img)
        w (.-width img)]
    (loop [n 0 colors {}]
      (if (or (>= n (.-length data))
               (> 1 (aget data (+ n 3))))
        colors
        (recur (+ 4 n)
               (update colors
                       [(aget data n)
                        (aget data (+ n 1))
                        (aget data (+ n 2))
                        (aget data (+ n 3))]
                       #(conj % [(mod (/ n 4) w)
                                  (.floor js/Math (/ (/ n 4) w))])))))))

(defn import-image []
  [:div
   [:h1 "Import image file"]
   [:input#input
    {:type      "file"
     :on-change
     (fn [e]
       (let [dom    (o/get e "target")
             file   (o/getValueByKeys dom #js ["files" 0])
             reader (js/FileReader.)]
         (.readAsDataURL reader file)
         (set! (.-onload reader)
               #(dispatch [:file-upload
                           (-> % .-target .-result)]))))}] 
   [:p]])

(defn svg-data [img]
  (for [[k v] (get-colors img)]
    [(apply get-color k) (apply str (map (fn [[x y]] (make-path-data x y 1)) (reverse v)))]))

(defn img-el []
  (let [file (subscribe [:file-upload])]
    (fn []
      [:div
       [:h5 "Image:"]
       [:img {:src @file}]
       [:h5 "Base64:"]
       [:textarea {:rows      3
                   :cols      50
                   :value     (str @file)
                   :read-only true}]])))

(defn svg-output []
  [:div
   [:h3 "SVG XML:"]
   [:textarea {:rows      10
               :cols      100
               :value     @(subscribe [:xml])
               :read-only true}]])

(defn mecca []
  [:div
   [import-image]
   (when-let [img @(subscribe [:img])]
     [:div
      [img-el]
        [:div
         [:h2 "SVG:"]
         [:svg#converted {:xmlns           "http://www.w3.org/2000/svg"
                          :shape-rendering "crispEdges"
                          :width           "60%"
                          :view-box        (str "0 -0.5 " (.-width img) " " (.-height img))}
          (svg-paths (svg-data img))]
         ;[svg-output]
         [:h3 "Path data (EDN):"]
         [:textarea {:rows 10
                     :cols 100
                     :value (str (svg-data img))
                     :read-only true}]
         [:h3 "Pixels by color:"]
      (for [[k v] (get-colors img)]
        ^{:key k}
        [:div
         [:span 
          [:svg {:width 30 :height 30} [:rect {:width 30 :height 30 :fill (str (apply get-color k))}]]
          (str " "(apply get-color k))]
         [:p]
          [:textarea {:rows 3
                      :cols 30
                      :value (str v)
                      :read-only true}]])]])])
