// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.log');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = goog.log.getLogger("Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_19000 = (new goog.debug.Console());
var G__18917_19001 = c_19000.getFormatter();
goog.object.set(G__18917_19001,"showAbsoluteTime",false);

goog.object.set(G__18917_19001,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_19000);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.log_console !== 'undefined')){
} else {
figwheel.repl.log_console = figwheel.repl.console_logging.call(null);
}

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return goog.log.log(figwheel.repl.logger,goog.debug.Logger.Level.FINEST,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
goog.require = figwheel.repl.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

if(cljs.core.truth_((function (){var or__3949__auto__ = reload;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();
}

goog.isProvided_ = (function (name){
return false;
});

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload;

return goog.require = figwheel.repl.figwheel_require;
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__18905_SHARP_,p2__18906_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18905_SHARP_)].join('')),p2__18906_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__18907_SHARP_,p2__18908_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18907_SHARP_)].join(''),p2__18908_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__18918 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__18918.addCallback(((function (G__18918){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__18918))
);

G__18918.addErrback(((function (G__18918){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__18918))
);

return G__18918;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e18919){if((e18919 instanceof Error)){
var e = e18919;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e18919;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(!((callback == null))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e18920){if((e18920 instanceof Error)){
var e = e18920;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e18920;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = ((!((goog.nodeGlobalRequire == null)))?new cljs.core.Keyword(null,"node","node",581201198):((!((goog.global.document == null)))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && (!((self.importScripts == null)))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__18921 = cljs.core._EQ_;
var expr__18922 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__18921.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__18922))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__18921.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__18922))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__18921.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__18922))){
return figwheel.repl.worker_import_script;
} else {
return ((function (pred__18921,expr__18922){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__18921,expr__18922))
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__18924,callback){
var map__18925 = p__18924;
var map__18925__$1 = ((((!((map__18925 == null)))?(((((map__18925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18925):map__18925);
var file_msg = map__18925__$1;
var request_url = cljs.core.get.call(null,map__18925__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

goog.log.fine(figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,((function (map__18925,map__18925__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
goog.log.fine(figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
goog.log.error(figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__18925,map__18925__$1,file_msg,request_url))
);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__18909_SHARP_){
return p1__18909_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__18928 = arguments.length;
switch (G__18928) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
var temp__5457__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__18910_SHARP_){
return p1__18910_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e18929){if((e18929 instanceof Error)){
var e_19003 = e18929;
goog.log.error(figwheel.repl.logger,e_19003);
} else {
throw e18929;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__18911_SHARP_){
return p1__18911_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5457__auto__)){
var next_promise_fn = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
});

figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2;


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__18912_SHARP_){
return p1__18912_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (k,args){
return k;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (k,args){
return k;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__19004__delegate = function (args){
var seq__18930 = cljs.core.seq.call(null,printers);
var chunk__18931 = null;
var count__18932 = (0);
var i__18933 = (0);
while(true){
if((i__18933 < count__18932)){
var p = cljs.core._nth.call(null,chunk__18931,i__18933);
figwheel.repl.out_print.call(null,p,args);


var G__19005 = seq__18930;
var G__19006 = chunk__18931;
var G__19007 = count__18932;
var G__19008 = (i__18933 + (1));
seq__18930 = G__19005;
chunk__18931 = G__19006;
count__18932 = G__19007;
i__18933 = G__19008;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18930);
if(temp__5457__auto__){
var seq__18930__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18930__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18930__$1);
var G__19009 = cljs.core.chunk_rest.call(null,seq__18930__$1);
var G__19010 = c__4351__auto__;
var G__19011 = cljs.core.count.call(null,c__4351__auto__);
var G__19012 = (0);
seq__18930 = G__19009;
chunk__18931 = G__19010;
count__18932 = G__19011;
i__18933 = G__19012;
continue;
} else {
var p = cljs.core.first.call(null,seq__18930__$1);
figwheel.repl.out_print.call(null,p,args);


var G__19013 = cljs.core.next.call(null,seq__18930__$1);
var G__19014 = null;
var G__19015 = (0);
var G__19016 = (0);
seq__18930 = G__19013;
chunk__18931 = G__19014;
count__18932 = G__19015;
i__18933 = G__19016;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__19004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19017__i = 0, G__19017__a = new Array(arguments.length -  0);
while (G__19017__i < G__19017__a.length) {G__19017__a[G__19017__i] = arguments[G__19017__i + 0]; ++G__19017__i;}
  args = new cljs.core.IndexedSeq(G__19017__a,0,null);
} 
return G__19004__delegate.call(this,args);};
G__19004.cljs$lang$maxFixedArity = 0;
G__19004.cljs$lang$applyTo = (function (arglist__19018){
var args = cljs.core.seq(arglist__19018);
return G__19004__delegate(args);
});
G__19004.cljs$core$IFn$_invoke$arity$variadic = G__19004__delegate;
return G__19004;
})()
;})(printers))
);

return cljs.core.set_print_err_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__19019__delegate = function (args){
var seq__18934 = cljs.core.seq.call(null,printers);
var chunk__18935 = null;
var count__18936 = (0);
var i__18937 = (0);
while(true){
if((i__18937 < count__18936)){
var p = cljs.core._nth.call(null,chunk__18935,i__18937);
figwheel.repl.err_print.call(null,p,args);


var G__19020 = seq__18934;
var G__19021 = chunk__18935;
var G__19022 = count__18936;
var G__19023 = (i__18937 + (1));
seq__18934 = G__19020;
chunk__18935 = G__19021;
count__18936 = G__19022;
i__18937 = G__19023;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18934);
if(temp__5457__auto__){
var seq__18934__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18934__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18934__$1);
var G__19024 = cljs.core.chunk_rest.call(null,seq__18934__$1);
var G__19025 = c__4351__auto__;
var G__19026 = cljs.core.count.call(null,c__4351__auto__);
var G__19027 = (0);
seq__18934 = G__19024;
chunk__18935 = G__19025;
count__18936 = G__19026;
i__18937 = G__19027;
continue;
} else {
var p = cljs.core.first.call(null,seq__18934__$1);
figwheel.repl.err_print.call(null,p,args);


var G__19028 = cljs.core.next.call(null,seq__18934__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__18934 = G__19028;
chunk__18935 = G__19029;
count__18936 = G__19030;
i__18937 = G__19031;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__19019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19032__i = 0, G__19032__a = new Array(arguments.length -  0);
while (G__19032__i < G__19032__a.length) {G__19032__a[G__19032__i] = arguments[G__19032__i + 0]; ++G__19032__i;}
  args = new cljs.core.IndexedSeq(G__19032__a,0,null);
} 
return G__19019__delegate.call(this,args);};
G__19019.cljs$lang$maxFixedArity = 0;
G__19019.cljs$lang$applyTo = (function (arglist__19033){
var args = cljs.core.seq(arglist__19033);
return G__19019__delegate(args);
});
G__19019.cljs$core$IFn$_invoke$arity$variadic = G__19019__delegate;
return G__19019;
})()
;})(printers))
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__18938,response_body){
var map__18939 = p__18938;
var map__18939__$1 = ((((!((map__18939 == null)))?(((((map__18939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18939):map__18939);
var uuid = cljs.core.get.call(null,map__18939__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__18941 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__18941,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__18941;
}
});

figwheel.repl.http_post = (function (){var pred__18942 = cljs.core._EQ_;
var expr__18943 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__18942.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__18943))){
var http = require("http");
return ((function (http,pred__18942,expr__18943){
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));
var G__18945 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5457__auto__)){
var q = temp__5457__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})())].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),((function (data,uri,http,pred__18942,expr__18943){
return (function (x){
return null;
});})(data,uri,http,pred__18942,expr__18943))
).on("error",((function (data,uri,http,pred__18942,expr__18943){
return (function (p1__18913_SHARP_){
return console.error(p1__18913_SHARP_);
});})(data,uri,http,pred__18942,expr__18943))
);
G__18945.write(post_data);

