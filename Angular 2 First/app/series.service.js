/**
 * Created by Eloh on 08/05/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SeriesService;
    return {
        setters:[],
        execute: function() {
            SeriesService = (function () {
                function SeriesService() {
                }
                SeriesService.prototype.getSeriesList = function () {
                    return ["Game of Thrones", "Silicon Valley", "Vikings",
                        "Black Sails", "Person of Interest", "Tokyo Ghoul", "Akame ga Kill"];
                };
                return SeriesService;
            }());
            exports_1("SeriesService", SeriesService);
        }
    }
});
//# sourceMappingURL=series.service.js.map