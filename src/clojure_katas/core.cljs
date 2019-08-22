(ns clojure-katas.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [cljs.test :as t :include-macros true :refer-macros [testing is]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn my-first [col]
  [])

(deftest test-first
  "### Implement `(first col)`, a function that returns the first item from `col`"
  (testing
    (is (= (my-first [1 2 3 4]) 1))
    (is (= (my-first []) nil))))

(defcard last
  "Implement `(last col)`, a function that returns the last item from `col`")

(defcard filter
  "Implement `(filter fn col)`, a function that takes a function and a collection. `filter` tests each item in `col` with `fn` and returns values of `col` for which `fn` returns true.")


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

