// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32073__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32070 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32071 = cljs.core.seq.call(null,vec__32070);
var first__32072 = cljs.core.first.call(null,seq__32071);
var seq__32071__$1 = cljs.core.next.call(null,seq__32071);
var tag = first__32072;
var body = seq__32071__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32074__i = 0, G__32074__a = new Array(arguments.length -  0);
while (G__32074__i < G__32074__a.length) {G__32074__a[G__32074__i] = arguments[G__32074__i + 0]; ++G__32074__i;}
  args = new cljs.core.IndexedSeq(G__32074__a,0);
} 
return G__32073__delegate.call(this,args);};
G__32073.cljs$lang$maxFixedArity = 0;
G__32073.cljs$lang$applyTo = (function (arglist__32075){
var args = cljs.core.seq(arglist__32075);
return G__32073__delegate(args);
});
G__32073.cljs$core$IFn$_invoke$arity$variadic = G__32073__delegate;
return G__32073;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__32080(s__32081){
return (new cljs.core.LazySeq(null,(function (){
var s__32081__$1 = s__32081;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32081__$1);
if(temp__4657__auto__){
var s__32081__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32081__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32081__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32083 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32082 = (0);
while(true){
if((i__32082 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__32082);
cljs.core.chunk_append.call(null,b__32083,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32084 = (i__32082 + (1));
i__32082 = G__32084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32083),sablono$core$update_arglists_$_iter__32080.call(null,cljs.core.chunk_rest.call(null,s__32081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32083),null);
}
} else {
var args = cljs.core.first.call(null,s__32081__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32080.call(null,cljs.core.rest.call(null,s__32081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32090 = arguments.length;
var i__25924__auto___32091 = (0);
while(true){
if((i__25924__auto___32091 < len__25923__auto___32090)){
args__25930__auto__.push((arguments[i__25924__auto___32091]));

var G__32092 = (i__25924__auto___32091 + (1));
i__25924__auto___32091 = G__32092;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__32086(s__32087){
return (new cljs.core.LazySeq(null,(function (){
var s__32087__$1 = s__32087;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32087__$1);
if(temp__4657__auto__){
var s__32087__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32087__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32087__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32089 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32088 = (0);
while(true){
if((i__32088 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__32088);
cljs.core.chunk_append.call(null,b__32089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32093 = (i__32088 + (1));
i__32088 = G__32093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32089),sablono$core$iter__32086.call(null,cljs.core.chunk_rest.call(null,s__32087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32089),null);
}
} else {
var style = cljs.core.first.call(null,s__32087__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32086.call(null,cljs.core.rest.call(null,s__32087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32085){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32085));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32094 = (function sablono$core$link_to32094(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32097 = arguments.length;
var i__25924__auto___32098 = (0);
while(true){
if((i__25924__auto___32098 < len__25923__auto___32097)){
args__25930__auto__.push((arguments[i__25924__auto___32098]));

var G__32099 = (i__25924__auto___32098 + (1));
i__25924__auto___32098 = G__32099;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32094.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to32094.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32094.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32094.cljs$lang$applyTo = (function (seq32095){
var G__32096 = cljs.core.first.call(null,seq32095);
var seq32095__$1 = cljs.core.next.call(null,seq32095);
return sablono.core.link_to32094.cljs$core$IFn$_invoke$arity$variadic(G__32096,seq32095__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32094);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32100 = (function sablono$core$mail_to32100(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32107 = arguments.length;
var i__25924__auto___32108 = (0);
while(true){
if((i__25924__auto___32108 < len__25923__auto___32107)){
args__25930__auto__.push((arguments[i__25924__auto___32108]));

var G__32109 = (i__25924__auto___32108 + (1));
i__25924__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32100.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to32100.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32103){
var vec__32104 = p__32103;
var content = cljs.core.nth.call(null,vec__32104,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32100.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32100.cljs$lang$applyTo = (function (seq32101){
var G__32102 = cljs.core.first.call(null,seq32101);
var seq32101__$1 = cljs.core.next.call(null,seq32101);
return sablono.core.mail_to32100.cljs$core$IFn$_invoke$arity$variadic(G__32102,seq32101__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32100);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32110 = (function sablono$core$unordered_list32110(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list32110_$_iter__32115(s__32116){
return (new cljs.core.LazySeq(null,(function (){
var s__32116__$1 = s__32116;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32116__$1);
if(temp__4657__auto__){
var s__32116__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32116__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32116__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32118 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32117 = (0);
while(true){
if((i__32117 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32117);
cljs.core.chunk_append.call(null,b__32118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32119 = (i__32117 + (1));
i__32117 = G__32119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32118),sablono$core$unordered_list32110_$_iter__32115.call(null,cljs.core.chunk_rest.call(null,s__32116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32118),null);
}
} else {
var x = cljs.core.first.call(null,s__32116__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32110_$_iter__32115.call(null,cljs.core.rest.call(null,s__32116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32110);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32120 = (function sablono$core$ordered_list32120(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list32120_$_iter__32125(s__32126){
return (new cljs.core.LazySeq(null,(function (){
var s__32126__$1 = s__32126;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32126__$1);
if(temp__4657__auto__){
var s__32126__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32126__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32126__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32128 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32127 = (0);
while(true){
if((i__32127 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32127);
cljs.core.chunk_append.call(null,b__32128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32129 = (i__32127 + (1));
i__32127 = G__32129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32128),sablono$core$ordered_list32120_$_iter__32125.call(null,cljs.core.chunk_rest.call(null,s__32126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32128),null);
}
} else {
var x = cljs.core.first.call(null,s__32126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32120_$_iter__32125.call(null,cljs.core.rest.call(null,s__32126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32120);
/**
 * Create an image element.
 */
sablono.core.image32130 = (function sablono$core$image32130(var_args){
var args32131 = [];
var len__25923__auto___32134 = arguments.length;
var i__25924__auto___32135 = (0);
while(true){
if((i__25924__auto___32135 < len__25923__auto___32134)){
args32131.push((arguments[i__25924__auto___32135]));

var G__32136 = (i__25924__auto___32135 + (1));
i__25924__auto___32135 = G__32136;
continue;
} else {
}
break;
}

var G__32133 = args32131.length;
switch (G__32133) {
case 1:
return sablono.core.image32130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32131.length)].join('')));

}
});

sablono.core.image32130.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32130.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32130.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32130);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32138_SHARP_,p2__32139_SHARP_){
return [cljs.core.str(p1__32138_SHARP_),cljs.core.str("["),cljs.core.str(p2__32139_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32140_SHARP_,p2__32141_SHARP_){
return [cljs.core.str(p1__32140_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32141_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32142 = (function sablono$core$color_field32142(var_args){
var args32143 = [];
var len__25923__auto___32210 = arguments.length;
var i__25924__auto___32211 = (0);
while(true){
if((i__25924__auto___32211 < len__25923__auto___32210)){
args32143.push((arguments[i__25924__auto___32211]));

var G__32212 = (i__25924__auto___32211 + (1));
i__25924__auto___32211 = G__32212;
continue;
} else {
}
break;
}

var G__32145 = args32143.length;
switch (G__32145) {
case 1:
return sablono.core.color_field32142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32143.length)].join('')));

}
});

sablono.core.color_field32142.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.color_field32142.call(null,name__32057__auto__,null);
});

sablono.core.color_field32142.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.color_field32142.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32142);

/**
 * Creates a date input field.
 */
sablono.core.date_field32146 = (function sablono$core$date_field32146(var_args){
var args32147 = [];
var len__25923__auto___32214 = arguments.length;
var i__25924__auto___32215 = (0);
while(true){
if((i__25924__auto___32215 < len__25923__auto___32214)){
args32147.push((arguments[i__25924__auto___32215]));

var G__32216 = (i__25924__auto___32215 + (1));
i__25924__auto___32215 = G__32216;
continue;
} else {
}
break;
}

var G__32149 = args32147.length;
switch (G__32149) {
case 1:
return sablono.core.date_field32146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32147.length)].join('')));

}
});

sablono.core.date_field32146.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.date_field32146.call(null,name__32057__auto__,null);
});

sablono.core.date_field32146.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.date_field32146.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32146);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32150 = (function sablono$core$datetime_field32150(var_args){
var args32151 = [];
var len__25923__auto___32218 = arguments.length;
var i__25924__auto___32219 = (0);
while(true){
if((i__25924__auto___32219 < len__25923__auto___32218)){
args32151.push((arguments[i__25924__auto___32219]));

var G__32220 = (i__25924__auto___32219 + (1));
i__25924__auto___32219 = G__32220;
continue;
} else {
}
break;
}

var G__32153 = args32151.length;
switch (G__32153) {
case 1:
return sablono.core.datetime_field32150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32151.length)].join('')));

}
});

sablono.core.datetime_field32150.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.datetime_field32150.call(null,name__32057__auto__,null);
});

sablono.core.datetime_field32150.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.datetime_field32150.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32150);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32154 = (function sablono$core$datetime_local_field32154(var_args){
var args32155 = [];
var len__25923__auto___32222 = arguments.length;
var i__25924__auto___32223 = (0);
while(true){
if((i__25924__auto___32223 < len__25923__auto___32222)){
args32155.push((arguments[i__25924__auto___32223]));

var G__32224 = (i__25924__auto___32223 + (1));
i__25924__auto___32223 = G__32224;
continue;
} else {
}
break;
}

var G__32157 = args32155.length;
switch (G__32157) {
case 1:
return sablono.core.datetime_local_field32154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32155.length)].join('')));

}
});

sablono.core.datetime_local_field32154.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.datetime_local_field32154.call(null,name__32057__auto__,null);
});

sablono.core.datetime_local_field32154.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.datetime_local_field32154.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32154);

/**
 * Creates a email input field.
 */
sablono.core.email_field32158 = (function sablono$core$email_field32158(var_args){
var args32159 = [];
var len__25923__auto___32226 = arguments.length;
var i__25924__auto___32227 = (0);
while(true){
if((i__25924__auto___32227 < len__25923__auto___32226)){
args32159.push((arguments[i__25924__auto___32227]));

var G__32228 = (i__25924__auto___32227 + (1));
i__25924__auto___32227 = G__32228;
continue;
} else {
}
break;
}

var G__32161 = args32159.length;
switch (G__32161) {
case 1:
return sablono.core.email_field32158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32159.length)].join('')));

}
});

sablono.core.email_field32158.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.email_field32158.call(null,name__32057__auto__,null);
});

sablono.core.email_field32158.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.email_field32158.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32158);

/**
 * Creates a file input field.
 */
sablono.core.file_field32162 = (function sablono$core$file_field32162(var_args){
var args32163 = [];
var len__25923__auto___32230 = arguments.length;
var i__25924__auto___32231 = (0);
while(true){
if((i__25924__auto___32231 < len__25923__auto___32230)){
args32163.push((arguments[i__25924__auto___32231]));

var G__32232 = (i__25924__auto___32231 + (1));
i__25924__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var G__32165 = args32163.length;
switch (G__32165) {
case 1:
return sablono.core.file_field32162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32163.length)].join('')));

}
});

sablono.core.file_field32162.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.file_field32162.call(null,name__32057__auto__,null);
});

sablono.core.file_field32162.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.file_field32162.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32162);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32166 = (function sablono$core$hidden_field32166(var_args){
var args32167 = [];
var len__25923__auto___32234 = arguments.length;
var i__25924__auto___32235 = (0);
while(true){
if((i__25924__auto___32235 < len__25923__auto___32234)){
args32167.push((arguments[i__25924__auto___32235]));

var G__32236 = (i__25924__auto___32235 + (1));
i__25924__auto___32235 = G__32236;
continue;
} else {
}
break;
}

var G__32169 = args32167.length;
switch (G__32169) {
case 1:
return sablono.core.hidden_field32166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32167.length)].join('')));

}
});

sablono.core.hidden_field32166.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.hidden_field32166.call(null,name__32057__auto__,null);
});

sablono.core.hidden_field32166.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.hidden_field32166.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32166);

/**
 * Creates a month input field.
 */
sablono.core.month_field32170 = (function sablono$core$month_field32170(var_args){
var args32171 = [];
var len__25923__auto___32238 = arguments.length;
var i__25924__auto___32239 = (0);
while(true){
if((i__25924__auto___32239 < len__25923__auto___32238)){
args32171.push((arguments[i__25924__auto___32239]));

var G__32240 = (i__25924__auto___32239 + (1));
i__25924__auto___32239 = G__32240;
continue;
} else {
}
break;
}

var G__32173 = args32171.length;
switch (G__32173) {
case 1:
return sablono.core.month_field32170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32171.length)].join('')));

}
});

