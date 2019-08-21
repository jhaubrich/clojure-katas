// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36498){
var map__36523 = p__36498;
var map__36523__$1 = ((((!((map__36523 == null)))?((((map__36523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36523):map__36523);
var m = map__36523__$1;
var n = cljs.core.get.call(null,map__36523__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36525_36547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36526_36548 = null;
var count__36527_36549 = (0);
var i__36528_36550 = (0);
while(true){
if((i__36528_36550 < count__36527_36549)){
var f_36551 = cljs.core._nth.call(null,chunk__36526_36548,i__36528_36550);
cljs.core.println.call(null,"  ",f_36551);

var G__36552 = seq__36525_36547;
var G__36553 = chunk__36526_36548;
var G__36554 = count__36527_36549;
var G__36555 = (i__36528_36550 + (1));
seq__36525_36547 = G__36552;
chunk__36526_36548 = G__36553;
count__36527_36549 = G__36554;
i__36528_36550 = G__36555;
continue;
} else {
var temp__4657__auto___36556 = cljs.core.seq.call(null,seq__36525_36547);
if(temp__4657__auto___36556){
var seq__36525_36557__$1 = temp__4657__auto___36556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36525_36557__$1)){
var c__25659__auto___36558 = cljs.core.chunk_first.call(null,seq__36525_36557__$1);
var G__36559 = cljs.core.chunk_rest.call(null,seq__36525_36557__$1);
var G__36560 = c__25659__auto___36558;
var G__36561 = cljs.core.count.call(null,c__25659__auto___36558);
var G__36562 = (0);
seq__36525_36547 = G__36559;
chunk__36526_36548 = G__36560;
count__36527_36549 = G__36561;
i__36528_36550 = G__36562;
continue;
} else {
var f_36563 = cljs.core.first.call(null,seq__36525_36557__$1);
cljs.core.println.call(null,"  ",f_36563);

var G__36564 = cljs.core.next.call(null,seq__36525_36557__$1);
var G__36565 = null;
var G__36566 = (0);
var G__36567 = (0);
seq__36525_36547 = G__36564;
chunk__36526_36548 = G__36565;
count__36527_36549 = G__36566;
i__36528_36550 = G__36567;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36568 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36568);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36568)))?cljs.core.second.call(null,arglists_36568):arglists_36568));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36529_36569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36530_36570 = null;
var count__36531_36571 = (0);
var i__36532_36572 = (0);
while(true){
if((i__36532_36572 < count__36531_36571)){
var vec__36533_36573 = cljs.core._nth.call(null,chunk__36530_36570,i__36532_36572);
var name_36574 = cljs.core.nth.call(null,vec__36533_36573,(0),null);
var map__36536_36575 = cljs.core.nth.call(null,vec__36533_36573,(1),null);
var map__36536_36576__$1 = ((((!((map__36536_36575 == null)))?((((map__36536_36575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36536_36575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36536_36575):map__36536_36575);
var doc_36577 = cljs.core.get.call(null,map__36536_36576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36578 = cljs.core.get.call(null,map__36536_36576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36574);

cljs.core.println.call(null," ",arglists_36578);

if(cljs.core.truth_(doc_36577)){
cljs.core.println.call(null," ",doc_36577);
} else {
}

var G__36579 = seq__36529_36569;
var G__36580 = chunk__36530_36570;
var G__36581 = count__36531_36571;
var G__36582 = (i__36532_36572 + (1));
seq__36529_36569 = G__36579;
chunk__36530_36570 = G__36580;
count__36531_36571 = G__36581;
i__36532_36572 = G__36582;
continue;
} else {
var temp__4657__auto___36583 = cljs.core.seq.call(null,seq__36529_36569);
if(temp__4657__auto___36583){
var seq__36529_36584__$1 = temp__4657__auto___36583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36529_36584__$1)){
var c__25659__auto___36585 = cljs.core.chunk_first.call(null,seq__36529_36584__$1);
var G__36586 = cljs.core.chunk_rest.call(null,seq__36529_36584__$1);
var G__36587 = c__25659__auto___36585;
var G__36588 = cljs.core.count.call(null,c__25659__auto___36585);
var G__36589 = (0);
seq__36529_36569 = G__36586;
chunk__36530_36570 = G__36587;
count__36531_36571 = G__36588;
i__36532_36572 = G__36589;
continue;
} else {
var vec__36538_36590 = cljs.core.first.call(null,seq__36529_36584__$1);
var name_36591 = cljs.core.nth.call(null,vec__36538_36590,(0),null);
var map__36541_36592 = cljs.core.nth.call(null,vec__36538_36590,(1),null);
var map__36541_36593__$1 = ((((!((map__36541_36592 == null)))?((((map__36541_36592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36541_36592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36541_36592):map__36541_36592);
var doc_36594 = cljs.core.get.call(null,map__36541_36593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36595 = cljs.core.get.call(null,map__36541_36593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36591);

cljs.core.println.call(null," ",arglists_36595);

if(cljs.core.truth_(doc_36594)){
cljs.core.println.call(null," ",doc_36594);
} else {
}

var G__36596 = cljs.core.next.call(null,seq__36529_36584__$1);
var G__36597 = null;
var G__36598 = (0);
var G__36599 = (0);
seq__36529_36569 = G__36596;
chunk__36530_36570 = G__36597;
count__36531_36571 = G__36598;
i__36532_36572 = G__36599;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36543 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36544 = null;
var count__36545 = (0);
var i__36546 = (0);
while(true){
if((i__36546 < count__36545)){
var role = cljs.core._nth.call(null,chunk__36544,i__36546);
var temp__4657__auto___36600__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36600__$1)){
var spec_36601 = temp__4657__auto___36600__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36601));
} else {
}

var G__36602 = seq__36543;
var G__36603 = chunk__36544;
var G__36604 = count__36545;
var G__36605 = (i__36546 + (1));
seq__36543 = G__36602;
chunk__36544 = G__36603;
count__36545 = G__36604;
i__36546 = G__36605;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36543);
if(temp__4657__auto____$1){
var seq__36543__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36543__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__36543__$1);
var G__36606 = cljs.core.chunk_rest.call(null,seq__36543__$1);
var G__36607 = c__25659__auto__;
var G__36608 = cljs.core.count.call(null,c__25659__auto__);
var G__36609 = (0);
seq__36543 = G__36606;
chunk__36544 = G__36607;
count__36545 = G__36608;
i__36546 = G__36609;
continue;
} else {
var role = cljs.core.first.call(null,seq__36543__$1);
var temp__4657__auto___36610__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36610__$2)){
var spec_36611 = temp__4657__auto___36610__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36611));
} else {
}

var G__36612 = cljs.core.next.call(null,seq__36543__$1);
var G__36613 = null;
var G__36614 = (0);
var G__36615 = (0);
seq__36543 = G__36612;
chunk__36544 = G__36613;
count__36545 = G__36614;
i__36546 = G__36615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1566349708844