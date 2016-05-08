import {Component} from 'angular2/core';
import {GamesComponent} from "./games.component";
import {SeriesComponent} from "./series.component";

@Component({
    selector: 'my-app',
    template: '<h1>Summer Activities</h1><games></games><series></series>',
    directives: [GamesComponent, SeriesComponent]
})
export class AppComponent { }