sablono.core.month_field32170.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.month_field32170.call(null,name__32057__auto__,null);
});

sablono.core.month_field32170.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.month_field32170.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32170);

/**
 * Creates a number input field.
 */
sablono.core.number_field32174 = (function sablono$core$number_field32174(var_args){
var args32175 = [];
var len__25923__auto___32242 = arguments.length;
var i__25924__auto___32243 = (0);
while(true){
if((i__25924__auto___32243 < len__25923__auto___32242)){
args32175.push((arguments[i__25924__auto___32243]));

var G__32244 = (i__25924__auto___32243 + (1));
i__25924__auto___32243 = G__32244;
continue;
} else {
}
break;
}

var G__32177 = args32175.length;
switch (G__32177) {
case 1:
return sablono.core.number_field32174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32175.length)].join('')));

}
});

sablono.core.number_field32174.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.number_field32174.call(null,name__32057__auto__,null);
});

sablono.core.number_field32174.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.number_field32174.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32174);

/**
 * Creates a password input field.
 */
sablono.core.password_field32178 = (function sablono$core$password_field32178(var_args){
var args32179 = [];
var len__25923__auto___32246 = arguments.length;
var i__25924__auto___32247 = (0);
while(true){
if((i__25924__auto___32247 < len__25923__auto___32246)){
args32179.push((arguments[i__25924__auto___32247]));

var G__32248 = (i__25924__auto___32247 + (1));
i__25924__auto___32247 = G__32248;
continue;
} else {
}
break;
}

var G__32181 = args32179.length;
switch (G__32181) {
case 1:
return sablono.core.password_field32178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32179.length)].join('')));

}
});