G__18945.end();

return G__18945;
});
;})(http,pred__18942,expr__18943))
} else {
return ((function (pred__18942,expr__18943){
return (function (url,response){
return goog.net.XhrIo.send(url,((function (pred__18942,expr__18943){
return (function (e){
return figwheel.repl.debug.call(null,"Response Posted");
});})(pred__18942,expr__18943))
,"POST",response);
});
;})(pred__18942,expr__18943))
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__18946,response_body){
var map__18947 = p__18946;
var map__18947__$1 = ((((!((map__18947 == null)))?(((((map__18947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18947):map__18947);
var old_msg = map__18947__$1;
var websocket = cljs.core.get.call(null,map__18947__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__18947__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5457__auto___19034 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5457__auto___19034)){
var sn_19035 = temp__5457__auto___19034;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_19035);
} else {
}

var temp__5457__auto___19036 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5457__auto___19036)){
var sid_19037 = temp__5457__auto___19036;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_19037);
} else {
}

goog.log.info(figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return goog.log.info(figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if(!((goog.nodeGlobalRequire == null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__19038 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = ((function (print_to_console_QMARK__19038){
return (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18950 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18951 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18950,_STAR_print_fn_STAR_18951,sb,ua_product,print_to_console_QMARK__19038){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_18950,_STAR_print_fn_STAR_18951,sb,ua_product,print_to_console_QMARK__19038))
;

try{var result_value = eval(code);
var result_value__$1 = ((!(typeof result_value === 'string'))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e18952){if((e18952 instanceof Error)){
var e = e18952;
return null;
} else {
throw e18952;

}
}})():result_value);
var output_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
if(cljs.core.truth_((function (){var and__3938__auto__ = print_to_console_QMARK__19038;
if(cljs.core.truth_(and__3938__auto__)){
return !((sb.getLength() === (0)));
} else {
return and__3938__auto__;
}
})())){
setTimeout(((function (result_value,result_value__$1,output_str,_STAR_print_newline_STAR_18950,_STAR_print_fn_STAR_18951,sb,ua_product,print_to_console_QMARK__19038){
return (function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
});})(result_value,result_value__$1,output_str,_STAR_print_newline_STAR_18950,_STAR_print_fn_STAR_18951,sb,ua_product,print_to_console_QMARK__19038))
,(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18951;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18950;
}}catch (e18949){if((e18949 instanceof Error)){
var e = e18949;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e18949;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});})(print_to_console_QMARK__19038))
;

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__18953){
var map__18954 = p__18953;
var map__18954__$1 = ((((!((map__18954 == null)))?(((((map__18954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18954):map__18954);
var msg = map__18954__$1;
var code = cljs.core.get.call(null,map__18954__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__18956){
var map__18957 = p__18956;
var map__18957__$1 = ((((!((map__18957 == null)))?(((((map__18957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18957):map__18957);
var messages = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__18959 = cljs.core.seq.call(null,messages);
var chunk__18960 = null;
var count__18961 = (0);
var i__18962 = (0);
while(true){
if((i__18962 < count__18961)){
var msg = cljs.core._nth.call(null,chunk__18960,i__18962);
figwheel.repl.message.call(null,(function (){var G__18963 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__18963,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__18963;
}
})());


var G__19039 = seq__18959;
var G__19040 = chunk__18960;
var G__19041 = count__18961;
var G__19042 = (i__18962 + (1));
seq__18959 = G__19039;
chunk__18960 = G__19040;
count__18961 = G__19041;
i__18962 = G__19042;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18959);
if(temp__5457__auto__){
var seq__18959__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18959__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18959__$1);
var G__19043 = cljs.core.chunk_rest.call(null,seq__18959__$1);
var G__19044 = c__4351__auto__;
var G__19045 = cljs.core.count.call(null,c__4351__auto__);
var G__19046 = (0);
seq__18959 = G__19043;
chunk__18960 = G__19044;
count__18961 = G__19045;
i__18962 = G__19046;
continue;
} else {
var msg = cljs.core.first.call(null,seq__18959__$1);
figwheel.repl.message.call(null,(function (){var G__18964 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__18964,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__18964;
}
})());


var G__19047 = cljs.core.next.call(null,seq__18959__$1);
var G__19048 = null;
var G__19049 = (0);
var G__19050 = (0);
seq__18959 = G__19047;
chunk__18960 = G__19048;
count__18961 = G__19049;
i__18962 = G__19050;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__3949__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__18965_19051 = uri.getQueryData().add("fwsid",(function (){var or__3949__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__18965_19051.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4040__auto__ = Math.pow((2),attempt);
var y__4041__auto__ = (20);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__18914_SHARP_){
if(typeof p1__18914_SHARP_ === 'string'){
return p1__18914_SHARP_;
} else {
return goog.json.serialize(p1__18914_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__18915_SHARP_){
if(typeof p1__18915_SHARP_ === 'string'){
return p1__18915_SHARP_;
} else {
return goog.json.serialize(p1__18915_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__18966 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__18966,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__18966;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__18967 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__18967,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__18967;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__3949__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (function (){var and__3938__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__3938__auto__){
try{return require("ws");
}catch (e18971){if((e18971 instanceof Error)){
var e = e18971;
return null;
} else {
throw e18971;

}
}} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var and__3938__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__3938__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__3938__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5455__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5455__auto__)){
var websocket_class = temp__5455__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return goog.log.error(figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19052 = arguments.length;
var i__4532__auto___19053 = (0);
while(true){
if((i__4532__auto___19053 < len__4531__auto___19052)){
args__4534__auto__.push((arguments[i__4532__auto___19053]));

var G__19054 = (i__4532__auto___19053 + (1));
i__4532__auto___19053 = G__19054;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__18973){
var vec__18974 = p__18973;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18974,(0),null);
return figwheel.repl.ensure_websocket.call(null,((function (vec__18974,websocket_url_SINGLEQUOTE_){
return (function (){
var websocket = (new goog.net.WebSocket());
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_))].join('');
var G__18977 = websocket;
G__18977.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_){
return (function (e){
var temp__5457__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e18978){if((e18978 instanceof Error)){
var e__$1 = e18978;
return goog.log.error(figwheel.repl.logger,e__$1);
} else {
throw e18978;

}
}} else {
return null;
}
});})(G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_))
);

G__18977.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_){
return (function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
});})(G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_))
);

G__18977.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_){
return (function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
});})(G__18977,websocket,url,vec__18974,websocket_url_SINGLEQUOTE_))
);

G__18977.open(url);

return G__18977;
});})(vec__18974,websocket_url_SINGLEQUOTE_))
);
});

figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq18972){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18972));
});


