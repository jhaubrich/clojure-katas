// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36938 = [];
var len__25923__auto___36941 = arguments.length;
var i__25924__auto___36942 = (0);
while(true){
if((i__25924__auto___36942 < len__25923__auto___36941)){
args36938.push((arguments[i__25924__auto___36942]));

var G__36943 = (i__25924__auto___36942 + (1));
i__25924__auto___36942 = G__36943;
continue;
} else {
}
break;
}

var G__36940 = args36938.length;
switch (G__36940) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36938.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36946 = arguments.length;
var i__25924__auto___36947 = (0);
while(true){
if((i__25924__auto___36947 < len__25923__auto___36946)){
args__25930__auto__.push((arguments[i__25924__auto___36947]));

var G__36948 = (i__25924__auto___36947 + (1));
i__25924__auto___36947 = G__36948;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36945){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36945));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36950 = arguments.length;
var i__25924__auto___36951 = (0);
while(true){
if((i__25924__auto___36951 < len__25923__auto___36950)){
args__25930__auto__.push((arguments[i__25924__auto___36951]));

var G__36952 = (i__25924__auto___36951 + (1));
i__25924__auto___36951 = G__36952;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36949){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36949));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36953){
var map__36956 = p__36953;
var map__36956__$1 = ((((!((map__36956 == null)))?((((map__36956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36956):map__36956);
var message = cljs.core.get.call(null,map__36956__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36956__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28804__auto___37118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___37118,ch){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___37118,ch){
return (function (state_37087){
var state_val_37088 = (state_37087[(1)]);
if((state_val_37088 === (7))){
var inst_37083 = (state_37087[(2)]);
var state_37087__$1 = state_37087;
var statearr_37089_37119 = state_37087__$1;
(statearr_37089_37119[(2)] = inst_37083);

(statearr_37089_37119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (1))){
var state_37087__$1 = state_37087;
var statearr_37090_37120 = state_37087__$1;
(statearr_37090_37120[(2)] = null);

(statearr_37090_37120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (4))){
var inst_37040 = (state_37087[(7)]);
var inst_37040__$1 = (state_37087[(2)]);
var state_37087__$1 = (function (){var statearr_37091 = state_37087;
(statearr_37091[(7)] = inst_37040__$1);

return statearr_37091;
})();
if(cljs.core.truth_(inst_37040__$1)){
var statearr_37092_37121 = state_37087__$1;
(statearr_37092_37121[(1)] = (5));

} else {
var statearr_37093_37122 = state_37087__$1;
(statearr_37093_37122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (15))){
var inst_37047 = (state_37087[(8)]);
var inst_37062 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37047);
var inst_37063 = cljs.core.first.call(null,inst_37062);
var inst_37064 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37063);
var inst_37065 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37064)].join('');
var inst_37066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37065);
var state_37087__$1 = state_37087;
var statearr_37094_37123 = state_37087__$1;
(statearr_37094_37123[(2)] = inst_37066);

(statearr_37094_37123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (13))){
var inst_37071 = (state_37087[(2)]);
var state_37087__$1 = state_37087;
var statearr_37095_37124 = state_37087__$1;
(statearr_37095_37124[(2)] = inst_37071);

(statearr_37095_37124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (6))){
var state_37087__$1 = state_37087;
var statearr_37096_37125 = state_37087__$1;
(statearr_37096_37125[(2)] = null);

(statearr_37096_37125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (17))){
var inst_37069 = (state_37087[(2)]);
var state_37087__$1 = state_37087;
var statearr_37097_37126 = state_37087__$1;
(statearr_37097_37126[(2)] = inst_37069);

(statearr_37097_37126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (3))){
var inst_37085 = (state_37087[(2)]);
var state_37087__$1 = state_37087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37087__$1,inst_37085);
} else {
if((state_val_37088 === (12))){
var inst_37046 = (state_37087[(9)]);
var inst_37060 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37046,opts);
var state_37087__$1 = state_37087;
if(cljs.core.truth_(inst_37060)){
var statearr_37098_37127 = state_37087__$1;
(statearr_37098_37127[(1)] = (15));

} else {
var statearr_37099_37128 = state_37087__$1;
(statearr_37099_37128[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (2))){
var state_37087__$1 = state_37087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37087__$1,(4),ch);
} else {
if((state_val_37088 === (11))){
var inst_37047 = (state_37087[(8)]);
var inst_37052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37053 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37047);
var inst_37054 = cljs.core.async.timeout.call(null,(1000));
var inst_37055 = [inst_37053,inst_37054];
var inst_37056 = (new cljs.core.PersistentVector(null,2,(5),inst_37052,inst_37055,null));
var state_37087__$1 = state_37087;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37087__$1,(14),inst_37056);
} else {
if((state_val_37088 === (9))){
var inst_37047 = (state_37087[(8)]);
var inst_37073 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37074 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37047);
var inst_37075 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37074);
var inst_37076 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37075)].join('');
var inst_37077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37076);
var state_37087__$1 = (function (){var statearr_37100 = state_37087;
(statearr_37100[(10)] = inst_37073);

return statearr_37100;
})();
var statearr_37101_37129 = state_37087__$1;
(statearr_37101_37129[(2)] = inst_37077);

(statearr_37101_37129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (5))){
var inst_37040 = (state_37087[(7)]);
var inst_37042 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37043 = (new cljs.core.PersistentArrayMap(null,2,inst_37042,null));
var inst_37044 = (new cljs.core.PersistentHashSet(null,inst_37043,null));
var inst_37045 = figwheel.client.focus_msgs.call(null,inst_37044,inst_37040);
var inst_37046 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37045);
var inst_37047 = cljs.core.first.call(null,inst_37045);
var inst_37048 = figwheel.client.autoload_QMARK_.call(null);
var state_37087__$1 = (function (){var statearr_37102 = state_37087;
(statearr_37102[(9)] = inst_37046);

(statearr_37102[(8)] = inst_37047);

return statearr_37102;
})();
if(cljs.core.truth_(inst_37048)){
var statearr_37103_37130 = state_37087__$1;
(statearr_37103_37130[(1)] = (8));

} else {
var statearr_37104_37131 = state_37087__$1;
(statearr_37104_37131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (14))){
var inst_37058 = (state_37087[(2)]);
var state_37087__$1 = state_37087;
var statearr_37105_37132 = state_37087__$1;
(statearr_37105_37132[(2)] = inst_37058);

(statearr_37105_37132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (16))){
var state_37087__$1 = state_37087;
var statearr_37106_37133 = state_37087__$1;
(statearr_37106_37133[(2)] = null);

(statearr_37106_37133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (10))){
var inst_37079 = (state_37087[(2)]);
var state_37087__$1 = (function (){var statearr_37107 = state_37087;
(statearr_37107[(11)] = inst_37079);

return statearr_37107;
})();
var statearr_37108_37134 = state_37087__$1;
(statearr_37108_37134[(2)] = null);

(statearr_37108_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37088 === (8))){
var inst_37046 = (state_37087[(9)]);
var inst_37050 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37046,opts);
var state_37087__$1 = state_37087;
if(cljs.core.truth_(inst_37050)){
var statearr_37109_37135 = state_37087__$1;
(statearr_37109_37135[(1)] = (11));

} else {
var statearr_37110_37136 = state_37087__$1;
(statearr_37110_37136[(1)] = (12));

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
});})(c__28804__auto___37118,ch))
;
return ((function (switch__28692__auto__,c__28804__auto___37118,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____0 = (function (){
var statearr_37114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37114[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__);

(statearr_37114[(1)] = (1));

return statearr_37114;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____1 = (function (state_37087){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_37087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e37115){if((e37115 instanceof Object)){
var ex__28696__auto__ = e37115;
var statearr_37116_37137 = state_37087;
(statearr_37116_37137[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37138 = state_37087;
state_37087 = G__37138;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__ = function(state_37087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____1.call(this,state_37087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28693__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___37118,ch))
})();
var state__28806__auto__ = (function (){var statearr_37117 = f__28805__auto__.call(null);
(statearr_37117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___37118);

return statearr_37117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___37118,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37139_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37139_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
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
var base_path_37142 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37142){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37141){if((e37141 instanceof Error)){
var e = e37141;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37142], null));
} else {
var e = e37141;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37142))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37143){
var map__37152 = p__37143;
var map__37152__$1 = ((((!((map__37152 == null)))?((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37152):map__37152);
var opts = map__37152__$1;
var build_id = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37152,map__37152__$1,opts,build_id){
return (function (p__37154){
var vec__37155 = p__37154;
var seq__37156 = cljs.core.seq.call(null,vec__37155);
var first__37157 = cljs.core.first.call(null,seq__37156);
var seq__37156__$1 = cljs.core.next.call(null,seq__37156);
var map__37158 = first__37157;
var map__37158__$1 = ((((!((map__37158 == null)))?((((map__37158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37158):map__37158);
var msg = map__37158__$1;
var msg_name = cljs.core.get.call(null,map__37158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37156__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37155,seq__37156,first__37157,seq__37156__$1,map__37158,map__37158__$1,msg,msg_name,_,map__37152,map__37152__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37155,seq__37156,first__37157,seq__37156__$1,map__37158,map__37158__$1,msg,msg_name,_,map__37152,map__37152__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37152,map__37152__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37166){
var vec__37167 = p__37166;
var seq__37168 = cljs.core.seq.call(null,vec__37167);
var first__37169 = cljs.core.first.call(null,seq__37168);
var seq__37168__$1 = cljs.core.next.call(null,seq__37168);
var map__37170 = first__37169;
var map__37170__$1 = ((((!((map__37170 == null)))?((((map__37170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);
var msg = map__37170__$1;
var msg_name = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37168__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37172){
var map__37184 = p__37172;
var map__37184__$1 = ((((!((map__37184 == null)))?((((map__37184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37184):map__37184);
var on_compile_warning = cljs.core.get.call(null,map__37184__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37184__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37184,map__37184__$1,on_compile_warning,on_compile_fail){
return (function (p__37186){
var vec__37187 = p__37186;
var seq__37188 = cljs.core.seq.call(null,vec__37187);
var first__37189 = cljs.core.first.call(null,seq__37188);
var seq__37188__$1 = cljs.core.next.call(null,seq__37188);
var map__37190 = first__37189;
var map__37190__$1 = ((((!((map__37190 == null)))?((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37190):map__37190);
var msg = map__37190__$1;
var msg_name = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37188__$1;
var pred__37192 = cljs.core._EQ_;
var expr__37193 = msg_name;
if(cljs.core.truth_(pred__37192.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37193))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37192.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37193))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37184,map__37184__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__,msg_hist,msg_names,msg){
return (function (state_37421){
var state_val_37422 = (state_37421[(1)]);
if((state_val_37422 === (7))){
var inst_37341 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37341)){
var statearr_37423_37473 = state_37421__$1;
(statearr_37423_37473[(1)] = (8));

} else {
var statearr_37424_37474 = state_37421__$1;
(statearr_37424_37474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (20))){
var inst_37415 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37425_37475 = state_37421__$1;
(statearr_37425_37475[(2)] = inst_37415);

(statearr_37425_37475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (27))){
var inst_37411 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37426_37476 = state_37421__$1;
(statearr_37426_37476[(2)] = inst_37411);

(statearr_37426_37476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (1))){
var inst_37334 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37334)){
var statearr_37427_37477 = state_37421__$1;
(statearr_37427_37477[(1)] = (2));

} else {
var statearr_37428_37478 = state_37421__$1;
(statearr_37428_37478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (24))){
var inst_37413 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37429_37479 = state_37421__$1;
(statearr_37429_37479[(2)] = inst_37413);

(statearr_37429_37479[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (4))){
var inst_37419 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37421__$1,inst_37419);
} else {
if((state_val_37422 === (15))){
var inst_37417 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37430_37480 = state_37421__$1;
(statearr_37430_37480[(2)] = inst_37417);

(statearr_37430_37480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (21))){
var inst_37370 = (state_37421[(2)]);
var inst_37371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37372 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37371);
var state_37421__$1 = (function (){var statearr_37431 = state_37421;
(statearr_37431[(7)] = inst_37370);

return statearr_37431;
})();
var statearr_37432_37481 = state_37421__$1;
(statearr_37432_37481[(2)] = inst_37372);

(statearr_37432_37481[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (31))){
var inst_37400 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37400)){
var statearr_37433_37482 = state_37421__$1;
(statearr_37433_37482[(1)] = (34));

} else {
var statearr_37434_37483 = state_37421__$1;
(statearr_37434_37483[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (32))){
var inst_37409 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37435_37484 = state_37421__$1;
(statearr_37435_37484[(2)] = inst_37409);

(statearr_37435_37484[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (33))){
var inst_37396 = (state_37421[(2)]);
var inst_37397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37398 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37397);
var state_37421__$1 = (function (){var statearr_37436 = state_37421;
(statearr_37436[(8)] = inst_37396);

return statearr_37436;
})();
var statearr_37437_37485 = state_37421__$1;
(statearr_37437_37485[(2)] = inst_37398);

(statearr_37437_37485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (13))){
var inst_37355 = figwheel.client.heads_up.clear.call(null);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(16),inst_37355);
} else {
if((state_val_37422 === (22))){
var inst_37376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37377 = figwheel.client.heads_up.append_warning_message.call(null,inst_37376);
var state_37421__$1 = state_37421;
var statearr_37438_37486 = state_37421__$1;
(statearr_37438_37486[(2)] = inst_37377);

(statearr_37438_37486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (36))){
var inst_37407 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37439_37487 = state_37421__$1;
(statearr_37439_37487[(2)] = inst_37407);

(statearr_37439_37487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (29))){
var inst_37387 = (state_37421[(2)]);
var inst_37388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37389 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37388);
var state_37421__$1 = (function (){var statearr_37440 = state_37421;
(statearr_37440[(9)] = inst_37387);

return statearr_37440;
})();
var statearr_37441_37488 = state_37421__$1;
(statearr_37441_37488[(2)] = inst_37389);

(statearr_37441_37488[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (6))){
var inst_37336 = (state_37421[(10)]);
var state_37421__$1 = state_37421;
var statearr_37442_37489 = state_37421__$1;
(statearr_37442_37489[(2)] = inst_37336);

(statearr_37442_37489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (28))){
var inst_37383 = (state_37421[(2)]);
var inst_37384 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37385 = figwheel.client.heads_up.display_warning.call(null,inst_37384);
var state_37421__$1 = (function (){var statearr_37443 = state_37421;
(statearr_37443[(11)] = inst_37383);

return statearr_37443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(29),inst_37385);
} else {
if((state_val_37422 === (25))){
var inst_37381 = figwheel.client.heads_up.clear.call(null);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(28),inst_37381);
} else {
if((state_val_37422 === (34))){
var inst_37402 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(37),inst_37402);
} else {
if((state_val_37422 === (17))){
var inst_37361 = (state_37421[(2)]);
var inst_37362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37363 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37362);
var state_37421__$1 = (function (){var statearr_37444 = state_37421;
(statearr_37444[(12)] = inst_37361);

return statearr_37444;
})();
var statearr_37445_37490 = state_37421__$1;
(statearr_37445_37490[(2)] = inst_37363);

(statearr_37445_37490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (3))){
var inst_37353 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37353)){
var statearr_37446_37491 = state_37421__$1;
(statearr_37446_37491[(1)] = (13));

} else {
var statearr_37447_37492 = state_37421__$1;
(statearr_37447_37492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (12))){
var inst_37349 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37448_37493 = state_37421__$1;
(statearr_37448_37493[(2)] = inst_37349);

(statearr_37448_37493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (2))){
var inst_37336 = (state_37421[(10)]);
var inst_37336__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37421__$1 = (function (){var statearr_37449 = state_37421;
(statearr_37449[(10)] = inst_37336__$1);

return statearr_37449;
})();
if(cljs.core.truth_(inst_37336__$1)){
var statearr_37450_37494 = state_37421__$1;
(statearr_37450_37494[(1)] = (5));

} else {
var statearr_37451_37495 = state_37421__$1;
(statearr_37451_37495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (23))){
var inst_37379 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37379)){
var statearr_37452_37496 = state_37421__$1;
(statearr_37452_37496[(1)] = (25));

} else {
var statearr_37453_37497 = state_37421__$1;
(statearr_37453_37497[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (35))){
var state_37421__$1 = state_37421;
var statearr_37454_37498 = state_37421__$1;
(statearr_37454_37498[(2)] = null);

(statearr_37454_37498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (19))){
var inst_37374 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37374)){
var statearr_37455_37499 = state_37421__$1;
(statearr_37455_37499[(1)] = (22));

} else {
var statearr_37456_37500 = state_37421__$1;
(statearr_37456_37500[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (11))){
var inst_37345 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37457_37501 = state_37421__$1;
(statearr_37457_37501[(2)] = inst_37345);

(statearr_37457_37501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (9))){
var inst_37347 = figwheel.client.heads_up.clear.call(null);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(12),inst_37347);
} else {
if((state_val_37422 === (5))){
var inst_37338 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37421__$1 = state_37421;
var statearr_37458_37502 = state_37421__$1;
(statearr_37458_37502[(2)] = inst_37338);

(statearr_37458_37502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (14))){
var inst_37365 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37365)){
var statearr_37459_37503 = state_37421__$1;
(statearr_37459_37503[(1)] = (18));

} else {
var statearr_37460_37504 = state_37421__$1;
(statearr_37460_37504[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (26))){
var inst_37391 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37391)){
var statearr_37461_37505 = state_37421__$1;
(statearr_37461_37505[(1)] = (30));

} else {
var statearr_37462_37506 = state_37421__$1;
(statearr_37462_37506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (16))){
var inst_37357 = (state_37421[(2)]);
var inst_37358 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37359 = figwheel.client.heads_up.display_exception.call(null,inst_37358);
var state_37421__$1 = (function (){var statearr_37463 = state_37421;
(statearr_37463[(13)] = inst_37357);

return statearr_37463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(17),inst_37359);
} else {
if((state_val_37422 === (30))){
var inst_37393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37394 = figwheel.client.heads_up.display_warning.call(null,inst_37393);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(33),inst_37394);
} else {
if((state_val_37422 === (10))){
var inst_37351 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37464_37507 = state_37421__$1;
(statearr_37464_37507[(2)] = inst_37351);

(statearr_37464_37507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (18))){
var inst_37367 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37368 = figwheel.client.heads_up.display_exception.call(null,inst_37367);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(21),inst_37368);
} else {
if((state_val_37422 === (37))){
var inst_37404 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37465_37508 = state_37421__$1;
(statearr_37465_37508[(2)] = inst_37404);

(statearr_37465_37508[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (8))){
var inst_37343 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(11),inst_37343);
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
});})(c__28804__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28692__auto__,c__28804__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____0 = (function (){
var statearr_37469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37469[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__);

(statearr_37469[(1)] = (1));

return statearr_37469;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____1 = (function (state_37421){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_37421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e37470){if((e37470 instanceof Object)){
var ex__28696__auto__ = e37470;
var statearr_37471_37509 = state_37421;
(statearr_37471_37509[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37510 = state_37421;
state_37421 = G__37510;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__ = function(state_37421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____1.call(this,state_37421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__,msg_hist,msg_names,msg))
})();
var state__28806__auto__ = (function (){var statearr_37472 = f__28805__auto__.call(null);
(statearr_37472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_37472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__,msg_hist,msg_names,msg))
);

return c__28804__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28804__auto___37573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___37573,ch){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___37573,ch){
return (function (state_37556){
var state_val_37557 = (state_37556[(1)]);
if((state_val_37557 === (1))){
var state_37556__$1 = state_37556;
var statearr_37558_37574 = state_37556__$1;
(statearr_37558_37574[(2)] = null);

(statearr_37558_37574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (2))){
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37556__$1,(4),ch);
} else {
if((state_val_37557 === (3))){
var inst_37554 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37556__$1,inst_37554);
} else {
if((state_val_37557 === (4))){
var inst_37544 = (state_37556[(7)]);
var inst_37544__$1 = (state_37556[(2)]);
var state_37556__$1 = (function (){var statearr_37559 = state_37556;
(statearr_37559[(7)] = inst_37544__$1);

return statearr_37559;
})();
if(cljs.core.truth_(inst_37544__$1)){
var statearr_37560_37575 = state_37556__$1;
(statearr_37560_37575[(1)] = (5));

} else {
var statearr_37561_37576 = state_37556__$1;
(statearr_37561_37576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (5))){
var inst_37544 = (state_37556[(7)]);
var inst_37546 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37544);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37556__$1,(8),inst_37546);
} else {
if((state_val_37557 === (6))){
var state_37556__$1 = state_37556;
var statearr_37562_37577 = state_37556__$1;
(statearr_37562_37577[(2)] = null);

(statearr_37562_37577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (7))){
var inst_37552 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
var statearr_37563_37578 = state_37556__$1;
(statearr_37563_37578[(2)] = inst_37552);

(statearr_37563_37578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (8))){
var inst_37548 = (state_37556[(2)]);
var state_37556__$1 = (function (){var statearr_37564 = state_37556;
(statearr_37564[(8)] = inst_37548);

return statearr_37564;
})();
var statearr_37565_37579 = state_37556__$1;
(statearr_37565_37579[(2)] = null);

(statearr_37565_37579[(1)] = (2));


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
});})(c__28804__auto___37573,ch))
;
return ((function (switch__28692__auto__,c__28804__auto___37573,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28693__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28693__auto____0 = (function (){
var statearr_37569 = [null,null,null,null,null,null,null,null,null];
(statearr_37569[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28693__auto__);

(statearr_37569[(1)] = (1));

return statearr_37569;
});
var figwheel$client$heads_up_plugin_$_state_machine__28693__auto____1 = (function (state_37556){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_37556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e37570){if((e37570 instanceof Object)){
var ex__28696__auto__ = e37570;
var statearr_37571_37580 = state_37556;
(statearr_37571_37580[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_37556;
state_37556 = G__37581;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28693__auto__ = function(state_37556){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28693__auto____1.call(this,state_37556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28693__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28693__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___37573,ch))
})();
var state__28806__auto__ = (function (){var statearr_37572 = f__28805__auto__.call(null);
(statearr_37572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___37573);

return statearr_37572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___37573,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__){
return (function (state_37602){
var state_val_37603 = (state_37602[(1)]);
if((state_val_37603 === (1))){
var inst_37597 = cljs.core.async.timeout.call(null,(3000));
var state_37602__$1 = state_37602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37602__$1,(2),inst_37597);
} else {
if((state_val_37603 === (2))){
var inst_37599 = (state_37602[(2)]);
var inst_37600 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37602__$1 = (function (){var statearr_37604 = state_37602;
(statearr_37604[(7)] = inst_37599);

return statearr_37604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37602__$1,inst_37600);
} else {
return null;
}
}
});})(c__28804__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____0 = (function (){
var statearr_37608 = [null,null,null,null,null,null,null,null];
(statearr_37608[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__);

(statearr_37608[(1)] = (1));

return statearr_37608;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____1 = (function (state_37602){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_37602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e37609){if((e37609 instanceof Object)){
var ex__28696__auto__ = e37609;
var statearr_37610_37612 = state_37602;
(statearr_37610_37612[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37613 = state_37602;
state_37602 = G__37613;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__ = function(state_37602){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____1.call(this,state_37602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28693__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__))
})();
var state__28806__auto__ = (function (){var statearr_37611 = f__28805__auto__.call(null);
(statearr_37611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_37611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__))
);

return c__28804__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37636){
var state_val_37637 = (state_37636[(1)]);
if((state_val_37637 === (1))){
var inst_37630 = cljs.core.async.timeout.call(null,(2000));
var state_37636__$1 = state_37636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37636__$1,(2),inst_37630);
} else {
if((state_val_37637 === (2))){
var inst_37632 = (state_37636[(2)]);
var inst_37633 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37634 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37633);
var state_37636__$1 = (function (){var statearr_37638 = state_37636;
(statearr_37638[(7)] = inst_37632);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37636__$1,inst_37634);
} else {
return null;
}
}
});})(c__28804__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____0 = (function (){
var statearr_37642 = [null,null,null,null,null,null,null,null];
(statearr_37642[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__);

(statearr_37642[(1)] = (1));

return statearr_37642;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____1 = (function (state_37636){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_37636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e37643){if((e37643 instanceof Object)){
var ex__28696__auto__ = e37643;
var statearr_37644_37646 = state_37636;
(statearr_37644_37646[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37647 = state_37636;
state_37636 = G__37647;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__ = function(state_37636){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____1.call(this,state_37636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28806__auto__ = (function (){var statearr_37645 = f__28805__auto__.call(null);
(statearr_37645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_37645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__,figwheel_version,temp__4657__auto__))
);

return c__28804__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37648){
var map__37652 = p__37648;
var map__37652__$1 = ((((!((map__37652 == null)))?((((map__37652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37652):map__37652);
var file = cljs.core.get.call(null,map__37652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37652__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37652__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37654 = "";
var G__37654__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37654),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37654);
var G__37654__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37654__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37654__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37654__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37654__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37655){
var map__37662 = p__37655;
var map__37662__$1 = ((((!((map__37662 == null)))?((((map__37662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37662):map__37662);
var ed = map__37662__$1;
var formatted_exception = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37664_37668 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37665_37669 = null;
var count__37666_37670 = (0);
var i__37667_37671 = (0);
while(true){
if((i__37667_37671 < count__37666_37670)){
var msg_37672 = cljs.core._nth.call(null,chunk__37665_37669,i__37667_37671);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37672);

var G__37673 = seq__37664_37668;
var G__37674 = chunk__37665_37669;
var G__37675 = count__37666_37670;
var G__37676 = (i__37667_37671 + (1));
seq__37664_37668 = G__37673;
chunk__37665_37669 = G__37674;
count__37666_37670 = G__37675;
i__37667_37671 = G__37676;
continue;
} else {
var temp__4657__auto___37677 = cljs.core.seq.call(null,seq__37664_37668);
if(temp__4657__auto___37677){
var seq__37664_37678__$1 = temp__4657__auto___37677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37664_37678__$1)){
var c__25659__auto___37679 = cljs.core.chunk_first.call(null,seq__37664_37678__$1);
var G__37680 = cljs.core.chunk_rest.call(null,seq__37664_37678__$1);
var G__37681 = c__25659__auto___37679;
var G__37682 = cljs.core.count.call(null,c__25659__auto___37679);
var G__37683 = (0);
seq__37664_37668 = G__37680;
chunk__37665_37669 = G__37681;
count__37666_37670 = G__37682;
i__37667_37671 = G__37683;
continue;
} else {
var msg_37684 = cljs.core.first.call(null,seq__37664_37678__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37684);

var G__37685 = cljs.core.next.call(null,seq__37664_37678__$1);
var G__37686 = null;
var G__37687 = (0);
var G__37688 = (0);
seq__37664_37668 = G__37685;
chunk__37665_37669 = G__37686;
count__37666_37670 = G__37687;
i__37667_37671 = G__37688;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37689){
var map__37692 = p__37689;
var map__37692__$1 = ((((!((map__37692 == null)))?((((map__37692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);
var w = map__37692__$1;
var message = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37704 = cljs.core.seq.call(null,plugins);
var chunk__37705 = null;
var count__37706 = (0);
var i__37707 = (0);
while(true){
if((i__37707 < count__37706)){
var vec__37708 = cljs.core._nth.call(null,chunk__37705,i__37707);
var k = cljs.core.nth.call(null,vec__37708,(0),null);
var plugin = cljs.core.nth.call(null,vec__37708,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37714 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37704,chunk__37705,count__37706,i__37707,pl_37714,vec__37708,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37714.call(null,msg_hist);
});})(seq__37704,chunk__37705,count__37706,i__37707,pl_37714,vec__37708,k,plugin))
);
} else {
}

var G__37715 = seq__37704;
var G__37716 = chunk__37705;
var G__37717 = count__37706;
var G__37718 = (i__37707 + (1));
seq__37704 = G__37715;
chunk__37705 = G__37716;
count__37706 = G__37717;
i__37707 = G__37718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37704);
if(temp__4657__auto__){
var seq__37704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37704__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37704__$1);
var G__37719 = cljs.core.chunk_rest.call(null,seq__37704__$1);
var G__37720 = c__25659__auto__;
var G__37721 = cljs.core.count.call(null,c__25659__auto__);
var G__37722 = (0);
seq__37704 = G__37719;
chunk__37705 = G__37720;
count__37706 = G__37721;
i__37707 = G__37722;
continue;
} else {
var vec__37711 = cljs.core.first.call(null,seq__37704__$1);
var k = cljs.core.nth.call(null,vec__37711,(0),null);
var plugin = cljs.core.nth.call(null,vec__37711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37723 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37704,chunk__37705,count__37706,i__37707,pl_37723,vec__37711,k,plugin,seq__37704__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37723.call(null,msg_hist);
});})(seq__37704,chunk__37705,count__37706,i__37707,pl_37723,vec__37711,k,plugin,seq__37704__$1,temp__4657__auto__))
);
} else {
}

var G__37724 = cljs.core.next.call(null,seq__37704__$1);
var G__37725 = null;
var G__37726 = (0);
var G__37727 = (0);
seq__37704 = G__37724;
chunk__37705 = G__37725;
count__37706 = G__37726;
i__37707 = G__37727;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37728 = [];
var len__25923__auto___37735 = arguments.length;
var i__25924__auto___37736 = (0);
while(true){
if((i__25924__auto___37736 < len__25923__auto___37735)){
args37728.push((arguments[i__25924__auto___37736]));

var G__37737 = (i__25924__auto___37736 + (1));
i__25924__auto___37736 = G__37737;
continue;
} else {
}
break;
}

var G__37730 = args37728.length;
switch (G__37730) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37728.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37731_37739 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37732_37740 = null;
var count__37733_37741 = (0);
var i__37734_37742 = (0);
while(true){
if((i__37734_37742 < count__37733_37741)){
var msg_37743 = cljs.core._nth.call(null,chunk__37732_37740,i__37734_37742);
figwheel.client.socket.handle_incoming_message.call(null,msg_37743);

var G__37744 = seq__37731_37739;
var G__37745 = chunk__37732_37740;
var G__37746 = count__37733_37741;
var G__37747 = (i__37734_37742 + (1));
seq__37731_37739 = G__37744;
chunk__37732_37740 = G__37745;
count__37733_37741 = G__37746;
i__37734_37742 = G__37747;
continue;
} else {
var temp__4657__auto___37748 = cljs.core.seq.call(null,seq__37731_37739);
if(temp__4657__auto___37748){
var seq__37731_37749__$1 = temp__4657__auto___37748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37731_37749__$1)){
var c__25659__auto___37750 = cljs.core.chunk_first.call(null,seq__37731_37749__$1);
var G__37751 = cljs.core.chunk_rest.call(null,seq__37731_37749__$1);
var G__37752 = c__25659__auto___37750;
var G__37753 = cljs.core.count.call(null,c__25659__auto___37750);
var G__37754 = (0);
seq__37731_37739 = G__37751;
chunk__37732_37740 = G__37752;
count__37733_37741 = G__37753;
i__37734_37742 = G__37754;
continue;
} else {
var msg_37755 = cljs.core.first.call(null,seq__37731_37749__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37755);

var G__37756 = cljs.core.next.call(null,seq__37731_37749__$1);
var G__37757 = null;
var G__37758 = (0);
var G__37759 = (0);
seq__37731_37739 = G__37756;
chunk__37732_37740 = G__37757;
count__37733_37741 = G__37758;
i__37734_37742 = G__37759;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37764 = arguments.length;
var i__25924__auto___37765 = (0);
while(true){
if((i__25924__auto___37765 < len__25923__auto___37764)){
args__25930__auto__.push((arguments[i__25924__auto___37765]));

var G__37766 = (i__25924__auto___37765 + (1));
i__25924__auto___37765 = G__37766;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37761){
var map__37762 = p__37761;
var map__37762__$1 = ((((!((map__37762 == null)))?((((map__37762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37762):map__37762);
var opts = map__37762__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37760){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37760));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37768){if((e37768 instanceof Error)){
var e = e37768;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37768;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37772){
var map__37773 = p__37772;
var map__37773__$1 = ((((!((map__37773 == null)))?((((map__37773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37773):map__37773);
var msg_name = cljs.core.get.call(null,map__37773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1566349710101