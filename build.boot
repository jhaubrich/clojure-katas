(set-env!
  :source-paths #{"src"}
  :dependencies '[[adzerk/boot-cljs "2.1.5" :scope "test"]
                  [adzerk/boot-reload "0.6.0" :scope "test"]
                  [org.clojure/test.check "0.9.0" :scope "test"]
                  [org.clojure/clojurescript "1.10.439" :scope "test"]
                  [reagent "0.8.1"]
                  [javax.xml.bind/jaxb-api "2.3.0" :scope "test"] ; necessary for Java 9 compatibility
                  [dynadoc "RELEASE"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[dynadoc.boot :refer [dynadoc]])

(deftask run-docs []
  (set-env! :resource-paths #{"dev-resources"})
  (comp
    (watch)
    (reload :asset-path "dynadoc-extend")
    (cljs
      :optimizations :simple ; replace :none with :simple to enable exporting
      :compiler-options {:asset-path "/main.out"})
    (dynadoc :port 5000)))