sablono.core.password_field32178.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.password_field32178.call(null,name__32057__auto__,null);
});

sablono.core.password_field32178.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.password_field32178.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32178);

/**
 * Creates a range input field.
 */
sablono.core.range_field32182 = (function sablono$core$range_field32182(var_args){
var args32183 = [];
var len__25923__auto___32250 = arguments.length;
var i__25924__auto___32251 = (0);
while(true){
if((i__25924__auto___32251 < len__25923__auto___32250)){
args32183.push((arguments[i__25924__auto___32251]));

var G__32252 = (i__25924__auto___32251 + (1));
i__25924__auto___32251 = G__32252;
continue;
} else {
}
break;
}

var G__32185 = args32183.length;
switch (G__32185) {
case 1:
return sablono.core.range_field32182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32183.length)].join('')));

}
});

sablono.core.range_field32182.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.range_field32182.call(null,name__32057__auto__,null);
});

sablono.core.range_field32182.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.range_field32182.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32182);

/**
 * Creates a search input field.
 */
sablono.core.search_field32186 = (function sablono$core$search_field32186(var_args){
var args32187 = [];
var len__25923__auto___32254 = arguments.length;
var i__25924__auto___32255 = (0);
while(true){
if((i__25924__auto___32255 < len__25923__auto___32254)){
args32187.push((arguments[i__25924__auto___32255]));

var G__32256 = (i__25924__auto___32255 + (1));
i__25924__auto___32255 = G__32256;
continue;
} else {
}
break;
}

var G__32189 = args32187.length;
switch (G__32189) {
case 1:
return sablono.core.search_field32186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32187.length)].join('')));

}
});

