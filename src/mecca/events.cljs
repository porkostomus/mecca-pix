(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:base64 nil
    :loading? false
    :img nil
    :xml nil}))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
   (assoc db
          :base64 file
          :img (let [img (js/Image.)]
                 (set! (.-src img) file)
                 img))))

(reg-event-db
 :set-loading
 (fn [db [_ _]]
   (assoc db
          :loading? true
          :img nil)))

(reg-event-db
 :output-xml
 (fn [db [_ xml]]
   (assoc db :xml xml)))