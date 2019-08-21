// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24848__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24848__auto__){
return or__24848__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24848__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34163_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34163_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34168 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34169 = null;
var count__34170 = (0);
var i__34171 = (0);
while(true){
if((i__34171 < count__34170)){
var n = cljs.core._nth.call(null,chunk__34169,i__34171);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34172 = seq__34168;
var G__34173 = chunk__34169;
var G__34174 = count__34170;
var G__34175 = (i__34171 + (1));
seq__34168 = G__34172;
chunk__34169 = G__34173;
count__34170 = G__34174;
i__34171 = G__34175;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34168);
if(temp__4657__auto__){
var seq__34168__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34168__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34168__$1);
var G__34176 = cljs.core.chunk_rest.call(null,seq__34168__$1);
var G__34177 = c__25659__auto__;
var G__34178 = cljs.core.count.call(null,c__25659__auto__);
var G__34179 = (0);
seq__34168 = G__34176;
chunk__34169 = G__34177;
count__34170 = G__34178;
i__34171 = G__34179;
continue;
} else {
var n = cljs.core.first.call(null,seq__34168__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34180 = cljs.core.next.call(null,seq__34168__$1);
var G__34181 = null;
var G__34182 = (0);
var G__34183 = (0);
seq__34168 = G__34180;
chunk__34169 = G__34181;
count__34170 = G__34182;
i__34171 = G__34183;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34234_34245 = cljs.core.seq.call(null,deps);
var chunk__34235_34246 = null;
var count__34236_34247 = (0);
var i__34237_34248 = (0);
while(true){
if((i__34237_34248 < count__34236_34247)){
var dep_34249 = cljs.core._nth.call(null,chunk__34235_34246,i__34237_34248);
topo_sort_helper_STAR_.call(null,dep_34249,(depth + (1)),state);

var G__34250 = seq__34234_34245;
var G__34251 = chunk__34235_34246;
var G__34252 = count__34236_34247;
var G__34253 = (i__34237_34248 + (1));
seq__34234_34245 = G__34250;
chunk__34235_34246 = G__34251;
count__34236_34247 = G__34252;
i__34237_34248 = G__34253;
continue;
} else {
var temp__4657__auto___34254 = cljs.core.seq.call(null,seq__34234_34245);
if(temp__4657__auto___34254){
var seq__34234_34255__$1 = temp__4657__auto___34254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34234_34255__$1)){
var c__25659__auto___34256 = cljs.core.chunk_first.call(null,seq__34234_34255__$1);
var G__34257 = cljs.core.chunk_rest.call(null,seq__34234_34255__$1);
var G__34258 = c__25659__auto___34256;
var G__34259 = cljs.core.count.call(null,c__25659__auto___34256);
var G__34260 = (0);
seq__34234_34245 = G__34257;
chunk__34235_34246 = G__34258;
count__34236_34247 = G__34259;
i__34237_34248 = G__34260;
continue;
} else {
var dep_34261 = cljs.core.first.call(null,seq__34234_34255__$1);
topo_sort_helper_STAR_.call(null,dep_34261,(depth + (1)),state);

var G__34262 = cljs.core.next.call(null,seq__34234_34255__$1);
var G__34263 = null;
var G__34264 = (0);
var G__34265 = (0);
seq__34234_34245 = G__34262;
chunk__34235_34246 = G__34263;
count__34236_34247 = G__34264;
i__34237_34248 = G__34265;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34238){
var vec__34242 = p__34238;
var seq__34243 = cljs.core.seq.call(null,vec__34242);
var first__34244 = cljs.core.first.call(null,seq__34243);
var seq__34243__$1 = cljs.core.next.call(null,seq__34243);
var x = first__34244;
var xs = seq__34243__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34242,seq__34243,first__34244,seq__34243__$1,x,xs,get_deps__$1){
return (function (p1__34184_SHARP_){
return clojure.set.difference.call(null,p1__34184_SHARP_,x);
});})(vec__34242,seq__34243,first__34244,seq__34243__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34278 = cljs.core.seq.call(null,provides);
var chunk__34279 = null;
var count__34280 = (0);
var i__34281 = (0);
while(true){
if((i__34281 < count__34280)){
var prov = cljs.core._nth.call(null,chunk__34279,i__34281);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34282_34290 = cljs.core.seq.call(null,requires);
var chunk__34283_34291 = null;
var count__34284_34292 = (0);
var i__34285_34293 = (0);
while(true){
if((i__34285_34293 < count__34284_34292)){
var req_34294 = cljs.core._nth.call(null,chunk__34283_34291,i__34285_34293);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34294,prov);

var G__34295 = seq__34282_34290;
var G__34296 = chunk__34283_34291;
var G__34297 = count__34284_34292;
var G__34298 = (i__34285_34293 + (1));
seq__34282_34290 = G__34295;
chunk__34283_34291 = G__34296;
count__34284_34292 = G__34297;
i__34285_34293 = G__34298;
continue;
} else {
var temp__4657__auto___34299 = cljs.core.seq.call(null,seq__34282_34290);
if(temp__4657__auto___34299){
var seq__34282_34300__$1 = temp__4657__auto___34299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34282_34300__$1)){
var c__25659__auto___34301 = cljs.core.chunk_first.call(null,seq__34282_34300__$1);
var G__34302 = cljs.core.chunk_rest.call(null,seq__34282_34300__$1);
var G__34303 = c__25659__auto___34301;
var G__34304 = cljs.core.count.call(null,c__25659__auto___34301);
var G__34305 = (0);
seq__34282_34290 = G__34302;
chunk__34283_34291 = G__34303;
count__34284_34292 = G__34304;
i__34285_34293 = G__34305;
continue;
} else {
var req_34306 = cljs.core.first.call(null,seq__34282_34300__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34306,prov);

var G__34307 = cljs.core.next.call(null,seq__34282_34300__$1);
var G__34308 = null;
var G__34309 = (0);
var G__34310 = (0);
seq__34282_34290 = G__34307;
chunk__34283_34291 = G__34308;
count__34284_34292 = G__34309;
i__34285_34293 = G__34310;
continue;
}
} else {
}
}
break;
}

var G__34311 = seq__34278;
var G__34312 = chunk__34279;
var G__34313 = count__34280;
var G__34314 = (i__34281 + (1));
seq__34278 = G__34311;
chunk__34279 = G__34312;
count__34280 = G__34313;
i__34281 = G__34314;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34278);
if(temp__4657__auto__){
var seq__34278__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34278__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34278__$1);
var G__34315 = cljs.core.chunk_rest.call(null,seq__34278__$1);
var G__34316 = c__25659__auto__;
var G__34317 = cljs.core.count.call(null,c__25659__auto__);
var G__34318 = (0);
seq__34278 = G__34315;
chunk__34279 = G__34316;
count__34280 = G__34317;
i__34281 = G__34318;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34278__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34286_34319 = cljs.core.seq.call(null,requires);
var chunk__34287_34320 = null;
var count__34288_34321 = (0);
var i__34289_34322 = (0);
while(true){
if((i__34289_34322 < count__34288_34321)){
var req_34323 = cljs.core._nth.call(null,chunk__34287_34320,i__34289_34322);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34323,prov);

var G__34324 = seq__34286_34319;
var G__34325 = chunk__34287_34320;
var G__34326 = count__34288_34321;
var G__34327 = (i__34289_34322 + (1));
seq__34286_34319 = G__34324;
chunk__34287_34320 = G__34325;
count__34288_34321 = G__34326;
i__34289_34322 = G__34327;
continue;
} else {
var temp__4657__auto___34328__$1 = cljs.core.seq.call(null,seq__34286_34319);
if(temp__4657__auto___34328__$1){
var seq__34286_34329__$1 = temp__4657__auto___34328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34286_34329__$1)){
var c__25659__auto___34330 = cljs.core.chunk_first.call(null,seq__34286_34329__$1);
var G__34331 = cljs.core.chunk_rest.call(null,seq__34286_34329__$1);
var G__34332 = c__25659__auto___34330;
var G__34333 = cljs.core.count.call(null,c__25659__auto___34330);
var G__34334 = (0);
seq__34286_34319 = G__34331;
chunk__34287_34320 = G__34332;
count__34288_34321 = G__34333;
i__34289_34322 = G__34334;
continue;
} else {
var req_34335 = cljs.core.first.call(null,seq__34286_34329__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34335,prov);

var G__34336 = cljs.core.next.call(null,seq__34286_34329__$1);
var G__34337 = null;
var G__34338 = (0);
var G__34339 = (0);
seq__34286_34319 = G__34336;
chunk__34287_34320 = G__34337;
count__34288_34321 = G__34338;
i__34289_34322 = G__34339;
continue;
}
} else {
}
}
break;
}

