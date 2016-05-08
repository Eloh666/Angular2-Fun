/**
 * Created by Eloh on 08/05/2016.
 */

import {Component} from 'angular2/core'
import {GamesService} from './games.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'games',
    providers: [GamesService],
    template: `
       <h2>Games</h2>
       {{title}}
       <input type="text" autoGrow/>
        <ul>
            <li *ngFor="#game of games">
                {{game}}
            </li>
        </ul>
     `,
    directives: [AutoGrowDirective]
})
export class GamesComponent {
    title: string = "The games I wanna play during the summer";
    games;
    constructor(gameService: GamesService){
        this.games = gameService.getGamesList()
    }
}