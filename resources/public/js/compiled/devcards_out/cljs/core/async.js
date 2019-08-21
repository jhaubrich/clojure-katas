// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28849 = [];
var len__25923__auto___28855 = arguments.length;
var i__25924__auto___28856 = (0);
while(true){
if((i__25924__auto___28856 < len__25923__auto___28855)){
args28849.push((arguments[i__25924__auto___28856]));

var G__28857 = (i__25924__auto___28856 + (1));
i__25924__auto___28856 = G__28857;
continue;
} else {
}
break;
}

var G__28851 = args28849.length;
switch (G__28851) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28849.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28852 = (function (f,blockable,meta28853){
this.f = f;
this.blockable = blockable;
this.meta28853 = meta28853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28854,meta28853__$1){
var self__ = this;
var _28854__$1 = this;
return (new cljs.core.async.t_cljs$core$async28852(self__.f,self__.blockable,meta28853__$1));
});

cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28854){
var self__ = this;
var _28854__$1 = this;
return self__.meta28853;
});

cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28853","meta28853",-58403362,null)], null);
});

cljs.core.async.t_cljs$core$async28852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28852";

cljs.core.async.t_cljs$core$async28852.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28852");
});

cljs.core.async.__GT_t_cljs$core$async28852 = (function cljs$core$async$__GT_t_cljs$core$async28852(f__$1,blockable__$1,meta28853){
return (new cljs.core.async.t_cljs$core$async28852(f__$1,blockable__$1,meta28853));
});

}

