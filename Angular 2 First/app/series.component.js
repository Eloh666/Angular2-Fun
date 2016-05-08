/**
 * Created by Eloh on 08/05/2016.
 */
System.register(['angular2/core', './series.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, series_service_1;
    var SeriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (series_service_1_1) {
                series_service_1 = series_service_1_1;
            }],
        execute: function() {
            SeriesComponent = (function () {
                function SeriesComponent(seriesService) {
                    this.title = "Series I wanna watch";
                    this.series = seriesService.getSeriesList();
                }
                SeriesComponent = __decorate([
                    core_1.Component({
                        selector: "series",
                        providers: [series_service_1.SeriesService],
                        template: "\n        <h2>Series</h2>\n        {{title}}\n        <ul>\n            <li *ngFor=\"#serie of series\">\n            {{serie}}\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [series_service_1.SeriesService])
                ], SeriesComponent);
                return SeriesComponent;
            }());
            exports_1("SeriesComponent", SeriesComponent);
        }
    }
});
//# sourceMappingURL=series.component.js.map