sablono.core.search_field32186.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.search_field32186.call(null,name__32057__auto__,null);
});

sablono.core.search_field32186.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.search_field32186.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32186);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32190 = (function sablono$core$tel_field32190(var_args){
var args32191 = [];
var len__25923__auto___32258 = arguments.length;
var i__25924__auto___32259 = (0);
while(true){
if((i__25924__auto___32259 < len__25923__auto___32258)){
args32191.push((arguments[i__25924__auto___32259]));

var G__32260 = (i__25924__auto___32259 + (1));
i__25924__auto___32259 = G__32260;
continue;
} else {
}
break;
}

var G__32193 = args32191.length;
switch (G__32193) {
case 1:
return sablono.core.tel_field32190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32191.length)].join('')));

}
});

sablono.core.tel_field32190.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.tel_field32190.call(null,name__32057__auto__,null);
});

sablono.core.tel_field32190.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.tel_field32190.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32190);

/**
 * Creates a text input field.
 */
sablono.core.text_field32194 = (function sablono$core$text_field32194(var_args){
var args32195 = [];
var len__25923__auto___32262 = arguments.length;
var i__25924__auto___32263 = (0);
while(true){
if((i__25924__auto___32263 < len__25923__auto___32262)){
args32195.push((arguments[i__25924__auto___32263]));

var G__32264 = (i__25924__auto___32263 + (1));
i__25924__auto___32263 = G__32264;
continue;
} else {
}
break;
}

var G__32197 = args32195.length;
switch (G__32197) {
case 1:
return sablono.core.text_field32194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32195.length)].join('')));

}
});

