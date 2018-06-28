import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LandingComponent} from "~/landing/landing.component";
import {PlayerStatsComponent} from "~/player-stats/player-stats.component";
import {TeamStatsComponent} from "~/team-stats/team-stats.component";
import {ChampionsComponent} from "~/champions/champions.component";
import {TournamentComponent} from "~/tournament/tournament.component";
import {SteamAuthComponent} from "~/steam-auth/steam-auth.component";
import {PlayerListComponent} from "~/player-list/player-list.component";
import {LeaderboardComponent} from "~/leaderboard/leaderboard.component";

const routes: Routes = [
    { path: '', component: LandingComponent },
    /*{ path: 'player/:id', component: PlayerStatsComponent },
    { path: 'team', component: TeamStatsComponent },
    { path: 'champions', component: ChampionsComponent },
    { path: 'tournament', component: TournamentComponent },
    { path: 'steam-auth', component: SteamAuthComponent },
    { path: 'player-list', component: PlayerListComponent },
    { path: 'leaderboard', component: LeaderboardComponent },*/
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