var G__34340 = cljs.core.next.call(null,seq__34278__$1);
var G__34341 = null;
var G__34342 = (0);
var G__34343 = (0);
seq__34278 = G__34340;
chunk__34279 = G__34341;
count__34280 = G__34342;
i__34281 = G__34343;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34348_34352 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34349_34353 = null;
var count__34350_34354 = (0);
var i__34351_34355 = (0);
while(true){
if((i__34351_34355 < count__34350_34354)){
var ns_34356 = cljs.core._nth.call(null,chunk__34349_34353,i__34351_34355);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34356);

var G__34357 = seq__34348_34352;
var G__34358 = chunk__34349_34353;
var G__34359 = count__34350_34354;
var G__34360 = (i__34351_34355 + (1));
seq__34348_34352 = G__34357;
chunk__34349_34353 = G__34358;
count__34350_34354 = G__34359;
i__34351_34355 = G__34360;
continue;
} else {
var temp__4657__auto___34361 = cljs.core.seq.call(null,seq__34348_34352);
if(temp__4657__auto___34361){
var seq__34348_34362__$1 = temp__4657__auto___34361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34348_34362__$1)){
var c__25659__auto___34363 = cljs.core.chunk_first.call(null,seq__34348_34362__$1);
var G__34364 = cljs.core.chunk_rest.call(null,seq__34348_34362__$1);
var G__34365 = c__25659__auto___34363;
var G__34366 = cljs.core.count.call(null,c__25659__auto___34363);
var G__34367 = (0);
seq__34348_34352 = G__34364;
chunk__34349_34353 = G__34365;
count__34350_34354 = G__34366;
i__34351_34355 = G__34367;
continue;
} else {
var ns_34368 = cljs.core.first.call(null,seq__34348_34362__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34368);

var G__34369 = cljs.core.next.call(null,seq__34348_34362__$1);
var G__34370 = null;
var G__34371 = (0);
var G__34372 = (0);
seq__34348_34352 = G__34369;
chunk__34349_34353 = G__34370;
count__34350_34354 = G__34371;
i__34351_34355 = G__34372;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24848__auto__ = goog.require__;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34373__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34374__i = 0, G__34374__a = new Array(arguments.length -  0);
while (G__34374__i < G__34374__a.length) {G__34374__a[G__34374__i] = arguments[G__34374__i + 0]; ++G__34374__i;}
  args = new cljs.core.IndexedSeq(G__34374__a,0);
} 
return G__34373__delegate.call(this,args);};
G__34373.cljs$lang$maxFixedArity = 0;
G__34373.cljs$lang$applyTo = (function (arglist__34375){
var args = cljs.core.seq(arglist__34375);
return G__34373__delegate(args);
});
G__34373.cljs$core$IFn$_invoke$arity$variadic = G__34373__delegate;
return G__34373;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34376 = cljs.core._EQ_;
var expr__34377 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34376.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34377))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34376,expr__34377){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34376,expr__34377))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34376,expr__34377){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34379){if((e34379 instanceof Error)){
var e = e34379;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34379;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34376,expr__34377))
} else {
if(cljs.core.truth_(pred__34376.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34377))){
return ((function (pred__34376,expr__34377){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34376,expr__34377){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34376,expr__34377))
);

return deferred.addErrback(((function (deferred,pred__34376,expr__34377){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34376,expr__34377))
);
});
;})(pred__34376,expr__34377))
} else {
if(cljs.core.truth_(pred__34376.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34377))){
return ((function (pred__34376,expr__34377){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34380){if((e34380 instanceof Error)){
var e = e34380;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34380;

}
}})());
});
;})(pred__34376,expr__34377))
} else {
return ((function (pred__34376,expr__34377){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34376,expr__34377))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34381,callback){
var map__34384 = p__34381;
var map__34384__$1 = ((((!((map__34384 == null)))?((((map__34384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34384):map__34384);
var file_msg = map__34384__$1;
var request_url = cljs.core.get.call(null,map__34384__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34384,map__34384__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34384,map__34384__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__){
return (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34404 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34410_34430 = state_34408__$1;
(statearr_34410_34430[(2)] = inst_34404);

(statearr_34410_34430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34411_34431 = state_34408__$1;
(statearr_34411_34431[(2)] = null);

(statearr_34411_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34388 = (state_34408[(7)]);
var inst_34388__$1 = (state_34408[(2)]);
var state_34408__$1 = (function (){var statearr_34412 = state_34408;
(statearr_34412[(7)] = inst_34388__$1);

return statearr_34412;
})();
if(cljs.core.truth_(inst_34388__$1)){
var statearr_34413_34432 = state_34408__$1;
(statearr_34413_34432[(1)] = (5));

} else {
var statearr_34414_34433 = state_34408__$1;
(statearr_34414_34433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var state_34408__$1 = state_34408;
var statearr_34415_34434 = state_34408__$1;
(statearr_34415_34434[(2)] = null);

(statearr_34415_34434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (3))){
var inst_34406 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34408__$1,inst_34406);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34408__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34409 === (11))){
var inst_34400 = (state_34408[(2)]);
var state_34408__$1 = (function (){var statearr_34416 = state_34408;
(statearr_34416[(8)] = inst_34400);

return statearr_34416;
})();
var statearr_34417_34435 = state_34408__$1;
(statearr_34417_34435[(2)] = null);

(statearr_34417_34435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var inst_34392 = (state_34408[(9)]);
var inst_34394 = (state_34408[(10)]);
var inst_34396 = inst_34394.call(null,inst_34392);
var state_34408__$1 = state_34408;
var statearr_34418_34436 = state_34408__$1;
(statearr_34418_34436[(2)] = inst_34396);

(statearr_34418_34436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var inst_34388 = (state_34408[(7)]);
var inst_34390 = figwheel.client.file_reloading.blocking_load.call(null,inst_34388);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34408__$1,(8),inst_34390);
} else {
if((state_val_34409 === (10))){
var inst_34392 = (state_34408[(9)]);
var inst_34398 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34392);
var state_34408__$1 = state_34408;
var statearr_34419_34437 = state_34408__$1;
(statearr_34419_34437[(2)] = inst_34398);

(statearr_34419_34437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34388 = (state_34408[(7)]);
var inst_34394 = (state_34408[(10)]);
var inst_34392 = (state_34408[(2)]);
var inst_34393 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34394__$1 = cljs.core.get.call(null,inst_34393,inst_34388);
var state_34408__$1 = (function (){var statearr_34420 = state_34408;
(statearr_34420[(9)] = inst_34392);

(statearr_34420[(10)] = inst_34394__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34394__$1)){
var statearr_34421_34438 = state_34408__$1;
(statearr_34421_34438[(1)] = (9));

} else {
var statearr_34422_34439 = state_34408__$1;
(statearr_34422_34439[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28804__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28693__auto__ = null;
var figwheel$client$file_reloading$state_machine__28693__auto____0 = (function (){
var statearr_34426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34426[(0)] = figwheel$client$file_reloading$state_machine__28693__auto__);

(statearr_34426[(1)] = (1));

return statearr_34426;
});
var figwheel$client$file_reloading$state_machine__28693__auto____1 = (function (state_34408){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_34408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e34427){if((e34427 instanceof Object)){
var ex__28696__auto__ = e34427;
var statearr_34428_34440 = state_34408;
(statearr_34428_34440[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34441 = state_34408;
state_34408 = G__34441;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28693__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28693__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28693__auto____0;
figwheel$client$file_reloading$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28693__auto____1;
return figwheel$client$file_reloading$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__))
})();
var state__28806__auto__ = (function (){var statearr_34429 = f__28805__auto__.call(null);
(statearr_34429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_34429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__))
);

return c__28804__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34442,callback){
var map__34445 = p__34442;
var map__34445__$1 = ((((!((map__34445 == null)))?((((map__34445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34445):map__34445);
var file_msg = map__34445__$1;
var namespace = cljs.core.get.call(null,map__34445__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34445,map__34445__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34445,map__34445__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34447){
var map__34450 = p__34447;
var map__34450__$1 = ((((!((map__34450 == null)))?((((map__34450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34450):map__34450);
var file_msg = map__34450__$1;
var namespace = cljs.core.get.call(null,map__34450__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34452){
var map__34455 = p__34452;
var map__34455__$1 = ((((!((map__34455 == null)))?((((map__34455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34455):map__34455);
var file_msg = map__34455__$1;
var namespace = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24836__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24836__auto__){
var or__24848__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24836__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34457,callback){
var map__34460 = p__34457;
var map__34460__$1 = ((((!((map__34460 == null)))?((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34460):map__34460);
var file_msg = map__34460__$1;
var request_url = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28804__auto___34564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___34564,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___34564,out){
return (function (state_34546){
var state_val_34547 = (state_34546[(1)]);
if((state_val_34547 === (1))){
var inst_34520 = cljs.core.seq.call(null,files);
var inst_34521 = cljs.core.first.call(null,inst_34520);
var inst_34522 = cljs.core.next.call(null,inst_34520);
var inst_34523 = files;
var state_34546__$1 = (function (){var statearr_34548 = state_34546;
(statearr_34548[(7)] = inst_34521);

(statearr_34548[(8)] = inst_34523);

(statearr_34548[(9)] = inst_34522);

return statearr_34548;
})();
var statearr_34549_34565 = state_34546__$1;
(statearr_34549_34565[(2)] = null);

(statearr_34549_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (2))){
var inst_34529 = (state_34546[(10)]);
var inst_34523 = (state_34546[(8)]);
var inst_34528 = cljs.core.seq.call(null,inst_34523);
var inst_34529__$1 = cljs.core.first.call(null,inst_34528);
var inst_34530 = cljs.core.next.call(null,inst_34528);
var inst_34531 = (inst_34529__$1 == null);
var inst_34532 = cljs.core.not.call(null,inst_34531);
var state_34546__$1 = (function (){var statearr_34550 = state_34546;
(statearr_34550[(10)] = inst_34529__$1);

(statearr_34550[(11)] = inst_34530);

return statearr_34550;
})();
if(inst_34532){
var statearr_34551_34566 = state_34546__$1;
(statearr_34551_34566[(1)] = (4));

} else {
var statearr_34552_34567 = state_34546__$1;
(statearr_34552_34567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (3))){
var inst_34544 = (state_34546[(2)]);
var state_34546__$1 = state_34546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34546__$1,inst_34544);
} else {
if((state_val_34547 === (4))){
var inst_34529 = (state_34546[(10)]);
var inst_34534 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34529);
var state_34546__$1 = state_34546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34546__$1,(7),inst_34534);
} else {
if((state_val_34547 === (5))){
var inst_34540 = cljs.core.async.close_BANG_.call(null,out);
var state_34546__$1 = state_34546;
var statearr_34553_34568 = state_34546__$1;
(statearr_34553_34568[(2)] = inst_34540);

(statearr_34553_34568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (6))){
var inst_34542 = (state_34546[(2)]);
var state_34546__$1 = state_34546;
var statearr_34554_34569 = state_34546__$1;
(statearr_34554_34569[(2)] = inst_34542);

(statearr_34554_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34547 === (7))){
var inst_34530 = (state_34546[(11)]);
var inst_34536 = (state_34546[(2)]);
var inst_34537 = cljs.core.async.put_BANG_.call(null,out,inst_34536);
var inst_34523 = inst_34530;
var state_34546__$1 = (function (){var statearr_34555 = state_34546;
(statearr_34555[(8)] = inst_34523);

(statearr_34555[(12)] = inst_34537);

return statearr_34555;
})();
var statearr_34556_34570 = state_34546__$1;
(statearr_34556_34570[(2)] = null);

(statearr_34556_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28804__auto___34564,out))
;
return ((function (switch__28692__auto__,c__28804__auto___34564,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____0 = (function (){
var statearr_34560 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34560[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__);

(statearr_34560[(1)] = (1));

return statearr_34560;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____1 = (function (state_34546){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_34546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e34561){if((e34561 instanceof Object)){
var ex__28696__auto__ = e34561;
var statearr_34562_34571 = state_34546;
(statearr_34562_34571[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34572 = state_34546;
state_34546 = G__34572;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__ = function(state_34546){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____1.call(this,state_34546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___34564,out))
})();
var state__28806__auto__ = (function (){var statearr_34563 = f__28805__auto__.call(null);
(statearr_34563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___34564);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___34564,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34573,opts){
var map__34577 = p__34573;
var map__34577__$1 = ((((!((map__34577 == null)))?((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34577):map__34577);
var eval_body__$1 = cljs.core.get.call(null,map__34577__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34577__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24836__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24836__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24836__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34579){var e = e34579;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34580_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34580_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34589){
var vec__34590 = p__34589;
var k = cljs.core.nth.call(null,vec__34590,(0),null);
var v = cljs.core.nth.call(null,vec__34590,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34593){
var vec__34594 = p__34593;
var k = cljs.core.nth.call(null,vec__34594,(0),null);
var v = cljs.core.nth.call(null,vec__34594,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34600,p__34601){
var map__34848 = p__34600;
var map__34848__$1 = ((((!((map__34848 == null)))?((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var opts = map__34848__$1;
var before_jsload = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34849 = p__34601;
var map__34849__$1 = ((((!((map__34849 == null)))?((((map__34849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34849):map__34849);
var msg = map__34849__$1;
var files = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35002){
var state_val_35003 = (state_35002[(1)]);
if((state_val_35003 === (7))){
var inst_34863 = (state_35002[(7)]);
var inst_34866 = (state_35002[(8)]);
var inst_34865 = (state_35002[(9)]);
var inst_34864 = (state_35002[(10)]);
var inst_34871 = cljs.core._nth.call(null,inst_34864,inst_34866);
var inst_34872 = figwheel.client.file_reloading.eval_body.call(null,inst_34871,opts);
var inst_34873 = (inst_34866 + (1));
var tmp35004 = inst_34863;
var tmp35005 = inst_34865;
var tmp35006 = inst_34864;
var inst_34863__$1 = tmp35004;
var inst_34864__$1 = tmp35006;
var inst_34865__$1 = tmp35005;
var inst_34866__$1 = inst_34873;
var state_35002__$1 = (function (){var statearr_35007 = state_35002;
(statearr_35007[(7)] = inst_34863__$1);

(statearr_35007[(8)] = inst_34866__$1);

(statearr_35007[(9)] = inst_34865__$1);

(statearr_35007[(11)] = inst_34872);

(statearr_35007[(10)] = inst_34864__$1);

return statearr_35007;
})();
var statearr_35008_35094 = state_35002__$1;
(statearr_35008_35094[(2)] = null);

(statearr_35008_35094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (20))){
var inst_34906 = (state_35002[(12)]);
var inst_34914 = figwheel.client.file_reloading.sort_files.call(null,inst_34906);
var state_35002__$1 = state_35002;
var statearr_35009_35095 = state_35002__$1;
(statearr_35009_35095[(2)] = inst_34914);

(statearr_35009_35095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (27))){
var state_35002__$1 = state_35002;
var statearr_35010_35096 = state_35002__$1;
(statearr_35010_35096[(2)] = null);

(statearr_35010_35096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (1))){
var inst_34855 = (state_35002[(13)]);
var inst_34852 = before_jsload.call(null,files);
var inst_34853 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34854 = (function (){return ((function (inst_34855,inst_34852,inst_34853,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34597_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34597_SHARP_);
});
;})(inst_34855,inst_34852,inst_34853,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34855__$1 = cljs.core.filter.call(null,inst_34854,files);
var inst_34856 = cljs.core.not_empty.call(null,inst_34855__$1);
var state_35002__$1 = (function (){var statearr_35011 = state_35002;
(statearr_35011[(14)] = inst_34852);

(statearr_35011[(13)] = inst_34855__$1);

(statearr_35011[(15)] = inst_34853);

return statearr_35011;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_35012_35097 = state_35002__$1;
(statearr_35012_35097[(1)] = (2));

} else {
var statearr_35013_35098 = state_35002__$1;
(statearr_35013_35098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (24))){
var state_35002__$1 = state_35002;
var statearr_35014_35099 = state_35002__$1;
(statearr_35014_35099[(2)] = null);

(statearr_35014_35099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (39))){
var inst_34956 = (state_35002[(16)]);
var state_35002__$1 = state_35002;
var statearr_35015_35100 = state_35002__$1;
(statearr_35015_35100[(2)] = inst_34956);

(statearr_35015_35100[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (46))){
var inst_34997 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35016_35101 = state_35002__$1;
(statearr_35016_35101[(2)] = inst_34997);

(statearr_35016_35101[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (4))){
var inst_34900 = (state_35002[(2)]);
var inst_34901 = cljs.core.List.EMPTY;
var inst_34902 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34901);
var inst_34903 = (function (){return ((function (inst_34900,inst_34901,inst_34902,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34598_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34598_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34598_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34598_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_34900,inst_34901,inst_34902,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34904 = cljs.core.filter.call(null,inst_34903,files);
var inst_34905 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34906 = cljs.core.concat.call(null,inst_34904,inst_34905);
var state_35002__$1 = (function (){var statearr_35017 = state_35002;
(statearr_35017[(17)] = inst_34900);

(statearr_35017[(12)] = inst_34906);

(statearr_35017[(18)] = inst_34902);

return statearr_35017;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35018_35102 = state_35002__$1;
(statearr_35018_35102[(1)] = (16));

} else {
var statearr_35019_35103 = state_35002__$1;
(statearr_35019_35103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (15))){
var inst_34890 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35020_35104 = state_35002__$1;
(statearr_35020_35104[(2)] = inst_34890);

(statearr_35020_35104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (21))){
var inst_34916 = (state_35002[(19)]);
var inst_34916__$1 = (state_35002[(2)]);
var inst_34917 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34916__$1);
var state_35002__$1 = (function (){var statearr_35021 = state_35002;
(statearr_35021[(19)] = inst_34916__$1);

return statearr_35021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35002__$1,(22),inst_34917);
} else {
if((state_val_35003 === (31))){
var inst_35000 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35002__$1,inst_35000);
} else {
if((state_val_35003 === (32))){
var inst_34956 = (state_35002[(16)]);
var inst_34961 = inst_34956.cljs$lang$protocol_mask$partition0$;
var inst_34962 = (inst_34961 & (64));
var inst_34963 = inst_34956.cljs$core$ISeq$;
var inst_34964 = (inst_34962) || (inst_34963);
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34964)){
var statearr_35022_35105 = state_35002__$1;
(statearr_35022_35105[(1)] = (35));

} else {
var statearr_35023_35106 = state_35002__$1;
(statearr_35023_35106[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (40))){
var inst_34977 = (state_35002[(20)]);
var inst_34976 = (state_35002[(2)]);
var inst_34977__$1 = cljs.core.get.call(null,inst_34976,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34978 = cljs.core.get.call(null,inst_34976,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34979 = cljs.core.not_empty.call(null,inst_34977__$1);
var state_35002__$1 = (function (){var statearr_35024 = state_35002;
(statearr_35024[(20)] = inst_34977__$1);

(statearr_35024[(21)] = inst_34978);

return statearr_35024;
})();
if(cljs.core.truth_(inst_34979)){
var statearr_35025_35107 = state_35002__$1;
(statearr_35025_35107[(1)] = (41));

} else {
var statearr_35026_35108 = state_35002__$1;
(statearr_35026_35108[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (33))){
var state_35002__$1 = state_35002;
var statearr_35027_35109 = state_35002__$1;
(statearr_35027_35109[(2)] = false);

(statearr_35027_35109[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (13))){
var inst_34876 = (state_35002[(22)]);
var inst_34880 = cljs.core.chunk_first.call(null,inst_34876);
var inst_34881 = cljs.core.chunk_rest.call(null,inst_34876);
var inst_34882 = cljs.core.count.call(null,inst_34880);
var inst_34863 = inst_34881;
var inst_34864 = inst_34880;
var inst_34865 = inst_34882;
var inst_34866 = (0);
var state_35002__$1 = (function (){var statearr_35028 = state_35002;
(statearr_35028[(7)] = inst_34863);

(statearr_35028[(8)] = inst_34866);

(statearr_35028[(9)] = inst_34865);

(statearr_35028[(10)] = inst_34864);

return statearr_35028;
})();
var statearr_35029_35110 = state_35002__$1;
(statearr_35029_35110[(2)] = null);

(statearr_35029_35110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (22))){
var inst_34924 = (state_35002[(23)]);
var inst_34919 = (state_35002[(24)]);
var inst_34920 = (state_35002[(25)]);
var inst_34916 = (state_35002[(19)]);
var inst_34919__$1 = (state_35002[(2)]);
var inst_34920__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34919__$1);
var inst_34921 = (function (){var all_files = inst_34916;
var res_SINGLEQUOTE_ = inst_34919__$1;
var res = inst_34920__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34924,inst_34919,inst_34920,inst_34916,inst_34919__$1,inst_34920__$1,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34599_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34599_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34924,inst_34919,inst_34920,inst_34916,inst_34919__$1,inst_34920__$1,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34922 = cljs.core.filter.call(null,inst_34921,inst_34919__$1);
var inst_34923 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34924__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34923);
var inst_34925 = cljs.core.not_empty.call(null,inst_34924__$1);
var state_35002__$1 = (function (){var statearr_35030 = state_35002;
(statearr_35030[(23)] = inst_34924__$1);

(statearr_35030[(24)] = inst_34919__$1);

(statearr_35030[(25)] = inst_34920__$1);

(statearr_35030[(26)] = inst_34922);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34925)){
var statearr_35031_35111 = state_35002__$1;
(statearr_35031_35111[(1)] = (23));

} else {
var statearr_35032_35112 = state_35002__$1;
(statearr_35032_35112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (36))){
var state_35002__$1 = state_35002;
var statearr_35033_35113 = state_35002__$1;
(statearr_35033_35113[(2)] = false);

(statearr_35033_35113[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (41))){
var inst_34977 = (state_35002[(20)]);
var inst_34981 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34982 = cljs.core.map.call(null,inst_34981,inst_34977);
var inst_34983 = cljs.core.pr_str.call(null,inst_34982);
var inst_34984 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34983)].join('');
var inst_34985 = figwheel.client.utils.log.call(null,inst_34984);
var state_35002__$1 = state_35002;
var statearr_35034_35114 = state_35002__$1;
(statearr_35034_35114[(2)] = inst_34985);

(statearr_35034_35114[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (43))){
var inst_34978 = (state_35002[(21)]);
var inst_34988 = (state_35002[(2)]);
var inst_34989 = cljs.core.not_empty.call(null,inst_34978);
var state_35002__$1 = (function (){var statearr_35035 = state_35002;
(statearr_35035[(27)] = inst_34988);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34989)){
var statearr_35036_35115 = state_35002__$1;
(statearr_35036_35115[(1)] = (44));

} else {
var statearr_35037_35116 = state_35002__$1;
(statearr_35037_35116[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (29))){
var inst_34924 = (state_35002[(23)]);
var inst_34956 = (state_35002[(16)]);
var inst_34919 = (state_35002[(24)]);
var inst_34920 = (state_35002[(25)]);
var inst_34916 = (state_35002[(19)]);
var inst_34922 = (state_35002[(26)]);
var inst_34952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34955 = (function (){var all_files = inst_34916;
var res_SINGLEQUOTE_ = inst_34919;
var res = inst_34920;
var files_not_loaded = inst_34922;
var dependencies_that_loaded = inst_34924;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34956,inst_34919,inst_34920,inst_34916,inst_34922,inst_34952,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34954){
var map__35038 = p__34954;
var map__35038__$1 = ((((!((map__35038 == null)))?((((map__35038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);
var namespace = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34956,inst_34919,inst_34920,inst_34916,inst_34922,inst_34952,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34956__$1 = cljs.core.group_by.call(null,inst_34955,inst_34922);
var inst_34958 = (inst_34956__$1 == null);
var inst_34959 = cljs.core.not.call(null,inst_34958);
var state_35002__$1 = (function (){var statearr_35040 = state_35002;
(statearr_35040[(28)] = inst_34952);

(statearr_35040[(16)] = inst_34956__$1);

return statearr_35040;
})();
if(inst_34959){
var statearr_35041_35117 = state_35002__$1;
(statearr_35041_35117[(1)] = (32));

} else {
var statearr_35042_35118 = state_35002__$1;
(statearr_35042_35118[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (44))){
var inst_34978 = (state_35002[(21)]);
var inst_34991 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34978);
var inst_34992 = cljs.core.pr_str.call(null,inst_34991);
var inst_34993 = [cljs.core.str("not required: "),cljs.core.str(inst_34992)].join('');
var inst_34994 = figwheel.client.utils.log.call(null,inst_34993);
var state_35002__$1 = state_35002;
var statearr_35043_35119 = state_35002__$1;
(statearr_35043_35119[(2)] = inst_34994);

(statearr_35043_35119[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (6))){
var inst_34897 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35044_35120 = state_35002__$1;
(statearr_35044_35120[(2)] = inst_34897);

(statearr_35044_35120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (28))){
var inst_34922 = (state_35002[(26)]);
var inst_34949 = (state_35002[(2)]);
var inst_34950 = cljs.core.not_empty.call(null,inst_34922);
var state_35002__$1 = (function (){var statearr_35045 = state_35002;
(statearr_35045[(29)] = inst_34949);

return statearr_35045;
})();
if(cljs.core.truth_(inst_34950)){
var statearr_35046_35121 = state_35002__$1;
(statearr_35046_35121[(1)] = (29));

} else {
var statearr_35047_35122 = state_35002__$1;
(statearr_35047_35122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (25))){
var inst_34920 = (state_35002[(25)]);
var inst_34936 = (state_35002[(2)]);
var inst_34937 = cljs.core.not_empty.call(null,inst_34920);
var state_35002__$1 = (function (){var statearr_35048 = state_35002;
(statearr_35048[(30)] = inst_34936);

return statearr_35048;
})();
if(cljs.core.truth_(inst_34937)){
var statearr_35049_35123 = state_35002__$1;
(statearr_35049_35123[(1)] = (26));

} else {
var statearr_35050_35124 = state_35002__$1;
(statearr_35050_35124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (34))){
var inst_34971 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34971)){
var statearr_35051_35125 = state_35002__$1;
(statearr_35051_35125[(1)] = (38));

} else {
var statearr_35052_35126 = state_35002__$1;
(statearr_35052_35126[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (17))){
var state_35002__$1 = state_35002;
var statearr_35053_35127 = state_35002__$1;
(statearr_35053_35127[(2)] = recompile_dependents);

(statearr_35053_35127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (3))){
var state_35002__$1 = state_35002;
var statearr_35054_35128 = state_35002__$1;
(statearr_35054_35128[(2)] = null);

(statearr_35054_35128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (12))){
var inst_34893 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35055_35129 = state_35002__$1;
(statearr_35055_35129[(2)] = inst_34893);

(statearr_35055_35129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (2))){
var inst_34855 = (state_35002[(13)]);
var inst_34862 = cljs.core.seq.call(null,inst_34855);
var inst_34863 = inst_34862;
var inst_34864 = null;
var inst_34865 = (0);
var inst_34866 = (0);
var state_35002__$1 = (function (){var statearr_35056 = state_35002;
(statearr_35056[(7)] = inst_34863);

(statearr_35056[(8)] = inst_34866);

(statearr_35056[(9)] = inst_34865);

(statearr_35056[(10)] = inst_34864);

return statearr_35056;
})();
var statearr_35057_35130 = state_35002__$1;
(statearr_35057_35130[(2)] = null);

(statearr_35057_35130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (23))){
var inst_34924 = (state_35002[(23)]);
var inst_34919 = (state_35002[(24)]);
var inst_34920 = (state_35002[(25)]);
var inst_34916 = (state_35002[(19)]);
var inst_34922 = (state_35002[(26)]);
var inst_34927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34929 = (function (){var all_files = inst_34916;
var res_SINGLEQUOTE_ = inst_34919;
var res = inst_34920;
var files_not_loaded = inst_34922;
var dependencies_that_loaded = inst_34924;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34927,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34928){
var map__35058 = p__34928;
var map__35058__$1 = ((((!((map__35058 == null)))?((((map__35058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35058):map__35058);
var request_url = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34927,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34930 = cljs.core.reverse.call(null,inst_34924);
var inst_34931 = cljs.core.map.call(null,inst_34929,inst_34930);
var inst_34932 = cljs.core.pr_str.call(null,inst_34931);
var inst_34933 = figwheel.client.utils.log.call(null,inst_34932);
var state_35002__$1 = (function (){var statearr_35060 = state_35002;
(statearr_35060[(31)] = inst_34927);

return statearr_35060;
})();
var statearr_35061_35131 = state_35002__$1;
(statearr_35061_35131[(2)] = inst_34933);

(statearr_35061_35131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (35))){
var state_35002__$1 = state_35002;
var statearr_35062_35132 = state_35002__$1;
(statearr_35062_35132[(2)] = true);

(statearr_35062_35132[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (19))){
var inst_34906 = (state_35002[(12)]);
var inst_34912 = figwheel.client.file_reloading.expand_files.call(null,inst_34906);
var state_35002__$1 = state_35002;
var statearr_35063_35133 = state_35002__$1;
(statearr_35063_35133[(2)] = inst_34912);

(statearr_35063_35133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (11))){
var state_35002__$1 = state_35002;
var statearr_35064_35134 = state_35002__$1;
(statearr_35064_35134[(2)] = null);

(statearr_35064_35134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (9))){
var inst_34895 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35065_35135 = state_35002__$1;
(statearr_35065_35135[(2)] = inst_34895);

(statearr_35065_35135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (5))){
var inst_34866 = (state_35002[(8)]);
var inst_34865 = (state_35002[(9)]);
var inst_34868 = (inst_34866 < inst_34865);
var inst_34869 = inst_34868;
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34869)){
var statearr_35066_35136 = state_35002__$1;
(statearr_35066_35136[(1)] = (7));

} else {
var statearr_35067_35137 = state_35002__$1;
(statearr_35067_35137[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (14))){
var inst_34876 = (state_35002[(22)]);
var inst_34885 = cljs.core.first.call(null,inst_34876);
var inst_34886 = figwheel.client.file_reloading.eval_body.call(null,inst_34885,opts);
var inst_34887 = cljs.core.next.call(null,inst_34876);
var inst_34863 = inst_34887;
var inst_34864 = null;
var inst_34865 = (0);
var inst_34866 = (0);
var state_35002__$1 = (function (){var statearr_35068 = state_35002;
(statearr_35068[(7)] = inst_34863);

(statearr_35068[(8)] = inst_34866);

(statearr_35068[(9)] = inst_34865);

(statearr_35068[(32)] = inst_34886);

(statearr_35068[(10)] = inst_34864);

return statearr_35068;
})();
var statearr_35069_35138 = state_35002__$1;
(statearr_35069_35138[(2)] = null);

(statearr_35069_35138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (45))){
var state_35002__$1 = state_35002;
var statearr_35070_35139 = state_35002__$1;
(statearr_35070_35139[(2)] = null);

(statearr_35070_35139[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (26))){
var inst_34924 = (state_35002[(23)]);
var inst_34919 = (state_35002[(24)]);
var inst_34920 = (state_35002[(25)]);
var inst_34916 = (state_35002[(19)]);
var inst_34922 = (state_35002[(26)]);
var inst_34939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34941 = (function (){var all_files = inst_34916;
var res_SINGLEQUOTE_ = inst_34919;
var res = inst_34920;
var files_not_loaded = inst_34922;
var dependencies_that_loaded = inst_34924;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34939,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34940){
var map__35071 = p__34940;
var map__35071__$1 = ((((!((map__35071 == null)))?((((map__35071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35071):map__35071);
var namespace = cljs.core.get.call(null,map__35071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34939,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34942 = cljs.core.map.call(null,inst_34941,inst_34920);
var inst_34943 = cljs.core.pr_str.call(null,inst_34942);
var inst_34944 = figwheel.client.utils.log.call(null,inst_34943);
var inst_34945 = (function (){var all_files = inst_34916;
var res_SINGLEQUOTE_ = inst_34919;
var res = inst_34920;
var files_not_loaded = inst_34922;
var dependencies_that_loaded = inst_34924;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34939,inst_34941,inst_34942,inst_34943,inst_34944,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34924,inst_34919,inst_34920,inst_34916,inst_34922,inst_34939,inst_34941,inst_34942,inst_34943,inst_34944,state_val_35003,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34946 = setTimeout(inst_34945,(10));
var state_35002__$1 = (function (){var statearr_35073 = state_35002;
(statearr_35073[(33)] = inst_34944);

(statearr_35073[(34)] = inst_34939);

return statearr_35073;
})();
var statearr_35074_35140 = state_35002__$1;
(statearr_35074_35140[(2)] = inst_34946);

(statearr_35074_35140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (16))){
var state_35002__$1 = state_35002;
var statearr_35075_35141 = state_35002__$1;
(statearr_35075_35141[(2)] = reload_dependents);

(statearr_35075_35141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (38))){
var inst_34956 = (state_35002[(16)]);
var inst_34973 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34956);
var state_35002__$1 = state_35002;
var statearr_35076_35142 = state_35002__$1;
(statearr_35076_35142[(2)] = inst_34973);

(statearr_35076_35142[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (30))){
var state_35002__$1 = state_35002;
var statearr_35077_35143 = state_35002__$1;
(statearr_35077_35143[(2)] = null);

(statearr_35077_35143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (10))){
var inst_34876 = (state_35002[(22)]);
var inst_34878 = cljs.core.chunked_seq_QMARK_.call(null,inst_34876);
var state_35002__$1 = state_35002;
if(inst_34878){
var statearr_35078_35144 = state_35002__$1;
(statearr_35078_35144[(1)] = (13));

} else {
var statearr_35079_35145 = state_35002__$1;
(statearr_35079_35145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (18))){
var inst_34910 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34910)){
var statearr_35080_35146 = state_35002__$1;
(statearr_35080_35146[(1)] = (19));

} else {
var statearr_35081_35147 = state_35002__$1;
(statearr_35081_35147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (42))){
var state_35002__$1 = state_35002;
var statearr_35082_35148 = state_35002__$1;
(statearr_35082_35148[(2)] = null);

(statearr_35082_35148[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (37))){
var inst_34968 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35083_35149 = state_35002__$1;
(statearr_35083_35149[(2)] = inst_34968);

(statearr_35083_35149[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (8))){
var inst_34863 = (state_35002[(7)]);
var inst_34876 = (state_35002[(22)]);
var inst_34876__$1 = cljs.core.seq.call(null,inst_34863);
var state_35002__$1 = (function (){var statearr_35084 = state_35002;
(statearr_35084[(22)] = inst_34876__$1);

return statearr_35084;
})();
if(inst_34876__$1){
var statearr_35085_35150 = state_35002__$1;
(statearr_35085_35150[(1)] = (10));

} else {
var statearr_35086_35151 = state_35002__$1;
(statearr_35086_35151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28692__auto__,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____0 = (function (){
var statearr_35090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35090[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__);

(statearr_35090[(1)] = (1));

return statearr_35090;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____1 = (function (state_35002){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_35002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e35091){if((e35091 instanceof Object)){
var ex__28696__auto__ = e35091;
var statearr_35092_35152 = state_35002;
(statearr_35092_35152[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35153 = state_35002;
state_35002 = G__35153;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__ = function(state_35002){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____1.call(this,state_35002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28806__auto__ = (function (){var statearr_35093 = f__28805__auto__.call(null);
(statearr_35093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__,map__34848,map__34848__$1,opts,before_jsload,on_jsload,reload_dependents,map__34849,map__34849__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28804__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35156,link){
var map__35159 = p__35156;
var map__35159__$1 = ((((!((map__35159 == null)))?((((map__35159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35159):map__35159);
var file = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35159,map__35159__$1,file){
return (function (p1__35154_SHARP_,p2__35155_SHARP_){
if(cljs.core._EQ_.call(null,p1__35154_SHARP_,p2__35155_SHARP_)){
return p1__35154_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35159,map__35159__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35165){
var map__35166 = p__35165;
var map__35166__$1 = ((((!((map__35166 == null)))?((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35166):map__35166);
var match_length = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35161_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35161_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35168_SHARP_,p2__35169_SHARP_){
return cljs.core.assoc.call(null,p1__35168_SHARP_,cljs.core.get.call(null,p2__35169_SHARP_,key),p2__35169_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35170 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35170);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35170);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35171,p__35172){
var map__35177 = p__35171;
var map__35177__$1 = ((((!((map__35177 == null)))?((((map__35177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35177):map__35177);
var on_cssload = cljs.core.get.call(null,map__35177__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35178 = p__35172;
var map__35178__$1 = ((((!((map__35178 == null)))?((((map__35178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35178):map__35178);
var files_msg = map__35178__$1;
var files = cljs.core.get.call(null,map__35178__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1566349705854