sablono.core.text_field32194.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.text_field32194.call(null,name__32057__auto__,null);
});

sablono.core.text_field32194.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.text_field32194.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32194);

/**
 * Creates a time input field.
 */
sablono.core.time_field32198 = (function sablono$core$time_field32198(var_args){
var args32199 = [];
var len__25923__auto___32266 = arguments.length;
var i__25924__auto___32267 = (0);
while(true){
if((i__25924__auto___32267 < len__25923__auto___32266)){
args32199.push((arguments[i__25924__auto___32267]));

var G__32268 = (i__25924__auto___32267 + (1));
i__25924__auto___32267 = G__32268;
continue;
} else {
}
break;
}

var G__32201 = args32199.length;
switch (G__32201) {
case 1:
return sablono.core.time_field32198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32199.length)].join('')));

}
});

sablono.core.time_field32198.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.time_field32198.call(null,name__32057__auto__,null);
});

sablono.core.time_field32198.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.time_field32198.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32198);

/**
 * Creates a url input field.
 */
sablono.core.url_field32202 = (function sablono$core$url_field32202(var_args){
var args32203 = [];
var len__25923__auto___32270 = arguments.length;
var i__25924__auto___32271 = (0);
while(true){
if((i__25924__auto___32271 < len__25923__auto___32270)){
args32203.push((arguments[i__25924__auto___32271]));

var G__32272 = (i__25924__auto___32271 + (1));
i__25924__auto___32271 = G__32272;
continue;
} else {
}
break;
}

var G__32205 = args32203.length;
switch (G__32205) {
case 1:
return sablono.core.url_field32202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32203.length)].join('')));

}
});

sablono.core.url_field32202.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.url_field32202.call(null,name__32057__auto__,null);
});

sablono.core.url_field32202.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.url_field32202.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32202);

/**
 * Creates a week input field.
 */
sablono.core.week_field32206 = (function sablono$core$week_field32206(var_args){
var args32207 = [];
var len__25923__auto___32274 = arguments.length;
var i__25924__auto___32275 = (0);
while(true){
if((i__25924__auto___32275 < len__25923__auto___32274)){
args32207.push((arguments[i__25924__auto___32275]));

var G__32276 = (i__25924__auto___32275 + (1));
i__25924__auto___32275 = G__32276;
continue;
} else {
}
break;
}

var G__32209 = args32207.length;
switch (G__32209) {
case 1:
return sablono.core.week_field32206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32207.length)].join('')));

}
});

sablono.core.week_field32206.cljs$core$IFn$_invoke$arity$1 = (function (name__32057__auto__){
return sablono.core.week_field32206.call(null,name__32057__auto__,null);
});

sablono.core.week_field32206.cljs$core$IFn$_invoke$arity$2 = (function (name__32057__auto__,value__32058__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32057__auto__,value__32058__auto__);
});

sablono.core.week_field32206.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32206);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32278 = (function sablono$core$check_box32278(var_args){
var args32279 = [];
var len__25923__auto___32282 = arguments.length;
var i__25924__auto___32283 = (0);
while(true){
if((i__25924__auto___32283 < len__25923__auto___32282)){
args32279.push((arguments[i__25924__auto___32283]));

var G__32284 = (i__25924__auto___32283 + (1));
i__25924__auto___32283 = G__32284;
continue;
} else {
}
break;
}

var G__32281 = args32279.length;
switch (G__32281) {
case 1:
return sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32279.length)].join('')));

}
});

sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32278.call(null,name,null);
});

sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32278.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32278.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32278.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32278);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32286 = (function sablono$core$radio_button32286(var_args){
var args32287 = [];
var len__25923__auto___32290 = arguments.length;
var i__25924__auto___32291 = (0);
while(true){
if((i__25924__auto___32291 < len__25923__auto___32290)){
args32287.push((arguments[i__25924__auto___32291]));

var G__32292 = (i__25924__auto___32291 + (1));
i__25924__auto___32291 = G__32292;
continue;
} else {
}
break;
}

var G__32289 = args32287.length;
switch (G__32289) {
case 1:
return sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32287.length)].join('')));

}
});

sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32286.call(null,group,null);
});

sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32286.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32286.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32286.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32286);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32294 = (function sablono$core$select_options32294(coll){
var iter__25628__auto__ = (function sablono$core$select_options32294_$_iter__32311(s__32312){
return (new cljs.core.LazySeq(null,(function (){
var s__32312__$1 = s__32312;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32312__$1);
if(temp__4657__auto__){
var s__32312__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32312__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32312__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32314 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32313 = (0);
while(true){
if((i__32313 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32313);
cljs.core.chunk_append.call(null,b__32314,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32321 = x;
var text = cljs.core.nth.call(null,vec__32321,(0),null);
var val = cljs.core.nth.call(null,vec__32321,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32321,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32294.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32327 = (i__32313 + (1));
i__32313 = G__32327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32314),sablono$core$select_options32294_$_iter__32311.call(null,cljs.core.chunk_rest.call(null,s__32312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32314),null);
}
} else {
var x = cljs.core.first.call(null,s__32312__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32324 = x;
var text = cljs.core.nth.call(null,vec__32324,(0),null);
var val = cljs.core.nth.call(null,vec__32324,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32324,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32294.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32294_$_iter__32311.call(null,cljs.core.rest.call(null,s__32312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32294);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32328 = (function sablono$core$drop_down32328(var_args){
var args32329 = [];
var len__25923__auto___32332 = arguments.length;
var i__25924__auto___32333 = (0);
while(true){
if((i__25924__auto___32333 < len__25923__auto___32332)){
args32329.push((arguments[i__25924__auto___32333]));

var G__32334 = (i__25924__auto___32333 + (1));
i__25924__auto___32333 = G__32334;
continue;
} else {
}
break;
}

var G__32331 = args32329.length;
switch (G__32331) {
case 2:
return sablono.core.drop_down32328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32328.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32329.length)].join('')));

}
});

sablono.core.drop_down32328.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32328.call(null,name,options,null);
});

sablono.core.drop_down32328.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32328.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32328);
/**
 * Creates a text area element.
 */
sablono.core.text_area32336 = (function sablono$core$text_area32336(var_args){
var args32337 = [];
var len__25923__auto___32340 = arguments.length;
var i__25924__auto___32341 = (0);
while(true){
if((i__25924__auto___32341 < len__25923__auto___32340)){
args32337.push((arguments[i__25924__auto___32341]));

var G__32342 = (i__25924__auto___32341 + (1));
i__25924__auto___32341 = G__32342;
continue;
} else {
}
break;
}

var G__32339 = args32337.length;
switch (G__32339) {
case 1:
return sablono.core.text_area32336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32337.length)].join('')));

}
});

sablono.core.text_area32336.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32336.call(null,name,null);
});

sablono.core.text_area32336.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32336.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32336);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32344 = (function sablono$core$label32344(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32344);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32345 = (function sablono$core$submit_button32345(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32345);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32346 = (function sablono$core$reset_button32346(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32346);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32347 = (function sablono$core$form_to32347(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32354 = arguments.length;
var i__25924__auto___32355 = (0);
while(true){
if((i__25924__auto___32355 < len__25923__auto___32354)){
args__25930__auto__.push((arguments[i__25924__auto___32355]));

var G__32356 = (i__25924__auto___32355 + (1));
i__25924__auto___32355 = G__32356;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32347.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to32347.cljs$core$IFn$_invoke$arity$variadic = (function (p__32350,body){
var vec__32351 = p__32350;
var method = cljs.core.nth.call(null,vec__32351,(0),null);
var action = cljs.core.nth.call(null,vec__32351,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32347.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32347.cljs$lang$applyTo = (function (seq32348){
var G__32349 = cljs.core.first.call(null,seq32348);
var seq32348__$1 = cljs.core.next.call(null,seq32348);
return sablono.core.form_to32347.cljs$core$IFn$_invoke$arity$variadic(G__32349,seq32348__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32347);

//# sourceMappingURL=core.js.map?rel=1566349701939