figwheel.repl.http_get = (function (){var pred__18979 = cljs.core._EQ_;
var expr__18980 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__18979.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__18980))){
var http = require("http");
return ((function (http,pred__18979,expr__18980){
return (function (url){
return (new goog.Promise(((function (http,pred__18979,expr__18980){
return (function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),((function (data,http,pred__18979,expr__18980){
return (function (response){
response.on("data",((function (data,http,pred__18979,expr__18980){
return (function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
});})(data,http,pred__18979,expr__18980))
);

return response.on("end",((function (data,http,pred__18979,expr__18980){
return (function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e18982){if((e18982 instanceof Error)){
var e = e18982;
console.error(e);

return err.call(null,e);
} else {
throw e18982;

}
}})());
});})(data,http,pred__18979,expr__18980))
);
});})(data,http,pred__18979,expr__18980))
).on("error",err);
});})(http,pred__18979,expr__18980))
));
});
;})(http,pred__18979,expr__18980))
} else {
return ((function (pred__18979,expr__18980){
return (function (url){
return (new goog.Promise(((function (pred__18979,expr__18980){
return (function (succ,err){
return goog.net.XhrIo.send(url,((function (pred__18979,expr__18980){
return (function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
});})(pred__18979,expr__18980))
);
});})(pred__18979,expr__18980))
));
});
;})(pred__18979,expr__18980))
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var msg_fn = ((function (url,surl){
return (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e18983){if((e18983 instanceof Error)){
var e = e18983;
return goog.log.error(figwheel.repl.logger,e);
} else {
throw e18983;

}
}});})(url,surl))
;
var G__18984_19055 = url.getQueryData();
G__18984_19055.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then(((function (url,surl,msg_fn){
return (function (msg){
var typ = goog.object.get(msg,"connection-type");
goog.log.info(figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
});})(url,surl,msg_fn))
,((function (url,surl,msg_fn){
return (function (e){
if((e instanceof Error)){
goog.log.error(figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = (e instanceof goog.net.XhrIo);
if(and__3938__auto__){
return e.getResponseBody();
} else {
return and__3938__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
goog.log.info(figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout(((function (wait_time,url,surl,msg_fn){
return (function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
});})(wait_time,url,surl,msg_fn))
,wait_time);
});})(url,surl,msg_fn))
);
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19056 = arguments.length;
var i__4532__auto___19057 = (0);
while(true){
if((i__4532__auto___19057 < len__4531__auto___19056)){
args__4534__auto__.push((arguments[i__4532__auto___19057]));

var G__19058 = (i__4532__auto___19057 + (1));
i__4532__auto___19057 = G__19058;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__18986){
var vec__18987 = p__18986;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18987,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
});

figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq18985){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18985));
});


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(url,"http");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
goog.log.warning(figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null))].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"))].join('');
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__18916_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__18916_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));

