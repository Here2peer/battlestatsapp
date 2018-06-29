import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import {PlayerListComponent} from '../../player-list/player-list.component';

const routes: Routes = [
    { path: '', component: PlayerListComponent },
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
