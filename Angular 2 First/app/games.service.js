/**
 * Created by Eloh on 08/05/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GamesService;
    return {
        setters:[],
        execute: function() {
            GamesService = (function () {
                function GamesService() {
                }
                GamesService.prototype.getGamesList = function () {
                    return ["Tomb Raider", "Darkest Dungeon",
                        "Pillars of Eternity", "X-Com 2", "The Witcher 3",
                        "Fallout 4", "Dying Light", "Battlefleet Gothic: Armada",
                        "Quantum Break", "Dark Souls 3"];
                };
                return GamesService;
            }());
            exports_1("GamesService", GamesService);
        }
    }
});
//# sourceMappingURL=games.service.js.map