figwheel.repl.set_log_level = (function figwheel$repl$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5455__auto__ = cljs.core.get.call(null,figwheel.repl.log_levels,level);
if(cljs.core.truth_(temp__5455__auto__)){
var lvl = temp__5455__auto__;
logger_SINGLEQUOTE_.setLevel(lvl);

return figwheel.repl.debug.call(null,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));
} else {
return goog.log.warn(["Log level ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,level))," doesn't exist must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest")))].join(''));
}
});

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__18990 = cljs.core.seq.call(null,(function (){var G__18994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__18994,figwheel.core.logger);
} else {
return G__18994;
}
})());
var chunk__18991 = null;
var count__18992 = (0);
var i__18993 = (0);
while(true){
if((i__18993 < count__18992)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__18991,i__18993);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__19059 = seq__18990;
var G__19060 = chunk__18991;
var G__19061 = count__18992;
var G__19062 = (i__18993 + (1));
seq__18990 = G__19059;
chunk__18991 = G__19060;
count__18992 = G__19061;
i__18993 = G__19062;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18990);
if(temp__5457__auto__){
var seq__18990__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18990__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18990__$1);
var G__19063 = cljs.core.chunk_rest.call(null,seq__18990__$1);
var G__19064 = c__4351__auto__;
var G__19065 = cljs.core.count.call(null,c__4351__auto__);
var G__19066 = (0);
seq__18990 = G__19063;
chunk__18991 = G__19064;
count__18992 = G__19065;
i__18993 = G__19066;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__18990__$1);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__19067 = cljs.core.next.call(null,seq__18990__$1);
var G__19068 = null;
var G__19069 = (0);
var G__19070 = (0);
seq__18990 = G__19067;
chunk__18991 = G__19068;
count__18992 = G__19069;
i__18993 = G__19070;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__3949__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(cljs.core.truth_(goog.string.startsWith(url,"ws"))){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(cljs.core.truth_(goog.string.startsWith(url,"http"))){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19071 = arguments.length;
var i__4532__auto___19072 = (0);
while(true){
if((i__4532__auto___19072 < len__4531__auto___19071)){
args__4534__auto__.push((arguments[i__4532__auto___19072]));

var G__19073 = (i__4532__auto___19072 + (1));
i__4532__auto___19072 = G__19073;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__18996){
var vec__18997 = p__18996;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18997,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
});

figwheel.repl.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.connect.cljs$lang$applyTo = (function (seq18995){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18995));
});


//# sourceMappingURL=repl.js.map
