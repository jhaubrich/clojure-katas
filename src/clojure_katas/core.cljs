 (ns clojure-katas.core
  (:require [reagent.core :as r]
            [goog.object :as gobj])
  (:require-macros [dynadoc.example :refer [defexample]])
  (:import goog.net.XhrIo))


(defn first
  " Return first element of a collection. 
If n is undefined, return just the first element."
  [coll]
  (first coll))

(defexample first
  (first [1 2 3 4]))


(defn last
  "Like first, but for the last element. 
If n is undefined, return just the last element."
  [coll]
  (last coll))

(defexample last
  (last [1 2 3 4]))


; (defn iterate
;   "Apply a function to each element in a given collection."
;   [f coll]
;   (iterate f coll))

; (defexample iterate
;   (iterate inc [1 2 3 4]))


(defn index-of
  "Returns the index at which value can be found in the collection, or nil if value
is not present in the collection."
  [coll target]
  (.indexOf coll target))

(defexample index-of
  (index-of [1 2 3 4] 3))

(defn filter
  "Return all elements of an collection that pass a truth test."
  [test coll]
  (filter test coll))

(defexample filter
  (filter #(= % "a") ["a" "b" "c"]))

; (defn reject
;   "Return all elements of an collection that don't pass a truth test.
;   TIP: see if you can re-use filter here, without simply
;   copying code in and modifying it"
;   [test coll]
;   (filter test coll))

; (defexample reject
;   (reject #(!= % "a") ["a" "b" "c"]))


(defn distinct
  "Produce a duplicate-free version of the collection."
  [coll]
  (distinct coll))

(defexample distinct
  (distinct [1 1 2 2 3 3 4 4]))


(defn map
  "Return the results of applying an iterator to each element.
  map is a useful primitive iteration function that works a lot
  like each.."
  [iterator coll]
  (map iterator coll))

(defexample map
  (map inc [1 2 3 4]))