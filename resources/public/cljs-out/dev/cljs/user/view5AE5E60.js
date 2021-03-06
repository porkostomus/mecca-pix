// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('mecca.pix');
mecca.view.svg_paths = (function mecca$view$svg_paths(paths){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4324__auto__ = (function mecca$view$svg_paths_$_iter__17704(s__17705){
return (new cljs.core.LazySeq(null,(function (){
var s__17705__$1 = s__17705;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17705__$1);
if(temp__5457__auto__){
var s__17705__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17705__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17705__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17707 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17706 = (0);
while(true){
if((i__17706 < size__4323__auto__)){
var vec__17708 = cljs.core._nth.call(null,c__4322__auto__,i__17706);
var color = cljs.core.nth.call(null,vec__17708,(0),null);
var path = cljs.core.nth.call(null,vec__17708,(1),null);
cljs.core.chunk_append.call(null,b__17707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null));

var G__17714 = (i__17706 + (1));
i__17706 = G__17714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17707),mecca$view$svg_paths_$_iter__17704.call(null,cljs.core.chunk_rest.call(null,s__17705__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17707),null);
}
} else {
var vec__17711 = cljs.core.first.call(null,s__17705__$2);
var color = cljs.core.nth.call(null,vec__17711,(0),null);
var path = cljs.core.nth.call(null,vec__17711,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null),mecca$view$svg_paths_$_iter__17704.call(null,cljs.core.rest.call(null,s__17705__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,paths);
})());
});
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Import image file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input","input#input",-1134984774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var dom = goog.object.get(e,"target");
var file = goog.object.getValueByKeys(dom,["files",(0)]);
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__17715_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),p1__17715_SHARP_.target.result], null));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.scaled_image = (function mecca$view$scaled_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Original image scaled normally:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base64","base64",167760174)], null))),new cljs.core.Keyword(null,"width","width",-384071477),(400)], null)], null)], null);
});
mecca.view.base64 = (function mecca$view$base64(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"cols","cols",-1914801295),(30),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base64","base64",167760174)], null))))].join(''),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null);
});
mecca.view.orig_img = (function mecca$view$orig_img(){
var file = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base64","base64",167760174)], null));
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Original image:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,file)], null)], null)], null);
});
;})(file))
});
mecca.view.svg_output = (function mecca$view$svg_output(){
var img = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null));
return ((function (img){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,img).width)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,img).height)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#converted","svg#converted",-621321034),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"crispEdges",new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,img).width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,img).height)].join('')], null),mecca.view.svg_paths.call(null,mecca.pix.svg_data.call(null,cljs.core.deref.call(null,img)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"value","value",305978217),mecca.pix.edn__GT_xml.call(null,cljs.core.deref.call(null,img).width,cljs.core.deref.call(null,img).height,mecca.pix.svg_data.call(null,cljs.core.deref.call(null,img))),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null);
});
;})(img))
});
mecca.view.img_data = (function mecca$view$img_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Image data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"cols","cols",-1914801295),(30),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.img__GT_data.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null)))))].join(''),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null);
});
.color_pix = (function $color_pix(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pixels by color:"], null),(function (){var iter__4324__auto__ = (function $color_pix_$_iter__17724(s__17725){
return (new cljs.core.LazySeq(null,(function (){
var s__17725__$1 = s__17725;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17725__$1);
if(temp__5457__auto__){
var s__17725__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17725__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17725__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17727 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17726 = (0);
while(true){
if((i__17726 < size__4323__auto__)){
var vec__17728 = cljs.core._nth.call(null,c__4322__auto__,i__17726);
var k = cljs.core.nth.call(null,vec__17728,(0),null);
var v = cljs.core.nth.call(null,vec__17728,(1),null);
cljs.core.chunk_append.call(null,b__17727,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"fill","fill",883462889),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"cols","cols",-1914801295),(30),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse.call(null,v))].join(''),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__17755 = (i__17726 + (1));
i__17726 = G__17755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17727),$color_pix_$_iter__17724.call(null,cljs.core.chunk_rest.call(null,s__17725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17727),null);
}
} else {
var vec__17752 = cljs.core.first.call(null,s__17725__$2);
var k = cljs.core.nth.call(null,vec__17752,(0),null);
var v = cljs.core.nth.call(null,vec__17752,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"fill","fill",883462889),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"cols","cols",-1914801295),(30),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse.call(null,v))].join(''),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),$color_pix_$_iter__17724.call(null,cljs.core.rest.call(null,s__17725__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,.get_colors.call(null,cljs.core.deref.call(null,.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null)))));
})()], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#tutorial","canvas#tutorial",235455447)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.orig_img], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scaled_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.base64], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.color_pix], null)], null):null)], null);
});

//# sourceMappingURL=view5AE5E60.js.map
