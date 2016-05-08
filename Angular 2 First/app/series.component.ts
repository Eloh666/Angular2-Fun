/**
 * Created by Eloh on 08/05/2016.
 */

import {Component} from 'angular2/core'
import {SeriesService} from './series.service'

@Component({
    selector: "series",
    providers: [SeriesService],
    template: `
        <h2>Series</h2>
        {{title}}
        <ul>
            <li *ngFor="#serie of series">
            {{serie}}
            </li>
        </ul>
    `
})
export class SeriesComponent{
    title = "Series I wanna watch"
    series;
    constructor(seriesService: SeriesService)
    {
        this.series = seriesService.getSeriesList()
    }

}