return (new cljs.core.async.t_cljs$core$async28852(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28861 = [];
var len__25923__auto___28864 = arguments.length;
var i__25924__auto___28865 = (0);
while(true){
if((i__25924__auto___28865 < len__25923__auto___28864)){
args28861.push((arguments[i__25924__auto___28865]));

var G__28866 = (i__25924__auto___28865 + (1));
i__25924__auto___28865 = G__28866;
continue;
} else {
}
break;
}

var G__28863 = args28861.length;
switch (G__28863) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28861.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28868 = [];
var len__25923__auto___28871 = arguments.length;
var i__25924__auto___28872 = (0);
while(true){
if((i__25924__auto___28872 < len__25923__auto___28871)){
args28868.push((arguments[i__25924__auto___28872]));

var G__28873 = (i__25924__auto___28872 + (1));
i__25924__auto___28872 = G__28873;
continue;
} else {
}
break;
}

var G__28870 = args28868.length;
switch (G__28870) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28868.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28875 = [];
var len__25923__auto___28878 = arguments.length;
var i__25924__auto___28879 = (0);
while(true){
if((i__25924__auto___28879 < len__25923__auto___28878)){
args28875.push((arguments[i__25924__auto___28879]));

var G__28880 = (i__25924__auto___28879 + (1));
i__25924__auto___28879 = G__28880;
continue;
} else {
}
break;
}

var G__28877 = args28875.length;
switch (G__28877) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28875.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28882 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28882);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28882,ret){
return (function (){
return fn1.call(null,val_28882);
});})(val_28882,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28883 = [];
var len__25923__auto___28886 = arguments.length;
var i__25924__auto___28887 = (0);
while(true){
if((i__25924__auto___28887 < len__25923__auto___28886)){
args28883.push((arguments[i__25924__auto___28887]));

var G__28888 = (i__25924__auto___28887 + (1));
i__25924__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var G__28885 = args28883.length;
switch (G__28885) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28883.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___28890 = n;
var x_28891 = (0);
while(true){
if((x_28891 < n__25763__auto___28890)){
(a[x_28891] = (0));

var G__28892 = (x_28891 + (1));
x_28891 = G__28892;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28893 = (i + (1));
i = G__28893;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28897 = (function (alt_flag,flag,meta28898){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28898 = meta28898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28899,meta28898__$1){
var self__ = this;
var _28899__$1 = this;
return (new cljs.core.async.t_cljs$core$async28897(self__.alt_flag,self__.flag,meta28898__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28899){
var self__ = this;
var _28899__$1 = this;
return self__.meta28898;
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28898","meta28898",-763231603,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28897";

cljs.core.async.t_cljs$core$async28897.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28897");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28897 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28897(alt_flag__$1,flag__$1,meta28898){
return (new cljs.core.async.t_cljs$core$async28897(alt_flag__$1,flag__$1,meta28898));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28897(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28903 = (function (alt_handler,flag,cb,meta28904){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28904 = meta28904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28905,meta28904__$1){
var self__ = this;
var _28905__$1 = this;
return (new cljs.core.async.t_cljs$core$async28903(self__.alt_handler,self__.flag,self__.cb,meta28904__$1));
});

cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28905){
var self__ = this;
var _28905__$1 = this;
return self__.meta28904;
});

cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28904","meta28904",-2035292919,null)], null);
});

cljs.core.async.t_cljs$core$async28903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28903";

cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28903");
});

cljs.core.async.__GT_t_cljs$core$async28903 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28903(alt_handler__$1,flag__$1,cb__$1,meta28904){
return (new cljs.core.async.t_cljs$core$async28903(alt_handler__$1,flag__$1,cb__$1,meta28904));
});

}

return (new cljs.core.async.t_cljs$core$async28903(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28906_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28906_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28907_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28907_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28908 = (i + (1));
i = G__28908;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___28914 = arguments.length;
var i__25924__auto___28915 = (0);
while(true){
if((i__25924__auto___28915 < len__25923__auto___28914)){
args__25930__auto__.push((arguments[i__25924__auto___28915]));

var G__28916 = (i__25924__auto___28915 + (1));
i__25924__auto___28915 = G__28916;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28911){
var map__28912 = p__28911;
var map__28912__$1 = ((((!((map__28912 == null)))?((((map__28912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28912):map__28912);
var opts = map__28912__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28909){
var G__28910 = cljs.core.first.call(null,seq28909);
var seq28909__$1 = cljs.core.next.call(null,seq28909);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28910,seq28909__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28917 = [];
var len__25923__auto___28967 = arguments.length;
var i__25924__auto___28968 = (0);
while(true){
if((i__25924__auto___28968 < len__25923__auto___28967)){
args28917.push((arguments[i__25924__auto___28968]));

var G__28969 = (i__25924__auto___28968 + (1));
i__25924__auto___28968 = G__28969;
continue;
} else {
}
break;
}

var G__28919 = args28917.length;
switch (G__28919) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28917.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28804__auto___28971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___28971){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___28971){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28939 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28945_28972 = state_28943__$1;
(statearr_28945_28972[(2)] = inst_28939);

(statearr_28945_28972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
var statearr_28946_28973 = state_28943__$1;
(statearr_28946_28973[(2)] = null);

(statearr_28946_28973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var inst_28922 = (state_28943[(7)]);
var inst_28922__$1 = (state_28943[(2)]);
var inst_28923 = (inst_28922__$1 == null);
var state_28943__$1 = (function (){var statearr_28947 = state_28943;
(statearr_28947[(7)] = inst_28922__$1);

return statearr_28947;
})();
if(cljs.core.truth_(inst_28923)){
var statearr_28948_28974 = state_28943__$1;
(statearr_28948_28974[(1)] = (5));

} else {
var statearr_28949_28975 = state_28943__$1;
(statearr_28949_28975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (13))){
var state_28943__$1 = state_28943;
var statearr_28950_28976 = state_28943__$1;
(statearr_28950_28976[(2)] = null);

(statearr_28950_28976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (6))){
var inst_28922 = (state_28943[(7)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28943__$1,(11),to,inst_28922);
} else {
if((state_val_28944 === (3))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (12))){
var state_28943__$1 = state_28943;
var statearr_28951_28977 = state_28943__$1;
(statearr_28951_28977[(2)] = null);

(statearr_28951_28977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (2))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(4),from);
} else {
if((state_val_28944 === (11))){
var inst_28932 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28932)){
var statearr_28952_28978 = state_28943__$1;
(statearr_28952_28978[(1)] = (12));

} else {
var statearr_28953_28979 = state_28943__$1;
(statearr_28953_28979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (9))){
var state_28943__$1 = state_28943;
var statearr_28954_28980 = state_28943__$1;
(statearr_28954_28980[(2)] = null);

(statearr_28954_28980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var state_28943__$1 = state_28943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28955_28981 = state_28943__$1;
(statearr_28955_28981[(1)] = (8));

} else {
var statearr_28956_28982 = state_28943__$1;
(statearr_28956_28982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (14))){
var inst_28937 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28957_28983 = state_28943__$1;
(statearr_28957_28983[(2)] = inst_28937);

(statearr_28957_28983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (10))){
var inst_28929 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28958_28984 = state_28943__$1;
(statearr_28958_28984[(2)] = inst_28929);

(statearr_28958_28984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (8))){
var inst_28926 = cljs.core.async.close_BANG_.call(null,to);
var state_28943__$1 = state_28943;
var statearr_28959_28985 = state_28943__$1;
(statearr_28959_28985[(2)] = inst_28926);

(statearr_28959_28985[(1)] = (10));


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
});})(c__28804__auto___28971))
;
return ((function (switch__28692__auto__,c__28804__auto___28971){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_28963 = [null,null,null,null,null,null,null,null];
(statearr_28963[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_28963[(1)] = (1));

return statearr_28963;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_28943){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e28964){if((e28964 instanceof Object)){
var ex__28696__auto__ = e28964;
var statearr_28965_28986 = state_28943;
(statearr_28965_28986[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28987 = state_28943;
state_28943 = G__28987;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___28971))
})();
var state__28806__auto__ = (function (){var statearr_28966 = f__28805__auto__.call(null);
(statearr_28966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___28971);

return statearr_28966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___28971))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29175){
var vec__29176 = p__29175;
var v = cljs.core.nth.call(null,vec__29176,(0),null);
var p = cljs.core.nth.call(null,vec__29176,(1),null);
var job = vec__29176;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28804__auto___29362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results){
return (function (state_29183){
var state_val_29184 = (state_29183[(1)]);
if((state_val_29184 === (1))){
var state_29183__$1 = state_29183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29183__$1,(2),res,v);
} else {
if((state_val_29184 === (2))){
var inst_29180 = (state_29183[(2)]);
var inst_29181 = cljs.core.async.close_BANG_.call(null,res);
var state_29183__$1 = (function (){var statearr_29185 = state_29183;
(statearr_29185[(7)] = inst_29180);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29183__$1,inst_29181);
} else {
return null;
}
}
});})(c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results))
;
return ((function (switch__28692__auto__,c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_29189 = [null,null,null,null,null,null,null,null];
(statearr_29189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_29189[(1)] = (1));

return statearr_29189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_29183){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29190){if((e29190 instanceof Object)){
var ex__28696__auto__ = e29190;
var statearr_29191_29363 = state_29183;
(statearr_29191_29363[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29364 = state_29183;
state_29183 = G__29364;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_29183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_29183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results))
})();
var state__28806__auto__ = (function (){var statearr_29192 = f__28805__auto__.call(null);
(statearr_29192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___29362);

return statearr_29192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___29362,res,vec__29176,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29193){
var vec__29194 = p__29193;
var v = cljs.core.nth.call(null,vec__29194,(0),null);
var p = cljs.core.nth.call(null,vec__29194,(1),null);
var job = vec__29194;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___29365 = n;
var __29366 = (0);
while(true){
if((__29366 < n__25763__auto___29365)){
var G__29197_29367 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29197_29367) {
case "compute":
var c__28804__auto___29369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29366,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (__29366,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (1))){
var state_29210__$1 = state_29210;
var statearr_29212_29370 = state_29210__$1;
(statearr_29212_29370[(2)] = null);

(statearr_29212_29370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (2))){
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(4),jobs);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (4))){
var inst_29200 = (state_29210[(2)]);
var inst_29201 = process.call(null,inst_29200);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29201)){
var statearr_29213_29371 = state_29210__$1;
(statearr_29213_29371[(1)] = (5));

} else {
var statearr_29214_29372 = state_29210__$1;
(statearr_29214_29372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var state_29210__$1 = state_29210;
var statearr_29215_29373 = state_29210__$1;
(statearr_29215_29373[(2)] = null);

(statearr_29215_29373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var state_29210__$1 = state_29210;
var statearr_29216_29374 = state_29210__$1;
(statearr_29216_29374[(2)] = null);

(statearr_29216_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (7))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29217_29375 = state_29210__$1;
(statearr_29217_29375[(2)] = inst_29206);

(statearr_29217_29375[(1)] = (3));


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
});})(__29366,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
;
return ((function (__29366,switch__28692__auto__,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null];
(statearr_29221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_29210){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__28696__auto__ = e29222;
var statearr_29223_29376 = state_29210;
(statearr_29223_29376[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29377 = state_29210;
state_29210 = G__29377;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(__29366,switch__28692__auto__,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
})();
var state__28806__auto__ = (function (){var statearr_29224 = f__28805__auto__.call(null);
(statearr_29224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___29369);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(__29366,c__28804__auto___29369,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
);


break;
case "async":
var c__28804__auto___29378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29366,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (__29366,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function (state_29237){
var state_val_29238 = (state_29237[(1)]);
if((state_val_29238 === (1))){
var state_29237__$1 = state_29237;
var statearr_29239_29379 = state_29237__$1;
(statearr_29239_29379[(2)] = null);

(statearr_29239_29379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (2))){
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(4),jobs);
} else {
if((state_val_29238 === (3))){
var inst_29235 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29237__$1,inst_29235);
} else {
if((state_val_29238 === (4))){
var inst_29227 = (state_29237[(2)]);
var inst_29228 = async.call(null,inst_29227);
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29228)){
var statearr_29240_29380 = state_29237__$1;
(statearr_29240_29380[(1)] = (5));

} else {
var statearr_29241_29381 = state_29237__$1;
(statearr_29241_29381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (5))){
var state_29237__$1 = state_29237;
var statearr_29242_29382 = state_29237__$1;
(statearr_29242_29382[(2)] = null);

(statearr_29242_29382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (6))){
var state_29237__$1 = state_29237;
var statearr_29243_29383 = state_29237__$1;
(statearr_29243_29383[(2)] = null);

(statearr_29243_29383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (7))){
var inst_29233 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29244_29384 = state_29237__$1;
(statearr_29244_29384[(2)] = inst_29233);

(statearr_29244_29384[(1)] = (3));


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
});})(__29366,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
;
return ((function (__29366,switch__28692__auto__,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_29248 = [null,null,null,null,null,null,null];
(statearr_29248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_29237){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object)){
var ex__28696__auto__ = e29249;
var statearr_29250_29385 = state_29237;
(statearr_29250_29385[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29386 = state_29237;
state_29237 = G__29386;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_29237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_29237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(__29366,switch__28692__auto__,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
})();
var state__28806__auto__ = (function (){var statearr_29251 = f__28805__auto__.call(null);
(statearr_29251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___29378);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(__29366,c__28804__auto___29378,G__29197_29367,n__25763__auto___29365,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29387 = (__29366 + (1));
__29366 = G__29387;
continue;
} else {
}
break;
}

var c__28804__auto___29388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___29388,jobs,results,process,async){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___29388,jobs,results,process,async){
return (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (1))){
var state_29273__$1 = state_29273;
var statearr_29275_29389 = state_29273__$1;
(statearr_29275_29389[(2)] = null);

(statearr_29275_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (2))){
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29273__$1,(4),from);
} else {
if((state_val_29274 === (3))){
var inst_29271 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29273__$1,inst_29271);
} else {
if((state_val_29274 === (4))){
var inst_29254 = (state_29273[(7)]);
var inst_29254__$1 = (state_29273[(2)]);
var inst_29255 = (inst_29254__$1 == null);
var state_29273__$1 = (function (){var statearr_29276 = state_29273;
(statearr_29276[(7)] = inst_29254__$1);

return statearr_29276;
})();
if(cljs.core.truth_(inst_29255)){
var statearr_29277_29390 = state_29273__$1;
(statearr_29277_29390[(1)] = (5));

} else {
var statearr_29278_29391 = state_29273__$1;
(statearr_29278_29391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (5))){
var inst_29257 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29273__$1 = state_29273;
var statearr_29279_29392 = state_29273__$1;
(statearr_29279_29392[(2)] = inst_29257);

(statearr_29279_29392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (6))){
var inst_29254 = (state_29273[(7)]);
var inst_29259 = (state_29273[(8)]);
var inst_29259__$1 = cljs.core.async.chan.call(null,(1));
var inst_29260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29261 = [inst_29254,inst_29259__$1];
var inst_29262 = (new cljs.core.PersistentVector(null,2,(5),inst_29260,inst_29261,null));
var state_29273__$1 = (function (){var statearr_29280 = state_29273;
(statearr_29280[(8)] = inst_29259__$1);

return statearr_29280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29273__$1,(8),jobs,inst_29262);
} else {
if((state_val_29274 === (7))){
var inst_29269 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29281_29393 = state_29273__$1;
(statearr_29281_29393[(2)] = inst_29269);

(statearr_29281_29393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (8))){
var inst_29259 = (state_29273[(8)]);
var inst_29264 = (state_29273[(2)]);
var state_29273__$1 = (function (){var statearr_29282 = state_29273;
(statearr_29282[(9)] = inst_29264);

return statearr_29282;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29273__$1,(9),results,inst_29259);
} else {
if((state_val_29274 === (9))){
var inst_29266 = (state_29273[(2)]);
var state_29273__$1 = (function (){var statearr_29283 = state_29273;
(statearr_29283[(10)] = inst_29266);

return statearr_29283;
})();
var statearr_29284_29394 = state_29273__$1;
(statearr_29284_29394[(2)] = null);

(statearr_29284_29394[(1)] = (2));


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
});})(c__28804__auto___29388,jobs,results,process,async))
;
return ((function (switch__28692__auto__,c__28804__auto___29388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_29273){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29289){if((e29289 instanceof Object)){
var ex__28696__auto__ = e29289;
var statearr_29290_29395 = state_29273;
(statearr_29290_29395[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29396 = state_29273;
state_29273 = G__29396;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___29388,jobs,results,process,async))
})();
var state__28806__auto__ = (function (){var statearr_29291 = f__28805__auto__.call(null);
(statearr_29291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___29388);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___29388,jobs,results,process,async))
);


var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__,jobs,results,process,async){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__,jobs,results,process,async){
return (function (state_29329){
var state_val_29330 = (state_29329[(1)]);
if((state_val_29330 === (7))){
var inst_29325 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29331_29397 = state_29329__$1;
(statearr_29331_29397[(2)] = inst_29325);

(statearr_29331_29397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (20))){
var state_29329__$1 = state_29329;
var statearr_29332_29398 = state_29329__$1;
(statearr_29332_29398[(2)] = null);

(statearr_29332_29398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (1))){
var state_29329__$1 = state_29329;
var statearr_29333_29399 = state_29329__$1;
(statearr_29333_29399[(2)] = null);

(statearr_29333_29399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (4))){
var inst_29294 = (state_29329[(7)]);
var inst_29294__$1 = (state_29329[(2)]);
var inst_29295 = (inst_29294__$1 == null);
var state_29329__$1 = (function (){var statearr_29334 = state_29329;
(statearr_29334[(7)] = inst_29294__$1);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29295)){
var statearr_29335_29400 = state_29329__$1;
(statearr_29335_29400[(1)] = (5));

} else {
var statearr_29336_29401 = state_29329__$1;
(statearr_29336_29401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (15))){
var inst_29307 = (state_29329[(8)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29329__$1,(18),to,inst_29307);
} else {
if((state_val_29330 === (21))){
var inst_29320 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29337_29402 = state_29329__$1;
(statearr_29337_29402[(2)] = inst_29320);

(statearr_29337_29402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (13))){
var inst_29322 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29338 = state_29329;
(statearr_29338[(9)] = inst_29322);

return statearr_29338;
})();
var statearr_29339_29403 = state_29329__$1;
(statearr_29339_29403[(2)] = null);

(statearr_29339_29403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (6))){
var inst_29294 = (state_29329[(7)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(11),inst_29294);
} else {
if((state_val_29330 === (17))){
var inst_29315 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
if(cljs.core.truth_(inst_29315)){
var statearr_29340_29404 = state_29329__$1;
(statearr_29340_29404[(1)] = (19));

} else {
var statearr_29341_29405 = state_29329__$1;
(statearr_29341_29405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (3))){
var inst_29327 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29329__$1,inst_29327);
} else {
if((state_val_29330 === (12))){
var inst_29304 = (state_29329[(10)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(14),inst_29304);
} else {
if((state_val_29330 === (2))){
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(4),results);
} else {
if((state_val_29330 === (19))){
var state_29329__$1 = state_29329;
var statearr_29342_29406 = state_29329__$1;
(statearr_29342_29406[(2)] = null);

(statearr_29342_29406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (11))){
var inst_29304 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29343 = state_29329;
(statearr_29343[(10)] = inst_29304);

return statearr_29343;
})();
var statearr_29344_29407 = state_29329__$1;
(statearr_29344_29407[(2)] = null);

(statearr_29344_29407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (9))){
var state_29329__$1 = state_29329;
var statearr_29345_29408 = state_29329__$1;
(statearr_29345_29408[(2)] = null);

(statearr_29345_29408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (5))){
var state_29329__$1 = state_29329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29346_29409 = state_29329__$1;
(statearr_29346_29409[(1)] = (8));

} else {
var statearr_29347_29410 = state_29329__$1;
(statearr_29347_29410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (14))){
var inst_29307 = (state_29329[(8)]);
var inst_29309 = (state_29329[(11)]);
var inst_29307__$1 = (state_29329[(2)]);
var inst_29308 = (inst_29307__$1 == null);
var inst_29309__$1 = cljs.core.not.call(null,inst_29308);
var state_29329__$1 = (function (){var statearr_29348 = state_29329;
(statearr_29348[(8)] = inst_29307__$1);

(statearr_29348[(11)] = inst_29309__$1);

return statearr_29348;
})();
if(inst_29309__$1){
var statearr_29349_29411 = state_29329__$1;
(statearr_29349_29411[(1)] = (15));

} else {
var statearr_29350_29412 = state_29329__$1;
(statearr_29350_29412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (16))){
var inst_29309 = (state_29329[(11)]);
var state_29329__$1 = state_29329;
var statearr_29351_29413 = state_29329__$1;
(statearr_29351_29413[(2)] = inst_29309);

(statearr_29351_29413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (10))){
var inst_29301 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29352_29414 = state_29329__$1;
(statearr_29352_29414[(2)] = inst_29301);

(statearr_29352_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (18))){
var inst_29312 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29353_29415 = state_29329__$1;
(statearr_29353_29415[(2)] = inst_29312);

(statearr_29353_29415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (8))){
var inst_29298 = cljs.core.async.close_BANG_.call(null,to);
var state_29329__$1 = state_29329;
var statearr_29354_29416 = state_29329__$1;
(statearr_29354_29416[(2)] = inst_29298);

(statearr_29354_29416[(1)] = (10));


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
});})(c__28804__auto__,jobs,results,process,async))
;
return ((function (switch__28692__auto__,c__28804__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_29329){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29359){if((e29359 instanceof Object)){
var ex__28696__auto__ = e29359;
var statearr_29360_29417 = state_29329;
(statearr_29360_29417[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29418 = state_29329;
state_29329 = G__29418;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_29329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_29329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__,jobs,results,process,async))
})();
var state__28806__auto__ = (function (){var statearr_29361 = f__28805__auto__.call(null);
(statearr_29361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__,jobs,results,process,async))
);

return c__28804__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29419 = [];
var len__25923__auto___29422 = arguments.length;
var i__25924__auto___29423 = (0);
while(true){
if((i__25924__auto___29423 < len__25923__auto___29422)){
args29419.push((arguments[i__25924__auto___29423]));

var G__29424 = (i__25924__auto___29423 + (1));
i__25924__auto___29423 = G__29424;
continue;
} else {
}
break;
}

var G__29421 = args29419.length;
switch (G__29421) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29419.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29426 = [];
var len__25923__auto___29429 = arguments.length;
var i__25924__auto___29430 = (0);
while(true){
if((i__25924__auto___29430 < len__25923__auto___29429)){
args29426.push((arguments[i__25924__auto___29430]));

var G__29431 = (i__25924__auto___29430 + (1));
i__25924__auto___29430 = G__29431;
continue;
} else {
}
break;
}

var G__29428 = args29426.length;
switch (G__29428) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29426.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29433 = [];
var len__25923__auto___29486 = arguments.length;
var i__25924__auto___29487 = (0);
while(true){
if((i__25924__auto___29487 < len__25923__auto___29486)){
args29433.push((arguments[i__25924__auto___29487]));

var G__29488 = (i__25924__auto___29487 + (1));
i__25924__auto___29487 = G__29488;
continue;
} else {
}
break;
}

var G__29435 = args29433.length;
switch (G__29435) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29433.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28804__auto___29490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___29490,tc,fc){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___29490,tc,fc){
return (function (state_29461){
var state_val_29462 = (state_29461[(1)]);
if((state_val_29462 === (7))){
var inst_29457 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29463_29491 = state_29461__$1;
(statearr_29463_29491[(2)] = inst_29457);

(statearr_29463_29491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (1))){
var state_29461__$1 = state_29461;
var statearr_29464_29492 = state_29461__$1;
(statearr_29464_29492[(2)] = null);

(statearr_29464_29492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (4))){
var inst_29438 = (state_29461[(7)]);
var inst_29438__$1 = (state_29461[(2)]);
var inst_29439 = (inst_29438__$1 == null);
var state_29461__$1 = (function (){var statearr_29465 = state_29461;
(statearr_29465[(7)] = inst_29438__$1);

return statearr_29465;
})();
if(cljs.core.truth_(inst_29439)){
var statearr_29466_29493 = state_29461__$1;
(statearr_29466_29493[(1)] = (5));

} else {
var statearr_29467_29494 = state_29461__$1;
(statearr_29467_29494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (13))){
var state_29461__$1 = state_29461;
var statearr_29468_29495 = state_29461__$1;
(statearr_29468_29495[(2)] = null);

(statearr_29468_29495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (6))){
var inst_29438 = (state_29461[(7)]);
var inst_29444 = p.call(null,inst_29438);
var state_29461__$1 = state_29461;
if(cljs.core.truth_(inst_29444)){
var statearr_29469_29496 = state_29461__$1;
(statearr_29469_29496[(1)] = (9));

} else {
var statearr_29470_29497 = state_29461__$1;
(statearr_29470_29497[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (3))){
var inst_29459 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29461__$1,inst_29459);
} else {
if((state_val_29462 === (12))){
var state_29461__$1 = state_29461;
var statearr_29471_29498 = state_29461__$1;
(statearr_29471_29498[(2)] = null);

(statearr_29471_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (2))){
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29461__$1,(4),ch);
} else {
if((state_val_29462 === (11))){
var inst_29438 = (state_29461[(7)]);
var inst_29448 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29461__$1,(8),inst_29448,inst_29438);
} else {
if((state_val_29462 === (9))){
var state_29461__$1 = state_29461;
var statearr_29472_29499 = state_29461__$1;
(statearr_29472_29499[(2)] = tc);

(statearr_29472_29499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (5))){
var inst_29441 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29442 = cljs.core.async.close_BANG_.call(null,fc);
var state_29461__$1 = (function (){var statearr_29473 = state_29461;
(statearr_29473[(8)] = inst_29441);

return statearr_29473;
})();
var statearr_29474_29500 = state_29461__$1;
(statearr_29474_29500[(2)] = inst_29442);

(statearr_29474_29500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (14))){
var inst_29455 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29475_29501 = state_29461__$1;
(statearr_29475_29501[(2)] = inst_29455);

(statearr_29475_29501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (10))){
var state_29461__$1 = state_29461;
var statearr_29476_29502 = state_29461__$1;
(statearr_29476_29502[(2)] = fc);

(statearr_29476_29502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (8))){
var inst_29450 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
if(cljs.core.truth_(inst_29450)){
var statearr_29477_29503 = state_29461__$1;
(statearr_29477_29503[(1)] = (12));

} else {
var statearr_29478_29504 = state_29461__$1;
(statearr_29478_29504[(1)] = (13));

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
});})(c__28804__auto___29490,tc,fc))
;
return ((function (switch__28692__auto__,c__28804__auto___29490,tc,fc){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_29482 = [null,null,null,null,null,null,null,null,null];
(statearr_29482[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_29482[(1)] = (1));

return statearr_29482;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_29461){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29483){if((e29483 instanceof Object)){
var ex__28696__auto__ = e29483;
var statearr_29484_29505 = state_29461;
(statearr_29484_29505[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29506 = state_29461;
state_29461 = G__29506;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_29461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_29461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___29490,tc,fc))
})();
var state__28806__auto__ = (function (){var statearr_29485 = f__28805__auto__.call(null);
(statearr_29485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___29490);

return statearr_29485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___29490,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (7))){
var inst_29566 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29572_29593 = state_29570__$1;
(statearr_29572_29593[(2)] = inst_29566);

(statearr_29572_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (1))){
var inst_29550 = init;
var state_29570__$1 = (function (){var statearr_29573 = state_29570;
(statearr_29573[(7)] = inst_29550);

return statearr_29573;
})();
var statearr_29574_29594 = state_29570__$1;
(statearr_29574_29594[(2)] = null);

(statearr_29574_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (4))){
var inst_29553 = (state_29570[(8)]);
var inst_29553__$1 = (state_29570[(2)]);
var inst_29554 = (inst_29553__$1 == null);
var state_29570__$1 = (function (){var statearr_29575 = state_29570;
(statearr_29575[(8)] = inst_29553__$1);

return statearr_29575;
})();
if(cljs.core.truth_(inst_29554)){
var statearr_29576_29595 = state_29570__$1;
(statearr_29576_29595[(1)] = (5));

} else {
var statearr_29577_29596 = state_29570__$1;
(statearr_29577_29596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (6))){
var inst_29550 = (state_29570[(7)]);
var inst_29557 = (state_29570[(9)]);
var inst_29553 = (state_29570[(8)]);
var inst_29557__$1 = f.call(null,inst_29550,inst_29553);
var inst_29558 = cljs.core.reduced_QMARK_.call(null,inst_29557__$1);
var state_29570__$1 = (function (){var statearr_29578 = state_29570;
(statearr_29578[(9)] = inst_29557__$1);

return statearr_29578;
})();
if(inst_29558){
var statearr_29579_29597 = state_29570__$1;
(statearr_29579_29597[(1)] = (8));

} else {
var statearr_29580_29598 = state_29570__$1;
(statearr_29580_29598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (3))){
var inst_29568 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
if((state_val_29571 === (2))){
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29570__$1,(4),ch);
} else {
if((state_val_29571 === (9))){
var inst_29557 = (state_29570[(9)]);
var inst_29550 = inst_29557;
var state_29570__$1 = (function (){var statearr_29581 = state_29570;
(statearr_29581[(7)] = inst_29550);

return statearr_29581;
})();
var statearr_29582_29599 = state_29570__$1;
(statearr_29582_29599[(2)] = null);

(statearr_29582_29599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (5))){
var inst_29550 = (state_29570[(7)]);
var state_29570__$1 = state_29570;
var statearr_29583_29600 = state_29570__$1;
(statearr_29583_29600[(2)] = inst_29550);

(statearr_29583_29600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (10))){
var inst_29564 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29584_29601 = state_29570__$1;
(statearr_29584_29601[(2)] = inst_29564);

(statearr_29584_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (8))){
var inst_29557 = (state_29570[(9)]);
var inst_29560 = cljs.core.deref.call(null,inst_29557);
var state_29570__$1 = state_29570;
var statearr_29585_29602 = state_29570__$1;
(statearr_29585_29602[(2)] = inst_29560);

(statearr_29585_29602[(1)] = (10));


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
});})(c__28804__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28693__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28693__auto____0 = (function (){
var statearr_29589 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29589[(0)] = cljs$core$async$reduce_$_state_machine__28693__auto__);

(statearr_29589[(1)] = (1));

return statearr_29589;
});
var cljs$core$async$reduce_$_state_machine__28693__auto____1 = (function (state_29570){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29590){if((e29590 instanceof Object)){
var ex__28696__auto__ = e29590;
var statearr_29591_29603 = state_29570;
(statearr_29591_29603[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29604 = state_29570;
state_29570 = G__29604;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28693__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28693__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28693__auto____0;
cljs$core$async$reduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28693__auto____1;
return cljs$core$async$reduce_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__))
})();
var state__28806__auto__ = (function (){var statearr_29592 = f__28805__auto__.call(null);
(statearr_29592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_29592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__))
);

return c__28804__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29605 = [];
var len__25923__auto___29657 = arguments.length;
var i__25924__auto___29658 = (0);
while(true){
if((i__25924__auto___29658 < len__25923__auto___29657)){
args29605.push((arguments[i__25924__auto___29658]));

var G__29659 = (i__25924__auto___29658 + (1));
i__25924__auto___29658 = G__29659;
continue;
} else {
}
break;
}

var G__29607 = args29605.length;
switch (G__29607) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29605.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__){
return (function (state_29632){
var state_val_29633 = (state_29632[(1)]);
if((state_val_29633 === (7))){
var inst_29614 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29634_29661 = state_29632__$1;
(statearr_29634_29661[(2)] = inst_29614);

(statearr_29634_29661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (1))){
var inst_29608 = cljs.core.seq.call(null,coll);
var inst_29609 = inst_29608;
var state_29632__$1 = (function (){var statearr_29635 = state_29632;
(statearr_29635[(7)] = inst_29609);

return statearr_29635;
})();
var statearr_29636_29662 = state_29632__$1;
(statearr_29636_29662[(2)] = null);

(statearr_29636_29662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (4))){
var inst_29609 = (state_29632[(7)]);
var inst_29612 = cljs.core.first.call(null,inst_29609);
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29632__$1,(7),ch,inst_29612);
} else {
if((state_val_29633 === (13))){
var inst_29626 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29637_29663 = state_29632__$1;
(statearr_29637_29663[(2)] = inst_29626);

(statearr_29637_29663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (6))){
var inst_29617 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29617)){
var statearr_29638_29664 = state_29632__$1;
(statearr_29638_29664[(1)] = (8));

} else {
var statearr_29639_29665 = state_29632__$1;
(statearr_29639_29665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (3))){
var inst_29630 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29632__$1,inst_29630);
} else {
if((state_val_29633 === (12))){
var state_29632__$1 = state_29632;
var statearr_29640_29666 = state_29632__$1;
(statearr_29640_29666[(2)] = null);

(statearr_29640_29666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (2))){
var inst_29609 = (state_29632[(7)]);
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29609)){
var statearr_29641_29667 = state_29632__$1;
(statearr_29641_29667[(1)] = (4));

} else {
var statearr_29642_29668 = state_29632__$1;
(statearr_29642_29668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (11))){
var inst_29623 = cljs.core.async.close_BANG_.call(null,ch);
var state_29632__$1 = state_29632;
var statearr_29643_29669 = state_29632__$1;
(statearr_29643_29669[(2)] = inst_29623);

(statearr_29643_29669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (9))){
var state_29632__$1 = state_29632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29644_29670 = state_29632__$1;
(statearr_29644_29670[(1)] = (11));

} else {
var statearr_29645_29671 = state_29632__$1;
(statearr_29645_29671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (5))){
var inst_29609 = (state_29632[(7)]);
var state_29632__$1 = state_29632;
var statearr_29646_29672 = state_29632__$1;
(statearr_29646_29672[(2)] = inst_29609);

(statearr_29646_29672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (10))){
var inst_29628 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29647_29673 = state_29632__$1;
(statearr_29647_29673[(2)] = inst_29628);

(statearr_29647_29673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (8))){
var inst_29609 = (state_29632[(7)]);
var inst_29619 = cljs.core.next.call(null,inst_29609);
var inst_29609__$1 = inst_29619;
var state_29632__$1 = (function (){var statearr_29648 = state_29632;
(statearr_29648[(7)] = inst_29609__$1);

return statearr_29648;
})();
var statearr_29649_29674 = state_29632__$1;
(statearr_29649_29674[(2)] = null);

(statearr_29649_29674[(1)] = (2));


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
});})(c__28804__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_29653 = [null,null,null,null,null,null,null,null];
(statearr_29653[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_29653[(1)] = (1));

return statearr_29653;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_29632){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_29632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e29654){if((e29654 instanceof Object)){
var ex__28696__auto__ = e29654;
var statearr_29655_29675 = state_29632;
(statearr_29655_29675[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29676 = state_29632;
state_29632 = G__29676;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__))
})();
var state__28806__auto__ = (function (){var statearr_29656 = f__28805__auto__.call(null);
(statearr_29656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_29656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__))
);

return c__28804__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29902 = (function (mult,ch,cs,meta29903){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29903 = meta29903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29904,meta29903__$1){
var self__ = this;
var _29904__$1 = this;
return (new cljs.core.async.t_cljs$core$async29902(self__.mult,self__.ch,self__.cs,meta29903__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29904){
var self__ = this;
var _29904__$1 = this;
return self__.meta29903;
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29903","meta29903",1849467828,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29902";

cljs.core.async.t_cljs$core$async29902.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29902");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29902 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29902(mult__$1,ch__$1,cs__$1,meta29903){
return (new cljs.core.async.t_cljs$core$async29902(mult__$1,ch__$1,cs__$1,meta29903));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29902(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28804__auto___30127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30127,cs,m,dchan,dctr,done){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30127,cs,m,dchan,dctr,done){
return (function (state_30039){
var state_val_30040 = (state_30039[(1)]);
if((state_val_30040 === (7))){
var inst_30035 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30041_30128 = state_30039__$1;
(statearr_30041_30128[(2)] = inst_30035);

(statearr_30041_30128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (20))){
var inst_29938 = (state_30039[(7)]);
var inst_29950 = cljs.core.first.call(null,inst_29938);
var inst_29951 = cljs.core.nth.call(null,inst_29950,(0),null);
var inst_29952 = cljs.core.nth.call(null,inst_29950,(1),null);
var state_30039__$1 = (function (){var statearr_30042 = state_30039;
(statearr_30042[(8)] = inst_29951);

return statearr_30042;
})();
if(cljs.core.truth_(inst_29952)){
var statearr_30043_30129 = state_30039__$1;
(statearr_30043_30129[(1)] = (22));

} else {
var statearr_30044_30130 = state_30039__$1;
(statearr_30044_30130[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (27))){
var inst_29982 = (state_30039[(9)]);
var inst_29980 = (state_30039[(10)]);
var inst_29987 = (state_30039[(11)]);
var inst_29907 = (state_30039[(12)]);
var inst_29987__$1 = cljs.core._nth.call(null,inst_29980,inst_29982);
var inst_29988 = cljs.core.async.put_BANG_.call(null,inst_29987__$1,inst_29907,done);
var state_30039__$1 = (function (){var statearr_30045 = state_30039;
(statearr_30045[(11)] = inst_29987__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_29988)){
var statearr_30046_30131 = state_30039__$1;
(statearr_30046_30131[(1)] = (30));

} else {
var statearr_30047_30132 = state_30039__$1;
(statearr_30047_30132[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (1))){
var state_30039__$1 = state_30039;
var statearr_30048_30133 = state_30039__$1;
(statearr_30048_30133[(2)] = null);

(statearr_30048_30133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (24))){
var inst_29938 = (state_30039[(7)]);
var inst_29957 = (state_30039[(2)]);
var inst_29958 = cljs.core.next.call(null,inst_29938);
var inst_29916 = inst_29958;
var inst_29917 = null;
var inst_29918 = (0);
var inst_29919 = (0);
var state_30039__$1 = (function (){var statearr_30049 = state_30039;
(statearr_30049[(13)] = inst_29917);

(statearr_30049[(14)] = inst_29919);

(statearr_30049[(15)] = inst_29916);

(statearr_30049[(16)] = inst_29918);

(statearr_30049[(17)] = inst_29957);

return statearr_30049;
})();
var statearr_30050_30134 = state_30039__$1;
(statearr_30050_30134[(2)] = null);

(statearr_30050_30134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (39))){
var state_30039__$1 = state_30039;
var statearr_30054_30135 = state_30039__$1;
(statearr_30054_30135[(2)] = null);

(statearr_30054_30135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (4))){
var inst_29907 = (state_30039[(12)]);
var inst_29907__$1 = (state_30039[(2)]);
var inst_29908 = (inst_29907__$1 == null);
var state_30039__$1 = (function (){var statearr_30055 = state_30039;
(statearr_30055[(12)] = inst_29907__$1);

return statearr_30055;
})();
if(cljs.core.truth_(inst_29908)){
var statearr_30056_30136 = state_30039__$1;
(statearr_30056_30136[(1)] = (5));

} else {
var statearr_30057_30137 = state_30039__$1;
(statearr_30057_30137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (15))){
var inst_29917 = (state_30039[(13)]);
var inst_29919 = (state_30039[(14)]);
var inst_29916 = (state_30039[(15)]);
var inst_29918 = (state_30039[(16)]);
var inst_29934 = (state_30039[(2)]);
var inst_29935 = (inst_29919 + (1));
var tmp30051 = inst_29917;
var tmp30052 = inst_29916;
var tmp30053 = inst_29918;
var inst_29916__$1 = tmp30052;
var inst_29917__$1 = tmp30051;
var inst_29918__$1 = tmp30053;
var inst_29919__$1 = inst_29935;
var state_30039__$1 = (function (){var statearr_30058 = state_30039;
(statearr_30058[(13)] = inst_29917__$1);

(statearr_30058[(14)] = inst_29919__$1);

(statearr_30058[(18)] = inst_29934);

(statearr_30058[(15)] = inst_29916__$1);

(statearr_30058[(16)] = inst_29918__$1);

return statearr_30058;
})();
var statearr_30059_30138 = state_30039__$1;
(statearr_30059_30138[(2)] = null);

(statearr_30059_30138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (21))){
var inst_29961 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30063_30139 = state_30039__$1;
(statearr_30063_30139[(2)] = inst_29961);

(statearr_30063_30139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (31))){
var inst_29987 = (state_30039[(11)]);
var inst_29991 = done.call(null,null);
var inst_29992 = cljs.core.async.untap_STAR_.call(null,m,inst_29987);
var state_30039__$1 = (function (){var statearr_30064 = state_30039;
(statearr_30064[(19)] = inst_29991);

return statearr_30064;
})();
var statearr_30065_30140 = state_30039__$1;
(statearr_30065_30140[(2)] = inst_29992);

(statearr_30065_30140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (32))){
var inst_29982 = (state_30039[(9)]);
var inst_29980 = (state_30039[(10)]);
var inst_29981 = (state_30039[(20)]);
var inst_29979 = (state_30039[(21)]);
var inst_29994 = (state_30039[(2)]);
var inst_29995 = (inst_29982 + (1));
var tmp30060 = inst_29980;
var tmp30061 = inst_29981;
var tmp30062 = inst_29979;
var inst_29979__$1 = tmp30062;
var inst_29980__$1 = tmp30060;
var inst_29981__$1 = tmp30061;
var inst_29982__$1 = inst_29995;
var state_30039__$1 = (function (){var statearr_30066 = state_30039;
(statearr_30066[(22)] = inst_29994);

(statearr_30066[(9)] = inst_29982__$1);

(statearr_30066[(10)] = inst_29980__$1);

(statearr_30066[(20)] = inst_29981__$1);

(statearr_30066[(21)] = inst_29979__$1);

return statearr_30066;
})();
var statearr_30067_30141 = state_30039__$1;
(statearr_30067_30141[(2)] = null);

(statearr_30067_30141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (40))){
var inst_30007 = (state_30039[(23)]);
var inst_30011 = done.call(null,null);
var inst_30012 = cljs.core.async.untap_STAR_.call(null,m,inst_30007);
var state_30039__$1 = (function (){var statearr_30068 = state_30039;
(statearr_30068[(24)] = inst_30011);

return statearr_30068;
})();
var statearr_30069_30142 = state_30039__$1;
(statearr_30069_30142[(2)] = inst_30012);

(statearr_30069_30142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (33))){
var inst_29998 = (state_30039[(25)]);
var inst_30000 = cljs.core.chunked_seq_QMARK_.call(null,inst_29998);
var state_30039__$1 = state_30039;
if(inst_30000){
var statearr_30070_30143 = state_30039__$1;
(statearr_30070_30143[(1)] = (36));

} else {
var statearr_30071_30144 = state_30039__$1;
(statearr_30071_30144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (13))){
var inst_29928 = (state_30039[(26)]);
var inst_29931 = cljs.core.async.close_BANG_.call(null,inst_29928);
var state_30039__$1 = state_30039;
var statearr_30072_30145 = state_30039__$1;
(statearr_30072_30145[(2)] = inst_29931);

(statearr_30072_30145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (22))){
var inst_29951 = (state_30039[(8)]);
var inst_29954 = cljs.core.async.close_BANG_.call(null,inst_29951);
var state_30039__$1 = state_30039;
var statearr_30073_30146 = state_30039__$1;
(statearr_30073_30146[(2)] = inst_29954);

(statearr_30073_30146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (36))){
var inst_29998 = (state_30039[(25)]);
var inst_30002 = cljs.core.chunk_first.call(null,inst_29998);
var inst_30003 = cljs.core.chunk_rest.call(null,inst_29998);
var inst_30004 = cljs.core.count.call(null,inst_30002);
var inst_29979 = inst_30003;
var inst_29980 = inst_30002;
var inst_29981 = inst_30004;
var inst_29982 = (0);
var state_30039__$1 = (function (){var statearr_30074 = state_30039;
(statearr_30074[(9)] = inst_29982);

(statearr_30074[(10)] = inst_29980);

(statearr_30074[(20)] = inst_29981);

(statearr_30074[(21)] = inst_29979);

return statearr_30074;
})();
var statearr_30075_30147 = state_30039__$1;
(statearr_30075_30147[(2)] = null);

(statearr_30075_30147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (41))){
var inst_29998 = (state_30039[(25)]);
var inst_30014 = (state_30039[(2)]);
var inst_30015 = cljs.core.next.call(null,inst_29998);
var inst_29979 = inst_30015;
var inst_29980 = null;
var inst_29981 = (0);
var inst_29982 = (0);
var state_30039__$1 = (function (){var statearr_30076 = state_30039;
(statearr_30076[(9)] = inst_29982);

(statearr_30076[(10)] = inst_29980);

(statearr_30076[(20)] = inst_29981);

(statearr_30076[(21)] = inst_29979);

(statearr_30076[(27)] = inst_30014);

return statearr_30076;
})();
var statearr_30077_30148 = state_30039__$1;
(statearr_30077_30148[(2)] = null);

(statearr_30077_30148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (43))){
var state_30039__$1 = state_30039;
var statearr_30078_30149 = state_30039__$1;
(statearr_30078_30149[(2)] = null);

(statearr_30078_30149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (29))){
var inst_30023 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30079_30150 = state_30039__$1;
(statearr_30079_30150[(2)] = inst_30023);

(statearr_30079_30150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (44))){
var inst_30032 = (state_30039[(2)]);
var state_30039__$1 = (function (){var statearr_30080 = state_30039;
(statearr_30080[(28)] = inst_30032);

return statearr_30080;
})();
var statearr_30081_30151 = state_30039__$1;
(statearr_30081_30151[(2)] = null);

(statearr_30081_30151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (6))){
var inst_29971 = (state_30039[(29)]);
var inst_29970 = cljs.core.deref.call(null,cs);
var inst_29971__$1 = cljs.core.keys.call(null,inst_29970);
var inst_29972 = cljs.core.count.call(null,inst_29971__$1);
var inst_29973 = cljs.core.reset_BANG_.call(null,dctr,inst_29972);
var inst_29978 = cljs.core.seq.call(null,inst_29971__$1);
var inst_29979 = inst_29978;
var inst_29980 = null;
var inst_29981 = (0);
var inst_29982 = (0);
var state_30039__$1 = (function (){var statearr_30082 = state_30039;
(statearr_30082[(9)] = inst_29982);

(statearr_30082[(10)] = inst_29980);

(statearr_30082[(29)] = inst_29971__$1);

(statearr_30082[(20)] = inst_29981);

(statearr_30082[(21)] = inst_29979);

(statearr_30082[(30)] = inst_29973);

return statearr_30082;
})();
var statearr_30083_30152 = state_30039__$1;
(statearr_30083_30152[(2)] = null);

(statearr_30083_30152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (28))){
var inst_29979 = (state_30039[(21)]);
var inst_29998 = (state_30039[(25)]);
var inst_29998__$1 = cljs.core.seq.call(null,inst_29979);
var state_30039__$1 = (function (){var statearr_30084 = state_30039;
(statearr_30084[(25)] = inst_29998__$1);

return statearr_30084;
})();
if(inst_29998__$1){
var statearr_30085_30153 = state_30039__$1;
(statearr_30085_30153[(1)] = (33));

} else {
var statearr_30086_30154 = state_30039__$1;
(statearr_30086_30154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (25))){
var inst_29982 = (state_30039[(9)]);
var inst_29981 = (state_30039[(20)]);
var inst_29984 = (inst_29982 < inst_29981);
var inst_29985 = inst_29984;
var state_30039__$1 = state_30039;
if(cljs.core.truth_(inst_29985)){
var statearr_30087_30155 = state_30039__$1;
(statearr_30087_30155[(1)] = (27));

} else {
var statearr_30088_30156 = state_30039__$1;
(statearr_30088_30156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (34))){
var state_30039__$1 = state_30039;
var statearr_30089_30157 = state_30039__$1;
(statearr_30089_30157[(2)] = null);

(statearr_30089_30157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (17))){
var state_30039__$1 = state_30039;
var statearr_30090_30158 = state_30039__$1;
(statearr_30090_30158[(2)] = null);

(statearr_30090_30158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (3))){
var inst_30037 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30039__$1,inst_30037);
} else {
if((state_val_30040 === (12))){
var inst_29966 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30091_30159 = state_30039__$1;
(statearr_30091_30159[(2)] = inst_29966);

(statearr_30091_30159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (2))){
var state_30039__$1 = state_30039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30039__$1,(4),ch);
} else {
if((state_val_30040 === (23))){
var state_30039__$1 = state_30039;
var statearr_30092_30160 = state_30039__$1;
(statearr_30092_30160[(2)] = null);

(statearr_30092_30160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (35))){
var inst_30021 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30093_30161 = state_30039__$1;
(statearr_30093_30161[(2)] = inst_30021);

(statearr_30093_30161[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (19))){
var inst_29938 = (state_30039[(7)]);
var inst_29942 = cljs.core.chunk_first.call(null,inst_29938);
var inst_29943 = cljs.core.chunk_rest.call(null,inst_29938);
var inst_29944 = cljs.core.count.call(null,inst_29942);
var inst_29916 = inst_29943;
var inst_29917 = inst_29942;
var inst_29918 = inst_29944;
var inst_29919 = (0);
var state_30039__$1 = (function (){var statearr_30094 = state_30039;
(statearr_30094[(13)] = inst_29917);

(statearr_30094[(14)] = inst_29919);

(statearr_30094[(15)] = inst_29916);

(statearr_30094[(16)] = inst_29918);

return statearr_30094;
})();
var statearr_30095_30162 = state_30039__$1;
(statearr_30095_30162[(2)] = null);

(statearr_30095_30162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (11))){
var inst_29938 = (state_30039[(7)]);
var inst_29916 = (state_30039[(15)]);
var inst_29938__$1 = cljs.core.seq.call(null,inst_29916);
var state_30039__$1 = (function (){var statearr_30096 = state_30039;
(statearr_30096[(7)] = inst_29938__$1);

return statearr_30096;
})();
if(inst_29938__$1){
var statearr_30097_30163 = state_30039__$1;
(statearr_30097_30163[(1)] = (16));

} else {
var statearr_30098_30164 = state_30039__$1;
(statearr_30098_30164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (9))){
var inst_29968 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30099_30165 = state_30039__$1;
(statearr_30099_30165[(2)] = inst_29968);

(statearr_30099_30165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (5))){
var inst_29914 = cljs.core.deref.call(null,cs);
var inst_29915 = cljs.core.seq.call(null,inst_29914);
var inst_29916 = inst_29915;
var inst_29917 = null;
var inst_29918 = (0);
var inst_29919 = (0);
var state_30039__$1 = (function (){var statearr_30100 = state_30039;
(statearr_30100[(13)] = inst_29917);

(statearr_30100[(14)] = inst_29919);

(statearr_30100[(15)] = inst_29916);

(statearr_30100[(16)] = inst_29918);

return statearr_30100;
})();
var statearr_30101_30166 = state_30039__$1;
(statearr_30101_30166[(2)] = null);

(statearr_30101_30166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (14))){
var state_30039__$1 = state_30039;
var statearr_30102_30167 = state_30039__$1;
(statearr_30102_30167[(2)] = null);

(statearr_30102_30167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (45))){
var inst_30029 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30103_30168 = state_30039__$1;
(statearr_30103_30168[(2)] = inst_30029);

(statearr_30103_30168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (26))){
var inst_29971 = (state_30039[(29)]);
var inst_30025 = (state_30039[(2)]);
var inst_30026 = cljs.core.seq.call(null,inst_29971);
var state_30039__$1 = (function (){var statearr_30104 = state_30039;
(statearr_30104[(31)] = inst_30025);

return statearr_30104;
})();
if(inst_30026){
var statearr_30105_30169 = state_30039__$1;
(statearr_30105_30169[(1)] = (42));

} else {
var statearr_30106_30170 = state_30039__$1;
(statearr_30106_30170[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (16))){
var inst_29938 = (state_30039[(7)]);
var inst_29940 = cljs.core.chunked_seq_QMARK_.call(null,inst_29938);
var state_30039__$1 = state_30039;
if(inst_29940){
var statearr_30107_30171 = state_30039__$1;
(statearr_30107_30171[(1)] = (19));

} else {
var statearr_30108_30172 = state_30039__$1;
(statearr_30108_30172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (38))){
var inst_30018 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30109_30173 = state_30039__$1;
(statearr_30109_30173[(2)] = inst_30018);

(statearr_30109_30173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (30))){
var state_30039__$1 = state_30039;
var statearr_30110_30174 = state_30039__$1;
(statearr_30110_30174[(2)] = null);

(statearr_30110_30174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (10))){
var inst_29917 = (state_30039[(13)]);
var inst_29919 = (state_30039[(14)]);
var inst_29927 = cljs.core._nth.call(null,inst_29917,inst_29919);
var inst_29928 = cljs.core.nth.call(null,inst_29927,(0),null);
var inst_29929 = cljs.core.nth.call(null,inst_29927,(1),null);
var state_30039__$1 = (function (){var statearr_30111 = state_30039;
(statearr_30111[(26)] = inst_29928);

return statearr_30111;
})();
if(cljs.core.truth_(inst_29929)){
var statearr_30112_30175 = state_30039__$1;
(statearr_30112_30175[(1)] = (13));

} else {
var statearr_30113_30176 = state_30039__$1;
(statearr_30113_30176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (18))){
var inst_29964 = (state_30039[(2)]);
var state_30039__$1 = state_30039;
var statearr_30114_30177 = state_30039__$1;
(statearr_30114_30177[(2)] = inst_29964);

(statearr_30114_30177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (42))){
var state_30039__$1 = state_30039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30039__$1,(45),dchan);
} else {
if((state_val_30040 === (37))){
var inst_29998 = (state_30039[(25)]);
var inst_29907 = (state_30039[(12)]);
var inst_30007 = (state_30039[(23)]);
var inst_30007__$1 = cljs.core.first.call(null,inst_29998);
var inst_30008 = cljs.core.async.put_BANG_.call(null,inst_30007__$1,inst_29907,done);
var state_30039__$1 = (function (){var statearr_30115 = state_30039;
(statearr_30115[(23)] = inst_30007__$1);

return statearr_30115;
})();
if(cljs.core.truth_(inst_30008)){
var statearr_30116_30178 = state_30039__$1;
(statearr_30116_30178[(1)] = (39));

} else {
var statearr_30117_30179 = state_30039__$1;
(statearr_30117_30179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30040 === (8))){
var inst_29919 = (state_30039[(14)]);
var inst_29918 = (state_30039[(16)]);
var inst_29921 = (inst_29919 < inst_29918);
var inst_29922 = inst_29921;
var state_30039__$1 = state_30039;
if(cljs.core.truth_(inst_29922)){
var statearr_30118_30180 = state_30039__$1;
(statearr_30118_30180[(1)] = (10));

} else {
var statearr_30119_30181 = state_30039__$1;
(statearr_30119_30181[(1)] = (11));

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
});})(c__28804__auto___30127,cs,m,dchan,dctr,done))
;
return ((function (switch__28692__auto__,c__28804__auto___30127,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28693__auto__ = null;
var cljs$core$async$mult_$_state_machine__28693__auto____0 = (function (){
var statearr_30123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30123[(0)] = cljs$core$async$mult_$_state_machine__28693__auto__);

(statearr_30123[(1)] = (1));

return statearr_30123;
});
var cljs$core$async$mult_$_state_machine__28693__auto____1 = (function (state_30039){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30124){if((e30124 instanceof Object)){
var ex__28696__auto__ = e30124;
var statearr_30125_30182 = state_30039;
(statearr_30125_30182[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30183 = state_30039;
state_30039 = G__30183;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28693__auto__ = function(state_30039){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28693__auto____1.call(this,state_30039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28693__auto____0;
cljs$core$async$mult_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28693__auto____1;
return cljs$core$async$mult_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30127,cs,m,dchan,dctr,done))
})();
var state__28806__auto__ = (function (){var statearr_30126 = f__28805__auto__.call(null);
(statearr_30126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30127);

return statearr_30126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30127,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30184 = [];
var len__25923__auto___30187 = arguments.length;
var i__25924__auto___30188 = (0);
while(true){
if((i__25924__auto___30188 < len__25923__auto___30187)){
args30184.push((arguments[i__25924__auto___30188]));

var G__30189 = (i__25924__auto___30188 + (1));
i__25924__auto___30188 = G__30189;
continue;
} else {
}
break;
}

var G__30186 = args30184.length;
switch (G__30186) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30184.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___30201 = arguments.length;
var i__25924__auto___30202 = (0);
while(true){
if((i__25924__auto___30202 < len__25923__auto___30201)){
args__25930__auto__.push((arguments[i__25924__auto___30202]));

var G__30203 = (i__25924__auto___30202 + (1));
i__25924__auto___30202 = G__30203;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30195){
var map__30196 = p__30195;
var map__30196__$1 = ((((!((map__30196 == null)))?((((map__30196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30196):map__30196);
var opts = map__30196__$1;
var statearr_30198_30204 = state;
(statearr_30198_30204[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30196,map__30196__$1,opts){
return (function (val){
var statearr_30199_30205 = state;
(statearr_30199_30205[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30196,map__30196__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30200_30206 = state;
(statearr_30200_30206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30191){
var G__30192 = cljs.core.first.call(null,seq30191);
var seq30191__$1 = cljs.core.next.call(null,seq30191);
var G__30193 = cljs.core.first.call(null,seq30191__$1);
var seq30191__$2 = cljs.core.next.call(null,seq30191__$1);
var G__30194 = cljs.core.first.call(null,seq30191__$2);
var seq30191__$3 = cljs.core.next.call(null,seq30191__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30192,G__30193,G__30194,seq30191__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30372 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30373){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30373 = meta30373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30374,meta30373__$1){
var self__ = this;
var _30374__$1 = this;
return (new cljs.core.async.t_cljs$core$async30372(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30373__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30374){
var self__ = this;
var _30374__$1 = this;
return self__.meta30373;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30373","meta30373",1310447754,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30372";

cljs.core.async.t_cljs$core$async30372.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30372");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30372 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30372(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30373){
return (new cljs.core.async.t_cljs$core$async30372(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30373));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30372(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28804__auto___30537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30474){
var state_val_30475 = (state_30474[(1)]);
if((state_val_30475 === (7))){
var inst_30390 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30476_30538 = state_30474__$1;
(statearr_30476_30538[(2)] = inst_30390);

(statearr_30476_30538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (20))){
var inst_30402 = (state_30474[(7)]);
var state_30474__$1 = state_30474;
var statearr_30477_30539 = state_30474__$1;
(statearr_30477_30539[(2)] = inst_30402);

(statearr_30477_30539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (27))){
var state_30474__$1 = state_30474;
var statearr_30478_30540 = state_30474__$1;
(statearr_30478_30540[(2)] = null);

(statearr_30478_30540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var inst_30378 = (state_30474[(8)]);
var inst_30378__$1 = calc_state.call(null);
var inst_30380 = (inst_30378__$1 == null);
var inst_30381 = cljs.core.not.call(null,inst_30380);
var state_30474__$1 = (function (){var statearr_30479 = state_30474;
(statearr_30479[(8)] = inst_30378__$1);

return statearr_30479;
})();
if(inst_30381){
var statearr_30480_30541 = state_30474__$1;
(statearr_30480_30541[(1)] = (2));

} else {
var statearr_30481_30542 = state_30474__$1;
(statearr_30481_30542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (24))){
var inst_30434 = (state_30474[(9)]);
var inst_30448 = (state_30474[(10)]);
var inst_30425 = (state_30474[(11)]);
var inst_30448__$1 = inst_30425.call(null,inst_30434);
var state_30474__$1 = (function (){var statearr_30482 = state_30474;
(statearr_30482[(10)] = inst_30448__$1);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30448__$1)){
var statearr_30483_30543 = state_30474__$1;
(statearr_30483_30543[(1)] = (29));

} else {
var statearr_30484_30544 = state_30474__$1;
(statearr_30484_30544[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (4))){
var inst_30393 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30393)){
var statearr_30485_30545 = state_30474__$1;
(statearr_30485_30545[(1)] = (8));

} else {
var statearr_30486_30546 = state_30474__$1;
(statearr_30486_30546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (15))){
var inst_30419 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30419)){
var statearr_30487_30547 = state_30474__$1;
(statearr_30487_30547[(1)] = (19));

} else {
var statearr_30488_30548 = state_30474__$1;
(statearr_30488_30548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (21))){
var inst_30424 = (state_30474[(12)]);
var inst_30424__$1 = (state_30474[(2)]);
var inst_30425 = cljs.core.get.call(null,inst_30424__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30426 = cljs.core.get.call(null,inst_30424__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30427 = cljs.core.get.call(null,inst_30424__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30474__$1 = (function (){var statearr_30489 = state_30474;
(statearr_30489[(13)] = inst_30426);

(statearr_30489[(12)] = inst_30424__$1);

(statearr_30489[(11)] = inst_30425);

return statearr_30489;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30474__$1,(22),inst_30427);
} else {
if((state_val_30475 === (31))){
var inst_30456 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30456)){
var statearr_30490_30549 = state_30474__$1;
(statearr_30490_30549[(1)] = (32));

} else {
var statearr_30491_30550 = state_30474__$1;
(statearr_30491_30550[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (32))){
var inst_30433 = (state_30474[(14)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30474__$1,(35),out,inst_30433);
} else {
if((state_val_30475 === (33))){
var inst_30424 = (state_30474[(12)]);
var inst_30402 = inst_30424;
var state_30474__$1 = (function (){var statearr_30492 = state_30474;
(statearr_30492[(7)] = inst_30402);

return statearr_30492;
})();
var statearr_30493_30551 = state_30474__$1;
(statearr_30493_30551[(2)] = null);

(statearr_30493_30551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (13))){
var inst_30402 = (state_30474[(7)]);
var inst_30409 = inst_30402.cljs$lang$protocol_mask$partition0$;
var inst_30410 = (inst_30409 & (64));
var inst_30411 = inst_30402.cljs$core$ISeq$;
var inst_30412 = (inst_30410) || (inst_30411);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30412)){
var statearr_30494_30552 = state_30474__$1;
(statearr_30494_30552[(1)] = (16));

} else {
var statearr_30495_30553 = state_30474__$1;
(statearr_30495_30553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (22))){
var inst_30434 = (state_30474[(9)]);
var inst_30433 = (state_30474[(14)]);
var inst_30432 = (state_30474[(2)]);
var inst_30433__$1 = cljs.core.nth.call(null,inst_30432,(0),null);
var inst_30434__$1 = cljs.core.nth.call(null,inst_30432,(1),null);
var inst_30435 = (inst_30433__$1 == null);
var inst_30436 = cljs.core._EQ_.call(null,inst_30434__$1,change);
var inst_30437 = (inst_30435) || (inst_30436);
var state_30474__$1 = (function (){var statearr_30496 = state_30474;
(statearr_30496[(9)] = inst_30434__$1);

(statearr_30496[(14)] = inst_30433__$1);

return statearr_30496;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30497_30554 = state_30474__$1;
(statearr_30497_30554[(1)] = (23));

} else {
var statearr_30498_30555 = state_30474__$1;
(statearr_30498_30555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (36))){
var inst_30424 = (state_30474[(12)]);
var inst_30402 = inst_30424;
var state_30474__$1 = (function (){var statearr_30499 = state_30474;
(statearr_30499[(7)] = inst_30402);

return statearr_30499;
})();
var statearr_30500_30556 = state_30474__$1;
(statearr_30500_30556[(2)] = null);

(statearr_30500_30556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (29))){
var inst_30448 = (state_30474[(10)]);
var state_30474__$1 = state_30474;
var statearr_30501_30557 = state_30474__$1;
(statearr_30501_30557[(2)] = inst_30448);

(statearr_30501_30557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (6))){
var state_30474__$1 = state_30474;
var statearr_30502_30558 = state_30474__$1;
(statearr_30502_30558[(2)] = false);

(statearr_30502_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (28))){
var inst_30444 = (state_30474[(2)]);
var inst_30445 = calc_state.call(null);
var inst_30402 = inst_30445;
var state_30474__$1 = (function (){var statearr_30503 = state_30474;
(statearr_30503[(15)] = inst_30444);

(statearr_30503[(7)] = inst_30402);

return statearr_30503;
})();
var statearr_30504_30559 = state_30474__$1;
(statearr_30504_30559[(2)] = null);

(statearr_30504_30559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (25))){
var inst_30470 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30505_30560 = state_30474__$1;
(statearr_30505_30560[(2)] = inst_30470);

(statearr_30505_30560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (34))){
var inst_30468 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30506_30561 = state_30474__$1;
(statearr_30506_30561[(2)] = inst_30468);

(statearr_30506_30561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (17))){
var state_30474__$1 = state_30474;
var statearr_30507_30562 = state_30474__$1;
(statearr_30507_30562[(2)] = false);

(statearr_30507_30562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var state_30474__$1 = state_30474;
var statearr_30508_30563 = state_30474__$1;
(statearr_30508_30563[(2)] = false);

(statearr_30508_30563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (12))){
var inst_30472 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30474__$1,inst_30472);
} else {
if((state_val_30475 === (2))){
var inst_30378 = (state_30474[(8)]);
var inst_30383 = inst_30378.cljs$lang$protocol_mask$partition0$;
var inst_30384 = (inst_30383 & (64));
var inst_30385 = inst_30378.cljs$core$ISeq$;
var inst_30386 = (inst_30384) || (inst_30385);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30386)){
var statearr_30509_30564 = state_30474__$1;
(statearr_30509_30564[(1)] = (5));

} else {
var statearr_30510_30565 = state_30474__$1;
(statearr_30510_30565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (23))){
var inst_30433 = (state_30474[(14)]);
var inst_30439 = (inst_30433 == null);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30439)){
var statearr_30511_30566 = state_30474__$1;
(statearr_30511_30566[(1)] = (26));

} else {
var statearr_30512_30567 = state_30474__$1;
(statearr_30512_30567[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (35))){
var inst_30459 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30459)){
var statearr_30513_30568 = state_30474__$1;
(statearr_30513_30568[(1)] = (36));

} else {
var statearr_30514_30569 = state_30474__$1;
(statearr_30514_30569[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (19))){
var inst_30402 = (state_30474[(7)]);
var inst_30421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30402);
var state_30474__$1 = state_30474;
var statearr_30515_30570 = state_30474__$1;
(statearr_30515_30570[(2)] = inst_30421);

(statearr_30515_30570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (11))){
var inst_30402 = (state_30474[(7)]);
var inst_30406 = (inst_30402 == null);
var inst_30407 = cljs.core.not.call(null,inst_30406);
var state_30474__$1 = state_30474;
if(inst_30407){
var statearr_30516_30571 = state_30474__$1;
(statearr_30516_30571[(1)] = (13));

} else {
var statearr_30517_30572 = state_30474__$1;
(statearr_30517_30572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (9))){
var inst_30378 = (state_30474[(8)]);
var state_30474__$1 = state_30474;
var statearr_30518_30573 = state_30474__$1;
(statearr_30518_30573[(2)] = inst_30378);

(statearr_30518_30573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (5))){
var state_30474__$1 = state_30474;
var statearr_30519_30574 = state_30474__$1;
(statearr_30519_30574[(2)] = true);

(statearr_30519_30574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (14))){
var state_30474__$1 = state_30474;
var statearr_30520_30575 = state_30474__$1;
(statearr_30520_30575[(2)] = false);

(statearr_30520_30575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (26))){
var inst_30434 = (state_30474[(9)]);
var inst_30441 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30434);
var state_30474__$1 = state_30474;
var statearr_30521_30576 = state_30474__$1;
(statearr_30521_30576[(2)] = inst_30441);

(statearr_30521_30576[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (16))){
var state_30474__$1 = state_30474;
var statearr_30522_30577 = state_30474__$1;
(statearr_30522_30577[(2)] = true);

(statearr_30522_30577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (38))){
var inst_30464 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30523_30578 = state_30474__$1;
(statearr_30523_30578[(2)] = inst_30464);

(statearr_30523_30578[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (30))){
var inst_30426 = (state_30474[(13)]);
var inst_30434 = (state_30474[(9)]);
var inst_30425 = (state_30474[(11)]);
var inst_30451 = cljs.core.empty_QMARK_.call(null,inst_30425);
var inst_30452 = inst_30426.call(null,inst_30434);
var inst_30453 = cljs.core.not.call(null,inst_30452);
var inst_30454 = (inst_30451) && (inst_30453);
var state_30474__$1 = state_30474;
var statearr_30524_30579 = state_30474__$1;
(statearr_30524_30579[(2)] = inst_30454);

(statearr_30524_30579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var inst_30378 = (state_30474[(8)]);
var inst_30398 = (state_30474[(2)]);
var inst_30399 = cljs.core.get.call(null,inst_30398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30400 = cljs.core.get.call(null,inst_30398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30401 = cljs.core.get.call(null,inst_30398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30402 = inst_30378;
var state_30474__$1 = (function (){var statearr_30525 = state_30474;
(statearr_30525[(16)] = inst_30399);

(statearr_30525[(17)] = inst_30400);

(statearr_30525[(18)] = inst_30401);

(statearr_30525[(7)] = inst_30402);

return statearr_30525;
})();
var statearr_30526_30580 = state_30474__$1;
(statearr_30526_30580[(2)] = null);

(statearr_30526_30580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (18))){
var inst_30416 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30527_30581 = state_30474__$1;
(statearr_30527_30581[(2)] = inst_30416);

(statearr_30527_30581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (37))){
var state_30474__$1 = state_30474;
var statearr_30528_30582 = state_30474__$1;
(statearr_30528_30582[(2)] = null);

(statearr_30528_30582[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30378 = (state_30474[(8)]);
var inst_30395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30378);
var state_30474__$1 = state_30474;
var statearr_30529_30583 = state_30474__$1;
(statearr_30529_30583[(2)] = inst_30395);

(statearr_30529_30583[(1)] = (10));


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
});})(c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28692__auto__,c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28693__auto__ = null;
var cljs$core$async$mix_$_state_machine__28693__auto____0 = (function (){
var statearr_30533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30533[(0)] = cljs$core$async$mix_$_state_machine__28693__auto__);

(statearr_30533[(1)] = (1));

return statearr_30533;
});
var cljs$core$async$mix_$_state_machine__28693__auto____1 = (function (state_30474){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30534){if((e30534 instanceof Object)){
var ex__28696__auto__ = e30534;
var statearr_30535_30584 = state_30474;
(statearr_30535_30584[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30585 = state_30474;
state_30474 = G__30585;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28693__auto__ = function(state_30474){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28693__auto____1.call(this,state_30474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28693__auto____0;
cljs$core$async$mix_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28693__auto____1;
return cljs$core$async$mix_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28806__auto__ = (function (){var statearr_30536 = f__28805__auto__.call(null);
(statearr_30536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30537);

return statearr_30536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30586 = [];
var len__25923__auto___30589 = arguments.length;
var i__25924__auto___30590 = (0);
while(true){
if((i__25924__auto___30590 < len__25923__auto___30589)){
args30586.push((arguments[i__25924__auto___30590]));

var G__30591 = (i__25924__auto___30590 + (1));
i__25924__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var G__30588 = args30586.length;
switch (G__30588) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30586.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30594 = [];
var len__25923__auto___30719 = arguments.length;
var i__25924__auto___30720 = (0);
while(true){
if((i__25924__auto___30720 < len__25923__auto___30719)){
args30594.push((arguments[i__25924__auto___30720]));

var G__30721 = (i__25924__auto___30720 + (1));
i__25924__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var G__30596 = args30594.length;
switch (G__30596) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30594.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__30593_SHARP_){
if(cljs.core.truth_(p1__30593_SHARP_.call(null,topic))){
return p1__30593_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30593_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30597 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30598){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30598 = meta30598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30599,meta30598__$1){
var self__ = this;
var _30599__$1 = this;
return (new cljs.core.async.t_cljs$core$async30597(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30598__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30599){
var self__ = this;
var _30599__$1 = this;
return self__.meta30598;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30598","meta30598",664939474,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30597";

cljs.core.async.t_cljs$core$async30597.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30597");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30597 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30598){
return (new cljs.core.async.t_cljs$core$async30597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30598));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30597(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28804__auto___30723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30723,mults,ensure_mult,p){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30723,mults,ensure_mult,p){
return (function (state_30671){
var state_val_30672 = (state_30671[(1)]);
if((state_val_30672 === (7))){
var inst_30667 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30673_30724 = state_30671__$1;
(statearr_30673_30724[(2)] = inst_30667);

(statearr_30673_30724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (20))){
var state_30671__$1 = state_30671;
var statearr_30674_30725 = state_30671__$1;
(statearr_30674_30725[(2)] = null);

(statearr_30674_30725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (1))){
var state_30671__$1 = state_30671;
var statearr_30675_30726 = state_30671__$1;
(statearr_30675_30726[(2)] = null);

(statearr_30675_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (24))){
var inst_30650 = (state_30671[(7)]);
var inst_30659 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30650);
var state_30671__$1 = state_30671;
var statearr_30676_30727 = state_30671__$1;
(statearr_30676_30727[(2)] = inst_30659);

(statearr_30676_30727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (4))){
var inst_30602 = (state_30671[(8)]);
var inst_30602__$1 = (state_30671[(2)]);
var inst_30603 = (inst_30602__$1 == null);
var state_30671__$1 = (function (){var statearr_30677 = state_30671;
(statearr_30677[(8)] = inst_30602__$1);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30603)){
var statearr_30678_30728 = state_30671__$1;
(statearr_30678_30728[(1)] = (5));

} else {
var statearr_30679_30729 = state_30671__$1;
(statearr_30679_30729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (15))){
var inst_30644 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30680_30730 = state_30671__$1;
(statearr_30680_30730[(2)] = inst_30644);

(statearr_30680_30730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (21))){
var inst_30664 = (state_30671[(2)]);
var state_30671__$1 = (function (){var statearr_30681 = state_30671;
(statearr_30681[(9)] = inst_30664);

return statearr_30681;
})();
var statearr_30682_30731 = state_30671__$1;
(statearr_30682_30731[(2)] = null);

(statearr_30682_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (13))){
var inst_30626 = (state_30671[(10)]);
var inst_30628 = cljs.core.chunked_seq_QMARK_.call(null,inst_30626);
var state_30671__$1 = state_30671;
if(inst_30628){
var statearr_30683_30732 = state_30671__$1;
(statearr_30683_30732[(1)] = (16));

} else {
var statearr_30684_30733 = state_30671__$1;
(statearr_30684_30733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (22))){
var inst_30656 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
if(cljs.core.truth_(inst_30656)){
var statearr_30685_30734 = state_30671__$1;
(statearr_30685_30734[(1)] = (23));

} else {
var statearr_30686_30735 = state_30671__$1;
(statearr_30686_30735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (6))){
var inst_30652 = (state_30671[(11)]);
var inst_30602 = (state_30671[(8)]);
var inst_30650 = (state_30671[(7)]);
var inst_30650__$1 = topic_fn.call(null,inst_30602);
var inst_30651 = cljs.core.deref.call(null,mults);
var inst_30652__$1 = cljs.core.get.call(null,inst_30651,inst_30650__$1);
var state_30671__$1 = (function (){var statearr_30687 = state_30671;
(statearr_30687[(11)] = inst_30652__$1);

(statearr_30687[(7)] = inst_30650__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30652__$1)){
var statearr_30688_30736 = state_30671__$1;
(statearr_30688_30736[(1)] = (19));

} else {
var statearr_30689_30737 = state_30671__$1;
(statearr_30689_30737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (25))){
var inst_30661 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30690_30738 = state_30671__$1;
(statearr_30690_30738[(2)] = inst_30661);

(statearr_30690_30738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (17))){
var inst_30626 = (state_30671[(10)]);
var inst_30635 = cljs.core.first.call(null,inst_30626);
var inst_30636 = cljs.core.async.muxch_STAR_.call(null,inst_30635);
var inst_30637 = cljs.core.async.close_BANG_.call(null,inst_30636);
var inst_30638 = cljs.core.next.call(null,inst_30626);
var inst_30612 = inst_30638;
var inst_30613 = null;
var inst_30614 = (0);
var inst_30615 = (0);
var state_30671__$1 = (function (){var statearr_30691 = state_30671;
(statearr_30691[(12)] = inst_30637);

(statearr_30691[(13)] = inst_30614);

(statearr_30691[(14)] = inst_30612);

(statearr_30691[(15)] = inst_30613);

(statearr_30691[(16)] = inst_30615);

return statearr_30691;
})();
var statearr_30692_30739 = state_30671__$1;
(statearr_30692_30739[(2)] = null);

(statearr_30692_30739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (3))){
var inst_30669 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30671__$1,inst_30669);
} else {
if((state_val_30672 === (12))){
var inst_30646 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30693_30740 = state_30671__$1;
(statearr_30693_30740[(2)] = inst_30646);

(statearr_30693_30740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (2))){
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30671__$1,(4),ch);
} else {
if((state_val_30672 === (23))){
var state_30671__$1 = state_30671;
var statearr_30694_30741 = state_30671__$1;
(statearr_30694_30741[(2)] = null);

(statearr_30694_30741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (19))){
var inst_30652 = (state_30671[(11)]);
var inst_30602 = (state_30671[(8)]);
var inst_30654 = cljs.core.async.muxch_STAR_.call(null,inst_30652);
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30671__$1,(22),inst_30654,inst_30602);
} else {
if((state_val_30672 === (11))){
var inst_30612 = (state_30671[(14)]);
var inst_30626 = (state_30671[(10)]);
var inst_30626__$1 = cljs.core.seq.call(null,inst_30612);
var state_30671__$1 = (function (){var statearr_30695 = state_30671;
(statearr_30695[(10)] = inst_30626__$1);

return statearr_30695;
})();
if(inst_30626__$1){
var statearr_30696_30742 = state_30671__$1;
(statearr_30696_30742[(1)] = (13));

} else {
var statearr_30697_30743 = state_30671__$1;
(statearr_30697_30743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (9))){
var inst_30648 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30698_30744 = state_30671__$1;
(statearr_30698_30744[(2)] = inst_30648);

(statearr_30698_30744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (5))){
var inst_30609 = cljs.core.deref.call(null,mults);
var inst_30610 = cljs.core.vals.call(null,inst_30609);
var inst_30611 = cljs.core.seq.call(null,inst_30610);
var inst_30612 = inst_30611;
var inst_30613 = null;
var inst_30614 = (0);
var inst_30615 = (0);
var state_30671__$1 = (function (){var statearr_30699 = state_30671;
(statearr_30699[(13)] = inst_30614);

(statearr_30699[(14)] = inst_30612);

(statearr_30699[(15)] = inst_30613);

(statearr_30699[(16)] = inst_30615);

return statearr_30699;
})();
var statearr_30700_30745 = state_30671__$1;
(statearr_30700_30745[(2)] = null);

(statearr_30700_30745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (14))){
var state_30671__$1 = state_30671;
var statearr_30704_30746 = state_30671__$1;
(statearr_30704_30746[(2)] = null);

(statearr_30704_30746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (16))){
var inst_30626 = (state_30671[(10)]);
var inst_30630 = cljs.core.chunk_first.call(null,inst_30626);
var inst_30631 = cljs.core.chunk_rest.call(null,inst_30626);
var inst_30632 = cljs.core.count.call(null,inst_30630);
var inst_30612 = inst_30631;
var inst_30613 = inst_30630;
var inst_30614 = inst_30632;
var inst_30615 = (0);
var state_30671__$1 = (function (){var statearr_30705 = state_30671;
(statearr_30705[(13)] = inst_30614);

(statearr_30705[(14)] = inst_30612);

(statearr_30705[(15)] = inst_30613);

(statearr_30705[(16)] = inst_30615);

return statearr_30705;
})();
var statearr_30706_30747 = state_30671__$1;
(statearr_30706_30747[(2)] = null);

(statearr_30706_30747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (10))){
var inst_30614 = (state_30671[(13)]);
var inst_30612 = (state_30671[(14)]);
var inst_30613 = (state_30671[(15)]);
var inst_30615 = (state_30671[(16)]);
var inst_30620 = cljs.core._nth.call(null,inst_30613,inst_30615);
var inst_30621 = cljs.core.async.muxch_STAR_.call(null,inst_30620);
var inst_30622 = cljs.core.async.close_BANG_.call(null,inst_30621);
var inst_30623 = (inst_30615 + (1));
var tmp30701 = inst_30614;
var tmp30702 = inst_30612;
var tmp30703 = inst_30613;
var inst_30612__$1 = tmp30702;
var inst_30613__$1 = tmp30703;
var inst_30614__$1 = tmp30701;
var inst_30615__$1 = inst_30623;
var state_30671__$1 = (function (){var statearr_30707 = state_30671;
(statearr_30707[(13)] = inst_30614__$1);

(statearr_30707[(14)] = inst_30612__$1);

(statearr_30707[(15)] = inst_30613__$1);

(statearr_30707[(16)] = inst_30615__$1);

(statearr_30707[(17)] = inst_30622);

return statearr_30707;
})();
var statearr_30708_30748 = state_30671__$1;
(statearr_30708_30748[(2)] = null);

(statearr_30708_30748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (18))){
var inst_30641 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30709_30749 = state_30671__$1;
(statearr_30709_30749[(2)] = inst_30641);

(statearr_30709_30749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (8))){
var inst_30614 = (state_30671[(13)]);
var inst_30615 = (state_30671[(16)]);
var inst_30617 = (inst_30615 < inst_30614);
var inst_30618 = inst_30617;
var state_30671__$1 = state_30671;
if(cljs.core.truth_(inst_30618)){
var statearr_30710_30750 = state_30671__$1;
(statearr_30710_30750[(1)] = (10));

} else {
var statearr_30711_30751 = state_30671__$1;
(statearr_30711_30751[(1)] = (11));

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
});})(c__28804__auto___30723,mults,ensure_mult,p))
;
return ((function (switch__28692__auto__,c__28804__auto___30723,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30715[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30715[(1)] = (1));

return statearr_30715;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30671){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30716){if((e30716 instanceof Object)){
var ex__28696__auto__ = e30716;
var statearr_30717_30752 = state_30671;
(statearr_30717_30752[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30753 = state_30671;
state_30671 = G__30753;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30723,mults,ensure_mult,p))
})();
var state__28806__auto__ = (function (){var statearr_30718 = f__28805__auto__.call(null);
(statearr_30718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30723);

return statearr_30718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30723,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30754 = [];
var len__25923__auto___30757 = arguments.length;
var i__25924__auto___30758 = (0);
while(true){
if((i__25924__auto___30758 < len__25923__auto___30757)){
args30754.push((arguments[i__25924__auto___30758]));

var G__30759 = (i__25924__auto___30758 + (1));
i__25924__auto___30758 = G__30759;
continue;
} else {
}
break;
}

var G__30756 = args30754.length;
switch (G__30756) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30754.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30761 = [];
var len__25923__auto___30764 = arguments.length;
var i__25924__auto___30765 = (0);
while(true){
if((i__25924__auto___30765 < len__25923__auto___30764)){
args30761.push((arguments[i__25924__auto___30765]));

var G__30766 = (i__25924__auto___30765 + (1));
i__25924__auto___30765 = G__30766;
continue;
} else {
}
break;
}

var G__30763 = args30761.length;
switch (G__30763) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30761.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30768 = [];
var len__25923__auto___30839 = arguments.length;
var i__25924__auto___30840 = (0);
while(true){
if((i__25924__auto___30840 < len__25923__auto___30839)){
args30768.push((arguments[i__25924__auto___30840]));

var G__30841 = (i__25924__auto___30840 + (1));
i__25924__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var G__30770 = args30768.length;
switch (G__30770) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30768.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28804__auto___30843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30809){
var state_val_30810 = (state_30809[(1)]);
if((state_val_30810 === (7))){
var state_30809__$1 = state_30809;
var statearr_30811_30844 = state_30809__$1;
(statearr_30811_30844[(2)] = null);

(statearr_30811_30844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (1))){
var state_30809__$1 = state_30809;
var statearr_30812_30845 = state_30809__$1;
(statearr_30812_30845[(2)] = null);

(statearr_30812_30845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (4))){
var inst_30773 = (state_30809[(7)]);
var inst_30775 = (inst_30773 < cnt);
var state_30809__$1 = state_30809;
if(cljs.core.truth_(inst_30775)){
var statearr_30813_30846 = state_30809__$1;
(statearr_30813_30846[(1)] = (6));

} else {
var statearr_30814_30847 = state_30809__$1;
(statearr_30814_30847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (15))){
var inst_30805 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30815_30848 = state_30809__$1;
(statearr_30815_30848[(2)] = inst_30805);

(statearr_30815_30848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (13))){
var inst_30798 = cljs.core.async.close_BANG_.call(null,out);
var state_30809__$1 = state_30809;
var statearr_30816_30849 = state_30809__$1;
(statearr_30816_30849[(2)] = inst_30798);

(statearr_30816_30849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (6))){
var state_30809__$1 = state_30809;
var statearr_30817_30850 = state_30809__$1;
(statearr_30817_30850[(2)] = null);

(statearr_30817_30850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (3))){
var inst_30807 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30809__$1,inst_30807);
} else {
if((state_val_30810 === (12))){
var inst_30795 = (state_30809[(8)]);
var inst_30795__$1 = (state_30809[(2)]);
var inst_30796 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30795__$1);
var state_30809__$1 = (function (){var statearr_30818 = state_30809;
(statearr_30818[(8)] = inst_30795__$1);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30796)){
var statearr_30819_30851 = state_30809__$1;
(statearr_30819_30851[(1)] = (13));

} else {
var statearr_30820_30852 = state_30809__$1;
(statearr_30820_30852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (2))){
var inst_30772 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30773 = (0);
var state_30809__$1 = (function (){var statearr_30821 = state_30809;
(statearr_30821[(9)] = inst_30772);

(statearr_30821[(7)] = inst_30773);

return statearr_30821;
})();
var statearr_30822_30853 = state_30809__$1;
(statearr_30822_30853[(2)] = null);

(statearr_30822_30853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (11))){
var inst_30773 = (state_30809[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30809,(10),Object,null,(9));
var inst_30782 = chs__$1.call(null,inst_30773);
var inst_30783 = done.call(null,inst_30773);
var inst_30784 = cljs.core.async.take_BANG_.call(null,inst_30782,inst_30783);
var state_30809__$1 = state_30809;
var statearr_30823_30854 = state_30809__$1;
(statearr_30823_30854[(2)] = inst_30784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30809__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (9))){
var inst_30773 = (state_30809[(7)]);
var inst_30786 = (state_30809[(2)]);
var inst_30787 = (inst_30773 + (1));
var inst_30773__$1 = inst_30787;
var state_30809__$1 = (function (){var statearr_30824 = state_30809;
(statearr_30824[(10)] = inst_30786);

(statearr_30824[(7)] = inst_30773__$1);

return statearr_30824;
})();
var statearr_30825_30855 = state_30809__$1;
(statearr_30825_30855[(2)] = null);

(statearr_30825_30855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (5))){
var inst_30793 = (state_30809[(2)]);
var state_30809__$1 = (function (){var statearr_30826 = state_30809;
(statearr_30826[(11)] = inst_30793);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30809__$1,(12),dchan);
} else {
if((state_val_30810 === (14))){
var inst_30795 = (state_30809[(8)]);
var inst_30800 = cljs.core.apply.call(null,f,inst_30795);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30809__$1,(16),out,inst_30800);
} else {
if((state_val_30810 === (16))){
var inst_30802 = (state_30809[(2)]);
var state_30809__$1 = (function (){var statearr_30827 = state_30809;
(statearr_30827[(12)] = inst_30802);

return statearr_30827;
})();
var statearr_30828_30856 = state_30809__$1;
(statearr_30828_30856[(2)] = null);

(statearr_30828_30856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (10))){
var inst_30777 = (state_30809[(2)]);
var inst_30778 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30809__$1 = (function (){var statearr_30829 = state_30809;
(statearr_30829[(13)] = inst_30777);

return statearr_30829;
})();
var statearr_30830_30857 = state_30809__$1;
(statearr_30830_30857[(2)] = inst_30778);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30809__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (8))){
var inst_30791 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30831_30858 = state_30809__$1;
(statearr_30831_30858[(2)] = inst_30791);

(statearr_30831_30858[(1)] = (5));


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
});})(c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28692__auto__,c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30835[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30835[(1)] = (1));

return statearr_30835;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30809){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30836){if((e30836 instanceof Object)){
var ex__28696__auto__ = e30836;
var statearr_30837_30859 = state_30809;
(statearr_30837_30859[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30860 = state_30809;
state_30809 = G__30860;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28806__auto__ = (function (){var statearr_30838 = f__28805__auto__.call(null);
(statearr_30838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30843);

return statearr_30838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30843,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30862 = [];
var len__25923__auto___30920 = arguments.length;
var i__25924__auto___30921 = (0);
while(true){
if((i__25924__auto___30921 < len__25923__auto___30920)){
args30862.push((arguments[i__25924__auto___30921]));

var G__30922 = (i__25924__auto___30921 + (1));
i__25924__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var G__30864 = args30862.length;
switch (G__30864) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30862.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___30924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30924,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30924,out){
return (function (state_30896){
var state_val_30897 = (state_30896[(1)]);
if((state_val_30897 === (7))){
var inst_30876 = (state_30896[(7)]);
var inst_30875 = (state_30896[(8)]);
var inst_30875__$1 = (state_30896[(2)]);
var inst_30876__$1 = cljs.core.nth.call(null,inst_30875__$1,(0),null);
var inst_30877 = cljs.core.nth.call(null,inst_30875__$1,(1),null);
var inst_30878 = (inst_30876__$1 == null);
var state_30896__$1 = (function (){var statearr_30898 = state_30896;
(statearr_30898[(7)] = inst_30876__$1);

(statearr_30898[(9)] = inst_30877);

(statearr_30898[(8)] = inst_30875__$1);

return statearr_30898;
})();
if(cljs.core.truth_(inst_30878)){
var statearr_30899_30925 = state_30896__$1;
(statearr_30899_30925[(1)] = (8));

} else {
var statearr_30900_30926 = state_30896__$1;
(statearr_30900_30926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (1))){
var inst_30865 = cljs.core.vec.call(null,chs);
var inst_30866 = inst_30865;
var state_30896__$1 = (function (){var statearr_30901 = state_30896;
(statearr_30901[(10)] = inst_30866);

return statearr_30901;
})();
var statearr_30902_30927 = state_30896__$1;
(statearr_30902_30927[(2)] = null);

(statearr_30902_30927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (4))){
var inst_30866 = (state_30896[(10)]);
var state_30896__$1 = state_30896;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30896__$1,(7),inst_30866);
} else {
if((state_val_30897 === (6))){
var inst_30892 = (state_30896[(2)]);
var state_30896__$1 = state_30896;
var statearr_30903_30928 = state_30896__$1;
(statearr_30903_30928[(2)] = inst_30892);

(statearr_30903_30928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (3))){
var inst_30894 = (state_30896[(2)]);
var state_30896__$1 = state_30896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30896__$1,inst_30894);
} else {
if((state_val_30897 === (2))){
var inst_30866 = (state_30896[(10)]);
var inst_30868 = cljs.core.count.call(null,inst_30866);
var inst_30869 = (inst_30868 > (0));
var state_30896__$1 = state_30896;
if(cljs.core.truth_(inst_30869)){
var statearr_30905_30929 = state_30896__$1;
(statearr_30905_30929[(1)] = (4));

} else {
var statearr_30906_30930 = state_30896__$1;
(statearr_30906_30930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (11))){
var inst_30866 = (state_30896[(10)]);
var inst_30885 = (state_30896[(2)]);
var tmp30904 = inst_30866;
var inst_30866__$1 = tmp30904;
var state_30896__$1 = (function (){var statearr_30907 = state_30896;
(statearr_30907[(10)] = inst_30866__$1);

(statearr_30907[(11)] = inst_30885);

return statearr_30907;
})();
var statearr_30908_30931 = state_30896__$1;
(statearr_30908_30931[(2)] = null);

(statearr_30908_30931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (9))){
var inst_30876 = (state_30896[(7)]);
var state_30896__$1 = state_30896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30896__$1,(11),out,inst_30876);
} else {
if((state_val_30897 === (5))){
var inst_30890 = cljs.core.async.close_BANG_.call(null,out);
var state_30896__$1 = state_30896;
var statearr_30909_30932 = state_30896__$1;
(statearr_30909_30932[(2)] = inst_30890);

(statearr_30909_30932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (10))){
var inst_30888 = (state_30896[(2)]);
var state_30896__$1 = state_30896;
var statearr_30910_30933 = state_30896__$1;
(statearr_30910_30933[(2)] = inst_30888);

(statearr_30910_30933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (8))){
var inst_30866 = (state_30896[(10)]);
var inst_30876 = (state_30896[(7)]);
var inst_30877 = (state_30896[(9)]);
var inst_30875 = (state_30896[(8)]);
var inst_30880 = (function (){var cs = inst_30866;
var vec__30871 = inst_30875;
var v = inst_30876;
var c = inst_30877;
return ((function (cs,vec__30871,v,c,inst_30866,inst_30876,inst_30877,inst_30875,state_val_30897,c__28804__auto___30924,out){
return (function (p1__30861_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30861_SHARP_);
});
;})(cs,vec__30871,v,c,inst_30866,inst_30876,inst_30877,inst_30875,state_val_30897,c__28804__auto___30924,out))
})();
var inst_30881 = cljs.core.filterv.call(null,inst_30880,inst_30866);
var inst_30866__$1 = inst_30881;
var state_30896__$1 = (function (){var statearr_30911 = state_30896;
(statearr_30911[(10)] = inst_30866__$1);

return statearr_30911;
})();
var statearr_30912_30934 = state_30896__$1;
(statearr_30912_30934[(2)] = null);

(statearr_30912_30934[(1)] = (2));


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
});})(c__28804__auto___30924,out))
;
return ((function (switch__28692__auto__,c__28804__auto___30924,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30916[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30916[(1)] = (1));

return statearr_30916;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30896){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30917){if((e30917 instanceof Object)){
var ex__28696__auto__ = e30917;
var statearr_30918_30935 = state_30896;
(statearr_30918_30935[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30936 = state_30896;
state_30896 = G__30936;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30924,out))
})();
var state__28806__auto__ = (function (){var statearr_30919 = f__28805__auto__.call(null);
(statearr_30919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30924);

return statearr_30919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30924,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30937 = [];
var len__25923__auto___30986 = arguments.length;
var i__25924__auto___30987 = (0);
while(true){
if((i__25924__auto___30987 < len__25923__auto___30986)){
args30937.push((arguments[i__25924__auto___30987]));

var G__30988 = (i__25924__auto___30987 + (1));
i__25924__auto___30987 = G__30988;
continue;
} else {
}
break;
}

var G__30939 = args30937.length;
switch (G__30939) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30937.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___30990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___30990,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___30990,out){
return (function (state_30963){
var state_val_30964 = (state_30963[(1)]);
if((state_val_30964 === (7))){
var inst_30945 = (state_30963[(7)]);
var inst_30945__$1 = (state_30963[(2)]);
var inst_30946 = (inst_30945__$1 == null);
var inst_30947 = cljs.core.not.call(null,inst_30946);
var state_30963__$1 = (function (){var statearr_30965 = state_30963;
(statearr_30965[(7)] = inst_30945__$1);

return statearr_30965;
})();
if(inst_30947){
var statearr_30966_30991 = state_30963__$1;
(statearr_30966_30991[(1)] = (8));

} else {
var statearr_30967_30992 = state_30963__$1;
(statearr_30967_30992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (1))){
var inst_30940 = (0);
var state_30963__$1 = (function (){var statearr_30968 = state_30963;
(statearr_30968[(8)] = inst_30940);

return statearr_30968;
})();
var statearr_30969_30993 = state_30963__$1;
(statearr_30969_30993[(2)] = null);

(statearr_30969_30993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (4))){
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30963__$1,(7),ch);
} else {
if((state_val_30964 === (6))){
var inst_30958 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_30970_30994 = state_30963__$1;
(statearr_30970_30994[(2)] = inst_30958);

(statearr_30970_30994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (3))){
var inst_30960 = (state_30963[(2)]);
var inst_30961 = cljs.core.async.close_BANG_.call(null,out);
var state_30963__$1 = (function (){var statearr_30971 = state_30963;
(statearr_30971[(9)] = inst_30960);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30963__$1,inst_30961);
} else {
if((state_val_30964 === (2))){
var inst_30940 = (state_30963[(8)]);
var inst_30942 = (inst_30940 < n);
var state_30963__$1 = state_30963;
if(cljs.core.truth_(inst_30942)){
var statearr_30972_30995 = state_30963__$1;
(statearr_30972_30995[(1)] = (4));

} else {
var statearr_30973_30996 = state_30963__$1;
(statearr_30973_30996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (11))){
var inst_30940 = (state_30963[(8)]);
var inst_30950 = (state_30963[(2)]);
var inst_30951 = (inst_30940 + (1));
var inst_30940__$1 = inst_30951;
var state_30963__$1 = (function (){var statearr_30974 = state_30963;
(statearr_30974[(10)] = inst_30950);

(statearr_30974[(8)] = inst_30940__$1);

return statearr_30974;
})();
var statearr_30975_30997 = state_30963__$1;
(statearr_30975_30997[(2)] = null);

(statearr_30975_30997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (9))){
var state_30963__$1 = state_30963;
var statearr_30976_30998 = state_30963__$1;
(statearr_30976_30998[(2)] = null);

(statearr_30976_30998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (5))){
var state_30963__$1 = state_30963;
var statearr_30977_30999 = state_30963__$1;
(statearr_30977_30999[(2)] = null);

(statearr_30977_30999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (10))){
var inst_30955 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_30978_31000 = state_30963__$1;
(statearr_30978_31000[(2)] = inst_30955);

(statearr_30978_31000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (8))){
var inst_30945 = (state_30963[(7)]);
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30963__$1,(11),out,inst_30945);
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
});})(c__28804__auto___30990,out))
;
return ((function (switch__28692__auto__,c__28804__auto___30990,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30982[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30982[(1)] = (1));

return statearr_30982;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30963){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_30963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30983){if((e30983 instanceof Object)){
var ex__28696__auto__ = e30983;
var statearr_30984_31001 = state_30963;
(statearr_30984_31001[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31002 = state_30963;
state_30963 = G__31002;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___30990,out))
})();
var state__28806__auto__ = (function (){var statearr_30985 = f__28805__auto__.call(null);
(statearr_30985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___30990);

return statearr_30985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___30990,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31010 = (function (map_LT_,f,ch,meta31011){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31011 = meta31011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31012,meta31011__$1){
var self__ = this;
var _31012__$1 = this;
return (new cljs.core.async.t_cljs$core$async31010(self__.map_LT_,self__.f,self__.ch,meta31011__$1));
});

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31012){
var self__ = this;
var _31012__$1 = this;
return self__.meta31011;
});

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31013 = (function (map_LT_,f,ch,meta31011,_,fn1,meta31014){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31011 = meta31011;
this._ = _;
this.fn1 = fn1;
this.meta31014 = meta31014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31015,meta31014__$1){
var self__ = this;
var _31015__$1 = this;
return (new cljs.core.async.t_cljs$core$async31013(self__.map_LT_,self__.f,self__.ch,self__.meta31011,self__._,self__.fn1,meta31014__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31015){
var self__ = this;
var _31015__$1 = this;
return self__.meta31014;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31003_SHARP_){
return f1.call(null,(((p1__31003_SHARP_ == null))?null:self__.f.call(null,p1__31003_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31011","meta31011",2132920617,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31010","cljs.core.async/t_cljs$core$async31010",-1341117180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31014","meta31014",-2103599592,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31013";

cljs.core.async.t_cljs$core$async31013.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31013");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31013 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31013(map_LT___$1,f__$1,ch__$1,meta31011__$1,___$2,fn1__$1,meta31014){
return (new cljs.core.async.t_cljs$core$async31013(map_LT___$1,f__$1,ch__$1,meta31011__$1,___$2,fn1__$1,meta31014));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31013(self__.map_LT_,self__.f,self__.ch,self__.meta31011,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31011","meta31011",2132920617,null)], null);
});

cljs.core.async.t_cljs$core$async31010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31010";

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31010");
});

cljs.core.async.__GT_t_cljs$core$async31010 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31010(map_LT___$1,f__$1,ch__$1,meta31011){
return (new cljs.core.async.t_cljs$core$async31010(map_LT___$1,f__$1,ch__$1,meta31011));
});

}

return (new cljs.core.async.t_cljs$core$async31010(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31019 = (function (map_GT_,f,ch,meta31020){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31020 = meta31020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31021,meta31020__$1){
var self__ = this;
var _31021__$1 = this;
return (new cljs.core.async.t_cljs$core$async31019(self__.map_GT_,self__.f,self__.ch,meta31020__$1));
});

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31021){
var self__ = this;
var _31021__$1 = this;
return self__.meta31020;
});

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31020","meta31020",-35562413,null)], null);
});

cljs.core.async.t_cljs$core$async31019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31019";

cljs.core.async.t_cljs$core$async31019.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31019");
});

cljs.core.async.__GT_t_cljs$core$async31019 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31019(map_GT___$1,f__$1,ch__$1,meta31020){
return (new cljs.core.async.t_cljs$core$async31019(map_GT___$1,f__$1,ch__$1,meta31020));
});

}

return (new cljs.core.async.t_cljs$core$async31019(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31025 = (function (filter_GT_,p,ch,meta31026){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31026 = meta31026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31027,meta31026__$1){
var self__ = this;
var _31027__$1 = this;
return (new cljs.core.async.t_cljs$core$async31025(self__.filter_GT_,self__.p,self__.ch,meta31026__$1));
});

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31027){
var self__ = this;
var _31027__$1 = this;
return self__.meta31026;
});

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31026","meta31026",1126946372,null)], null);
});

cljs.core.async.t_cljs$core$async31025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31025";

cljs.core.async.t_cljs$core$async31025.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31025");
});

cljs.core.async.__GT_t_cljs$core$async31025 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31025(filter_GT___$1,p__$1,ch__$1,meta31026){
return (new cljs.core.async.t_cljs$core$async31025(filter_GT___$1,p__$1,ch__$1,meta31026));
});

}

return (new cljs.core.async.t_cljs$core$async31025(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31028 = [];
var len__25923__auto___31072 = arguments.length;
var i__25924__auto___31073 = (0);
while(true){
if((i__25924__auto___31073 < len__25923__auto___31072)){
args31028.push((arguments[i__25924__auto___31073]));

var G__31074 = (i__25924__auto___31073 + (1));
i__25924__auto___31073 = G__31074;
continue;
} else {
}
break;
}

var G__31030 = args31028.length;
switch (G__31030) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31028.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___31076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___31076,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___31076,out){
return (function (state_31051){
var state_val_31052 = (state_31051[(1)]);
if((state_val_31052 === (7))){
var inst_31047 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31053_31077 = state_31051__$1;
(statearr_31053_31077[(2)] = inst_31047);

(statearr_31053_31077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (1))){
var state_31051__$1 = state_31051;
var statearr_31054_31078 = state_31051__$1;
(statearr_31054_31078[(2)] = null);

(statearr_31054_31078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (4))){
var inst_31033 = (state_31051[(7)]);
var inst_31033__$1 = (state_31051[(2)]);
var inst_31034 = (inst_31033__$1 == null);
var state_31051__$1 = (function (){var statearr_31055 = state_31051;
(statearr_31055[(7)] = inst_31033__$1);

return statearr_31055;
})();
if(cljs.core.truth_(inst_31034)){
var statearr_31056_31079 = state_31051__$1;
(statearr_31056_31079[(1)] = (5));

} else {
var statearr_31057_31080 = state_31051__$1;
(statearr_31057_31080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (6))){
var inst_31033 = (state_31051[(7)]);
var inst_31038 = p.call(null,inst_31033);
var state_31051__$1 = state_31051;
if(cljs.core.truth_(inst_31038)){
var statearr_31058_31081 = state_31051__$1;
(statearr_31058_31081[(1)] = (8));

} else {
var statearr_31059_31082 = state_31051__$1;
(statearr_31059_31082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (3))){
var inst_31049 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31051__$1,inst_31049);
} else {
if((state_val_31052 === (2))){
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31051__$1,(4),ch);
} else {
if((state_val_31052 === (11))){
var inst_31041 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31060_31083 = state_31051__$1;
(statearr_31060_31083[(2)] = inst_31041);

(statearr_31060_31083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (9))){
var state_31051__$1 = state_31051;
var statearr_31061_31084 = state_31051__$1;
(statearr_31061_31084[(2)] = null);

(statearr_31061_31084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (5))){
var inst_31036 = cljs.core.async.close_BANG_.call(null,out);
var state_31051__$1 = state_31051;
var statearr_31062_31085 = state_31051__$1;
(statearr_31062_31085[(2)] = inst_31036);

(statearr_31062_31085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (10))){
var inst_31044 = (state_31051[(2)]);
var state_31051__$1 = (function (){var statearr_31063 = state_31051;
(statearr_31063[(8)] = inst_31044);

return statearr_31063;
})();
var statearr_31064_31086 = state_31051__$1;
(statearr_31064_31086[(2)] = null);

(statearr_31064_31086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (8))){
var inst_31033 = (state_31051[(7)]);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31051__$1,(11),out,inst_31033);
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
});})(c__28804__auto___31076,out))
;
return ((function (switch__28692__auto__,c__28804__auto___31076,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_31068 = [null,null,null,null,null,null,null,null,null];
(statearr_31068[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_31068[(1)] = (1));

return statearr_31068;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_31051){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_31051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31069){if((e31069 instanceof Object)){
var ex__28696__auto__ = e31069;
var statearr_31070_31087 = state_31051;
(statearr_31070_31087[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31088 = state_31051;
state_31051 = G__31088;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_31051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_31051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___31076,out))
})();
var state__28806__auto__ = (function (){var statearr_31071 = f__28805__auto__.call(null);
(statearr_31071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___31076);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___31076,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31089 = [];
var len__25923__auto___31092 = arguments.length;
var i__25924__auto___31093 = (0);
while(true){
if((i__25924__auto___31093 < len__25923__auto___31092)){
args31089.push((arguments[i__25924__auto___31093]));

var G__31094 = (i__25924__auto___31093 + (1));
i__25924__auto___31093 = G__31094;
continue;
} else {
}
break;
}

var G__31091 = args31089.length;
switch (G__31091) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31089.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto__){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto__){
return (function (state_31261){
var state_val_31262 = (state_31261[(1)]);
if((state_val_31262 === (7))){
var inst_31257 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31263_31304 = state_31261__$1;
(statearr_31263_31304[(2)] = inst_31257);

(statearr_31263_31304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (20))){
var inst_31227 = (state_31261[(7)]);
var inst_31238 = (state_31261[(2)]);
var inst_31239 = cljs.core.next.call(null,inst_31227);
var inst_31213 = inst_31239;
var inst_31214 = null;
var inst_31215 = (0);
var inst_31216 = (0);
var state_31261__$1 = (function (){var statearr_31264 = state_31261;
(statearr_31264[(8)] = inst_31213);

(statearr_31264[(9)] = inst_31215);

(statearr_31264[(10)] = inst_31214);

(statearr_31264[(11)] = inst_31216);

(statearr_31264[(12)] = inst_31238);

return statearr_31264;
})();
var statearr_31265_31305 = state_31261__$1;
(statearr_31265_31305[(2)] = null);

(statearr_31265_31305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (1))){
var state_31261__$1 = state_31261;
var statearr_31266_31306 = state_31261__$1;
(statearr_31266_31306[(2)] = null);

(statearr_31266_31306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (4))){
var inst_31202 = (state_31261[(13)]);
var inst_31202__$1 = (state_31261[(2)]);
var inst_31203 = (inst_31202__$1 == null);
var state_31261__$1 = (function (){var statearr_31267 = state_31261;
(statearr_31267[(13)] = inst_31202__$1);

return statearr_31267;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31268_31307 = state_31261__$1;
(statearr_31268_31307[(1)] = (5));

} else {
var statearr_31269_31308 = state_31261__$1;
(statearr_31269_31308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (15))){
var state_31261__$1 = state_31261;
var statearr_31273_31309 = state_31261__$1;
(statearr_31273_31309[(2)] = null);

(statearr_31273_31309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (21))){
var state_31261__$1 = state_31261;
var statearr_31274_31310 = state_31261__$1;
(statearr_31274_31310[(2)] = null);

(statearr_31274_31310[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (13))){
var inst_31213 = (state_31261[(8)]);
var inst_31215 = (state_31261[(9)]);
var inst_31214 = (state_31261[(10)]);
var inst_31216 = (state_31261[(11)]);
var inst_31223 = (state_31261[(2)]);
var inst_31224 = (inst_31216 + (1));
var tmp31270 = inst_31213;
var tmp31271 = inst_31215;
var tmp31272 = inst_31214;
var inst_31213__$1 = tmp31270;
var inst_31214__$1 = tmp31272;
var inst_31215__$1 = tmp31271;
var inst_31216__$1 = inst_31224;
var state_31261__$1 = (function (){var statearr_31275 = state_31261;
(statearr_31275[(8)] = inst_31213__$1);

(statearr_31275[(9)] = inst_31215__$1);

(statearr_31275[(14)] = inst_31223);

(statearr_31275[(10)] = inst_31214__$1);

(statearr_31275[(11)] = inst_31216__$1);

return statearr_31275;
})();
var statearr_31276_31311 = state_31261__$1;
(statearr_31276_31311[(2)] = null);

(statearr_31276_31311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (22))){
var state_31261__$1 = state_31261;
var statearr_31277_31312 = state_31261__$1;
(statearr_31277_31312[(2)] = null);

(statearr_31277_31312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (6))){
var inst_31202 = (state_31261[(13)]);
var inst_31211 = f.call(null,inst_31202);
var inst_31212 = cljs.core.seq.call(null,inst_31211);
var inst_31213 = inst_31212;
var inst_31214 = null;
var inst_31215 = (0);
var inst_31216 = (0);
var state_31261__$1 = (function (){var statearr_31278 = state_31261;
(statearr_31278[(8)] = inst_31213);

(statearr_31278[(9)] = inst_31215);

(statearr_31278[(10)] = inst_31214);

(statearr_31278[(11)] = inst_31216);

return statearr_31278;
})();
var statearr_31279_31313 = state_31261__$1;
(statearr_31279_31313[(2)] = null);

(statearr_31279_31313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (17))){
var inst_31227 = (state_31261[(7)]);
var inst_31231 = cljs.core.chunk_first.call(null,inst_31227);
var inst_31232 = cljs.core.chunk_rest.call(null,inst_31227);
var inst_31233 = cljs.core.count.call(null,inst_31231);
var inst_31213 = inst_31232;
var inst_31214 = inst_31231;
var inst_31215 = inst_31233;
var inst_31216 = (0);
var state_31261__$1 = (function (){var statearr_31280 = state_31261;
(statearr_31280[(8)] = inst_31213);

(statearr_31280[(9)] = inst_31215);

(statearr_31280[(10)] = inst_31214);

(statearr_31280[(11)] = inst_31216);

return statearr_31280;
})();
var statearr_31281_31314 = state_31261__$1;
(statearr_31281_31314[(2)] = null);

(statearr_31281_31314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (3))){
var inst_31259 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31261__$1,inst_31259);
} else {
if((state_val_31262 === (12))){
var inst_31247 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31282_31315 = state_31261__$1;
(statearr_31282_31315[(2)] = inst_31247);

(statearr_31282_31315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (2))){
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31261__$1,(4),in$);
} else {
if((state_val_31262 === (23))){
var inst_31255 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31283_31316 = state_31261__$1;
(statearr_31283_31316[(2)] = inst_31255);

(statearr_31283_31316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (19))){
var inst_31242 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31284_31317 = state_31261__$1;
(statearr_31284_31317[(2)] = inst_31242);

(statearr_31284_31317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (11))){
var inst_31213 = (state_31261[(8)]);
var inst_31227 = (state_31261[(7)]);
var inst_31227__$1 = cljs.core.seq.call(null,inst_31213);
var state_31261__$1 = (function (){var statearr_31285 = state_31261;
(statearr_31285[(7)] = inst_31227__$1);

return statearr_31285;
})();
if(inst_31227__$1){
var statearr_31286_31318 = state_31261__$1;
(statearr_31286_31318[(1)] = (14));

} else {
var statearr_31287_31319 = state_31261__$1;
(statearr_31287_31319[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (9))){
var inst_31249 = (state_31261[(2)]);
var inst_31250 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31261__$1 = (function (){var statearr_31288 = state_31261;
(statearr_31288[(15)] = inst_31249);

return statearr_31288;
})();
if(cljs.core.truth_(inst_31250)){
var statearr_31289_31320 = state_31261__$1;
(statearr_31289_31320[(1)] = (21));

} else {
var statearr_31290_31321 = state_31261__$1;
(statearr_31290_31321[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (5))){
var inst_31205 = cljs.core.async.close_BANG_.call(null,out);
var state_31261__$1 = state_31261;
var statearr_31291_31322 = state_31261__$1;
(statearr_31291_31322[(2)] = inst_31205);

(statearr_31291_31322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (14))){
var inst_31227 = (state_31261[(7)]);
var inst_31229 = cljs.core.chunked_seq_QMARK_.call(null,inst_31227);
var state_31261__$1 = state_31261;
if(inst_31229){
var statearr_31292_31323 = state_31261__$1;
(statearr_31292_31323[(1)] = (17));

} else {
var statearr_31293_31324 = state_31261__$1;
(statearr_31293_31324[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (16))){
var inst_31245 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31294_31325 = state_31261__$1;
(statearr_31294_31325[(2)] = inst_31245);

(statearr_31294_31325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (10))){
var inst_31214 = (state_31261[(10)]);
var inst_31216 = (state_31261[(11)]);
var inst_31221 = cljs.core._nth.call(null,inst_31214,inst_31216);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31261__$1,(13),out,inst_31221);
} else {
if((state_val_31262 === (18))){
var inst_31227 = (state_31261[(7)]);
var inst_31236 = cljs.core.first.call(null,inst_31227);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31261__$1,(20),out,inst_31236);
} else {
if((state_val_31262 === (8))){
var inst_31215 = (state_31261[(9)]);
var inst_31216 = (state_31261[(11)]);
var inst_31218 = (inst_31216 < inst_31215);
var inst_31219 = inst_31218;
var state_31261__$1 = state_31261;
if(cljs.core.truth_(inst_31219)){
var statearr_31295_31326 = state_31261__$1;
(statearr_31295_31326[(1)] = (10));

} else {
var statearr_31296_31327 = state_31261__$1;
(statearr_31296_31327[(1)] = (11));

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
});})(c__28804__auto__))
;
return ((function (switch__28692__auto__,c__28804__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_31300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__);

(statearr_31300[(1)] = (1));

return statearr_31300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1 = (function (state_31261){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_31261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31301){if((e31301 instanceof Object)){
var ex__28696__auto__ = e31301;
var statearr_31302_31328 = state_31261;
(statearr_31302_31328[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31329 = state_31261;
state_31261 = G__31329;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__ = function(state_31261){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1.call(this,state_31261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto__))
})();
var state__28806__auto__ = (function (){var statearr_31303 = f__28805__auto__.call(null);
(statearr_31303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto__);

return statearr_31303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto__))
);

return c__28804__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31330 = [];
var len__25923__auto___31333 = arguments.length;
var i__25924__auto___31334 = (0);
while(true){
if((i__25924__auto___31334 < len__25923__auto___31333)){
args31330.push((arguments[i__25924__auto___31334]));

var G__31335 = (i__25924__auto___31334 + (1));
i__25924__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var G__31332 = args31330.length;
switch (G__31332) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31330.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31337 = [];
var len__25923__auto___31340 = arguments.length;
var i__25924__auto___31341 = (0);
while(true){
if((i__25924__auto___31341 < len__25923__auto___31340)){
args31337.push((arguments[i__25924__auto___31341]));

var G__31342 = (i__25924__auto___31341 + (1));
i__25924__auto___31341 = G__31342;
continue;
} else {
}
break;
}

var G__31339 = args31337.length;
switch (G__31339) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31337.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31344 = [];
var len__25923__auto___31395 = arguments.length;
var i__25924__auto___31396 = (0);
while(true){
if((i__25924__auto___31396 < len__25923__auto___31395)){
args31344.push((arguments[i__25924__auto___31396]));

var G__31397 = (i__25924__auto___31396 + (1));
i__25924__auto___31396 = G__31397;
continue;
} else {
}
break;
}

var G__31346 = args31344.length;
switch (G__31346) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31344.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___31399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___31399,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___31399,out){
return (function (state_31370){
var state_val_31371 = (state_31370[(1)]);
if((state_val_31371 === (7))){
var inst_31365 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31372_31400 = state_31370__$1;
(statearr_31372_31400[(2)] = inst_31365);

(statearr_31372_31400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (1))){
var inst_31347 = null;
var state_31370__$1 = (function (){var statearr_31373 = state_31370;
(statearr_31373[(7)] = inst_31347);

return statearr_31373;
})();
var statearr_31374_31401 = state_31370__$1;
(statearr_31374_31401[(2)] = null);

(statearr_31374_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (4))){
var inst_31350 = (state_31370[(8)]);
var inst_31350__$1 = (state_31370[(2)]);
var inst_31351 = (inst_31350__$1 == null);
var inst_31352 = cljs.core.not.call(null,inst_31351);
var state_31370__$1 = (function (){var statearr_31375 = state_31370;
(statearr_31375[(8)] = inst_31350__$1);

return statearr_31375;
})();
if(inst_31352){
var statearr_31376_31402 = state_31370__$1;
(statearr_31376_31402[(1)] = (5));

} else {
var statearr_31377_31403 = state_31370__$1;
(statearr_31377_31403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (6))){
var state_31370__$1 = state_31370;
var statearr_31378_31404 = state_31370__$1;
(statearr_31378_31404[(2)] = null);

(statearr_31378_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (3))){
var inst_31367 = (state_31370[(2)]);
var inst_31368 = cljs.core.async.close_BANG_.call(null,out);
var state_31370__$1 = (function (){var statearr_31379 = state_31370;
(statearr_31379[(9)] = inst_31367);

return statearr_31379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31370__$1,inst_31368);
} else {
if((state_val_31371 === (2))){
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31370__$1,(4),ch);
} else {
if((state_val_31371 === (11))){
var inst_31350 = (state_31370[(8)]);
var inst_31359 = (state_31370[(2)]);
var inst_31347 = inst_31350;
var state_31370__$1 = (function (){var statearr_31380 = state_31370;
(statearr_31380[(7)] = inst_31347);

(statearr_31380[(10)] = inst_31359);

return statearr_31380;
})();
var statearr_31381_31405 = state_31370__$1;
(statearr_31381_31405[(2)] = null);

(statearr_31381_31405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (9))){
var inst_31350 = (state_31370[(8)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31370__$1,(11),out,inst_31350);
} else {
if((state_val_31371 === (5))){
var inst_31347 = (state_31370[(7)]);
var inst_31350 = (state_31370[(8)]);
var inst_31354 = cljs.core._EQ_.call(null,inst_31350,inst_31347);
var state_31370__$1 = state_31370;
if(inst_31354){
var statearr_31383_31406 = state_31370__$1;
(statearr_31383_31406[(1)] = (8));

} else {
var statearr_31384_31407 = state_31370__$1;
(statearr_31384_31407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (10))){
var inst_31362 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31385_31408 = state_31370__$1;
(statearr_31385_31408[(2)] = inst_31362);

(statearr_31385_31408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (8))){
var inst_31347 = (state_31370[(7)]);
var tmp31382 = inst_31347;
var inst_31347__$1 = tmp31382;
var state_31370__$1 = (function (){var statearr_31386 = state_31370;
(statearr_31386[(7)] = inst_31347__$1);

return statearr_31386;
})();
var statearr_31387_31409 = state_31370__$1;
(statearr_31387_31409[(2)] = null);

(statearr_31387_31409[(1)] = (2));


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
});})(c__28804__auto___31399,out))
;
return ((function (switch__28692__auto__,c__28804__auto___31399,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_31391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31391[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_31391[(1)] = (1));

return statearr_31391;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_31370){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_31370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31392){if((e31392 instanceof Object)){
var ex__28696__auto__ = e31392;
var statearr_31393_31410 = state_31370;
(statearr_31393_31410[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31411 = state_31370;
state_31370 = G__31411;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_31370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_31370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___31399,out))
})();
var state__28806__auto__ = (function (){var statearr_31394 = f__28805__auto__.call(null);
(statearr_31394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___31399);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___31399,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31412 = [];
var len__25923__auto___31482 = arguments.length;
var i__25924__auto___31483 = (0);
while(true){
if((i__25924__auto___31483 < len__25923__auto___31482)){
args31412.push((arguments[i__25924__auto___31483]));

var G__31484 = (i__25924__auto___31483 + (1));
i__25924__auto___31483 = G__31484;
continue;
} else {
}
break;
}

var G__31414 = args31412.length;
switch (G__31414) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31412.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___31486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___31486,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___31486,out){
return (function (state_31452){
var state_val_31453 = (state_31452[(1)]);
if((state_val_31453 === (7))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31454_31487 = state_31452__$1;
(statearr_31454_31487[(2)] = inst_31448);

(statearr_31454_31487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (1))){
var inst_31415 = (new Array(n));
var inst_31416 = inst_31415;
var inst_31417 = (0);
var state_31452__$1 = (function (){var statearr_31455 = state_31452;
(statearr_31455[(7)] = inst_31417);

(statearr_31455[(8)] = inst_31416);

return statearr_31455;
})();
var statearr_31456_31488 = state_31452__$1;
(statearr_31456_31488[(2)] = null);

(statearr_31456_31488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (4))){
var inst_31420 = (state_31452[(9)]);
var inst_31420__$1 = (state_31452[(2)]);
var inst_31421 = (inst_31420__$1 == null);
var inst_31422 = cljs.core.not.call(null,inst_31421);
var state_31452__$1 = (function (){var statearr_31457 = state_31452;
(statearr_31457[(9)] = inst_31420__$1);

return statearr_31457;
})();
if(inst_31422){
var statearr_31458_31489 = state_31452__$1;
(statearr_31458_31489[(1)] = (5));

} else {
var statearr_31459_31490 = state_31452__$1;
(statearr_31459_31490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (15))){
var inst_31442 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31460_31491 = state_31452__$1;
(statearr_31460_31491[(2)] = inst_31442);

(statearr_31460_31491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (13))){
var state_31452__$1 = state_31452;
var statearr_31461_31492 = state_31452__$1;
(statearr_31461_31492[(2)] = null);

(statearr_31461_31492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (6))){
var inst_31417 = (state_31452[(7)]);
var inst_31438 = (inst_31417 > (0));
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31438)){
var statearr_31462_31493 = state_31452__$1;
(statearr_31462_31493[(1)] = (12));

} else {
var statearr_31463_31494 = state_31452__$1;
(statearr_31463_31494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (3))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31452__$1,inst_31450);
} else {
if((state_val_31453 === (12))){
var inst_31416 = (state_31452[(8)]);
var inst_31440 = cljs.core.vec.call(null,inst_31416);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31452__$1,(15),out,inst_31440);
} else {
if((state_val_31453 === (2))){
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31452__$1,(4),ch);
} else {
if((state_val_31453 === (11))){
var inst_31432 = (state_31452[(2)]);
var inst_31433 = (new Array(n));
var inst_31416 = inst_31433;
var inst_31417 = (0);
var state_31452__$1 = (function (){var statearr_31464 = state_31452;
(statearr_31464[(7)] = inst_31417);

(statearr_31464[(8)] = inst_31416);

(statearr_31464[(10)] = inst_31432);

return statearr_31464;
})();
var statearr_31465_31495 = state_31452__$1;
(statearr_31465_31495[(2)] = null);

(statearr_31465_31495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (9))){
var inst_31416 = (state_31452[(8)]);
var inst_31430 = cljs.core.vec.call(null,inst_31416);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31452__$1,(11),out,inst_31430);
} else {
if((state_val_31453 === (5))){
var inst_31417 = (state_31452[(7)]);
var inst_31420 = (state_31452[(9)]);
var inst_31425 = (state_31452[(11)]);
var inst_31416 = (state_31452[(8)]);
var inst_31424 = (inst_31416[inst_31417] = inst_31420);
var inst_31425__$1 = (inst_31417 + (1));
var inst_31426 = (inst_31425__$1 < n);
var state_31452__$1 = (function (){var statearr_31466 = state_31452;
(statearr_31466[(12)] = inst_31424);

(statearr_31466[(11)] = inst_31425__$1);

return statearr_31466;
})();
if(cljs.core.truth_(inst_31426)){
var statearr_31467_31496 = state_31452__$1;
(statearr_31467_31496[(1)] = (8));

} else {
var statearr_31468_31497 = state_31452__$1;
(statearr_31468_31497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (14))){
var inst_31445 = (state_31452[(2)]);
var inst_31446 = cljs.core.async.close_BANG_.call(null,out);
var state_31452__$1 = (function (){var statearr_31470 = state_31452;
(statearr_31470[(13)] = inst_31445);

return statearr_31470;
})();
var statearr_31471_31498 = state_31452__$1;
(statearr_31471_31498[(2)] = inst_31446);

(statearr_31471_31498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (10))){
var inst_31436 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31472_31499 = state_31452__$1;
(statearr_31472_31499[(2)] = inst_31436);

(statearr_31472_31499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (8))){
var inst_31425 = (state_31452[(11)]);
var inst_31416 = (state_31452[(8)]);
var tmp31469 = inst_31416;
var inst_31416__$1 = tmp31469;
var inst_31417 = inst_31425;
var state_31452__$1 = (function (){var statearr_31473 = state_31452;
(statearr_31473[(7)] = inst_31417);

(statearr_31473[(8)] = inst_31416__$1);

return statearr_31473;
})();
var statearr_31474_31500 = state_31452__$1;
(statearr_31474_31500[(2)] = null);

(statearr_31474_31500[(1)] = (2));


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
});})(c__28804__auto___31486,out))
;
return ((function (switch__28692__auto__,c__28804__auto___31486,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_31452){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_31452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31479){if((e31479 instanceof Object)){
var ex__28696__auto__ = e31479;
var statearr_31480_31501 = state_31452;
(statearr_31480_31501[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31502 = state_31452;
state_31452 = G__31502;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___31486,out))
})();
var state__28806__auto__ = (function (){var statearr_31481 = f__28805__auto__.call(null);
(statearr_31481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___31486);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___31486,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31503 = [];
var len__25923__auto___31577 = arguments.length;
var i__25924__auto___31578 = (0);
while(true){
if((i__25924__auto___31578 < len__25923__auto___31577)){
args31503.push((arguments[i__25924__auto___31578]));

var G__31579 = (i__25924__auto___31578 + (1));
i__25924__auto___31578 = G__31579;
continue;
} else {
}
break;
}

var G__31505 = args31503.length;
switch (G__31505) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31503.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28804__auto___31581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28804__auto___31581,out){
return (function (){
var f__28805__auto__ = (function (){var switch__28692__auto__ = ((function (c__28804__auto___31581,out){
return (function (state_31547){
var state_val_31548 = (state_31547[(1)]);
if((state_val_31548 === (7))){
var inst_31543 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31549_31582 = state_31547__$1;
(statearr_31549_31582[(2)] = inst_31543);

(statearr_31549_31582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (1))){
var inst_31506 = [];
var inst_31507 = inst_31506;
var inst_31508 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31547__$1 = (function (){var statearr_31550 = state_31547;
(statearr_31550[(7)] = inst_31508);

(statearr_31550[(8)] = inst_31507);

return statearr_31550;
})();
var statearr_31551_31583 = state_31547__$1;
(statearr_31551_31583[(2)] = null);

(statearr_31551_31583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (4))){
var inst_31511 = (state_31547[(9)]);
var inst_31511__$1 = (state_31547[(2)]);
var inst_31512 = (inst_31511__$1 == null);
var inst_31513 = cljs.core.not.call(null,inst_31512);
var state_31547__$1 = (function (){var statearr_31552 = state_31547;
(statearr_31552[(9)] = inst_31511__$1);

return statearr_31552;
})();
if(inst_31513){
var statearr_31553_31584 = state_31547__$1;
(statearr_31553_31584[(1)] = (5));

} else {
var statearr_31554_31585 = state_31547__$1;
(statearr_31554_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (15))){
var inst_31537 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31555_31586 = state_31547__$1;
(statearr_31555_31586[(2)] = inst_31537);

(statearr_31555_31586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (13))){
var state_31547__$1 = state_31547;
var statearr_31556_31587 = state_31547__$1;
(statearr_31556_31587[(2)] = null);

(statearr_31556_31587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (6))){
var inst_31507 = (state_31547[(8)]);
var inst_31532 = inst_31507.length;
var inst_31533 = (inst_31532 > (0));
var state_31547__$1 = state_31547;
if(cljs.core.truth_(inst_31533)){
var statearr_31557_31588 = state_31547__$1;
(statearr_31557_31588[(1)] = (12));

} else {
var statearr_31558_31589 = state_31547__$1;
(statearr_31558_31589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (3))){
var inst_31545 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31547__$1,inst_31545);
} else {
if((state_val_31548 === (12))){
var inst_31507 = (state_31547[(8)]);
var inst_31535 = cljs.core.vec.call(null,inst_31507);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31547__$1,(15),out,inst_31535);
} else {
if((state_val_31548 === (2))){
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31547__$1,(4),ch);
} else {
if((state_val_31548 === (11))){
var inst_31511 = (state_31547[(9)]);
var inst_31515 = (state_31547[(10)]);
var inst_31525 = (state_31547[(2)]);
var inst_31526 = [];
var inst_31527 = inst_31526.push(inst_31511);
var inst_31507 = inst_31526;
var inst_31508 = inst_31515;
var state_31547__$1 = (function (){var statearr_31559 = state_31547;
(statearr_31559[(11)] = inst_31525);

(statearr_31559[(7)] = inst_31508);

(statearr_31559[(12)] = inst_31527);

(statearr_31559[(8)] = inst_31507);

return statearr_31559;
})();
var statearr_31560_31590 = state_31547__$1;
(statearr_31560_31590[(2)] = null);

(statearr_31560_31590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (9))){
var inst_31507 = (state_31547[(8)]);
var inst_31523 = cljs.core.vec.call(null,inst_31507);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31547__$1,(11),out,inst_31523);
} else {
if((state_val_31548 === (5))){
var inst_31508 = (state_31547[(7)]);
var inst_31511 = (state_31547[(9)]);
var inst_31515 = (state_31547[(10)]);
var inst_31515__$1 = f.call(null,inst_31511);
var inst_31516 = cljs.core._EQ_.call(null,inst_31515__$1,inst_31508);
var inst_31517 = cljs.core.keyword_identical_QMARK_.call(null,inst_31508,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31518 = (inst_31516) || (inst_31517);
var state_31547__$1 = (function (){var statearr_31561 = state_31547;
(statearr_31561[(10)] = inst_31515__$1);

return statearr_31561;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31562_31591 = state_31547__$1;
(statearr_31562_31591[(1)] = (8));

} else {
var statearr_31563_31592 = state_31547__$1;
(statearr_31563_31592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (14))){
var inst_31540 = (state_31547[(2)]);
var inst_31541 = cljs.core.async.close_BANG_.call(null,out);
var state_31547__$1 = (function (){var statearr_31565 = state_31547;
(statearr_31565[(13)] = inst_31540);

return statearr_31565;
})();
var statearr_31566_31593 = state_31547__$1;
(statearr_31566_31593[(2)] = inst_31541);

(statearr_31566_31593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (10))){
var inst_31530 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31567_31594 = state_31547__$1;
(statearr_31567_31594[(2)] = inst_31530);

(statearr_31567_31594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (8))){
var inst_31511 = (state_31547[(9)]);
var inst_31515 = (state_31547[(10)]);
var inst_31507 = (state_31547[(8)]);
var inst_31520 = inst_31507.push(inst_31511);
var tmp31564 = inst_31507;
var inst_31507__$1 = tmp31564;
var inst_31508 = inst_31515;
var state_31547__$1 = (function (){var statearr_31568 = state_31547;
(statearr_31568[(7)] = inst_31508);

(statearr_31568[(14)] = inst_31520);

(statearr_31568[(8)] = inst_31507__$1);

return statearr_31568;
})();
var statearr_31569_31595 = state_31547__$1;
(statearr_31569_31595[(2)] = null);

(statearr_31569_31595[(1)] = (2));


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
});})(c__28804__auto___31581,out))
;
return ((function (switch__28692__auto__,c__28804__auto___31581,out){
return (function() {
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_31573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31573[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_31573[(1)] = (1));

return statearr_31573;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_31547){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_31547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31574){if((e31574 instanceof Object)){
var ex__28696__auto__ = e31574;
var statearr_31575_31596 = state_31547;
(statearr_31575_31596[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31597 = state_31547;
state_31547 = G__31597;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_31547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_31547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28804__auto___31581,out))
})();
var state__28806__auto__ = (function (){var statearr_31576 = f__28805__auto__.call(null);
(statearr_31576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28804__auto___31581);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28806__auto__);
});})(c__28804__auto___31581,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1566349701068