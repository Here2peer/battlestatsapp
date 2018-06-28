"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var team_stats_service_1 = require("./team-stats.service");
var player_service_1 = require("../player-services/player.service");
var router_1 = require("@angular/router");
var TeamStatsComponent = /** @class */ (function () {
    function TeamStatsComponent(teamStatsService, playerService, route) {
        this.teamStatsService = teamStatsService;
        this.playerService = playerService;
        this.route = route;
    }
    TeamStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var player_name = 'Joltz';
        this.route.params.subscribe(function (params) {
            if (params['player'] !== undefined) {
                player_name = params['player'];
            }
        });
        this.teamStatsService.getTeamStats(player_name).subscribe(function (data) {
            if (!data['errors']) {
                _this.teamstats = data;
            }
            else {
                _this.error = data['errors'][0]['title'];
            }
        });
        this.playerService.getPlayer(player_name, false).subscribe(function (data) {
            _this.playerData = data['data'][0];
            _this.attribute = _this.playerData['attributes'];
            _this.stats = _this.attribute['stats'];
            _this.customstats = _this.attribute['customstats'];
        });
    };
    TeamStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-team-stats',
            templateUrl: './team-stats.component.html',
            styleUrls: ['./team-stats.component.css'],
            providers: [team_stats_service_1.TeamStatsService]
        }),
        __metadata("design:paramtypes", [team_stats_service_1.TeamStatsService,
            player_service_1.PlayerService,
            router_1.ActivatedRoute])
    ], TeamStatsComponent);
    return TeamStatsComponent;
}());
exports.TeamStatsComponent = TeamStatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1zdGF0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWFtLXN0YXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQsb0VBQWtFO0FBQ2xFLDBDQUErQztBQVEvQztJQVdFLDRCQUFvQixnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsS0FBcUI7UUFGckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUN6QixDQUFDO0lBRWpCLHFDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDaEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ2xFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ2pFLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQXJDVSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztTQUM5QixDQUFDO3lDQVlzQyxxQ0FBZ0I7WUFDbkIsOEJBQWE7WUFDckIsdUJBQWM7T0FiOUIsa0JBQWtCLENBc0M5QjtJQUFELHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUZWFtU3RhdHNTZXJ2aWNlfSBmcm9tICcuL3RlYW0tc3RhdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tICcuLi9wbGF5ZXItc2VydmljZXMvcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGVhbS1zdGF0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlYW0tc3RhdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RlYW0tc3RhdHMuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1RlYW1TdGF0c1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZWFtU3RhdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0ZWFtc3RhdHM6IGFueTtcclxuICB0ZWFtU3RhdHNGZXRjaGVkOiBib29sZWFuO1xyXG5cclxuICBwbGF5ZXJEYXRhOiBhbnk7XHJcbiAgYXR0cmlidXRlOiBhbnk7XHJcbiAgc3RhdHM6IGFueTtcclxuICBjdXN0b21zdGF0czogYW55O1xyXG4gIGVycm9yOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbVN0YXRzU2VydmljZTogVGVhbVN0YXRzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgcGxheWVyX25hbWUgPSAnSm9sdHonO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIGlmIChwYXJhbXNbJ3BsYXllciddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwbGF5ZXJfbmFtZSA9IHBhcmFtc1sncGxheWVyJ107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50ZWFtU3RhdHNTZXJ2aWNlLmdldFRlYW1TdGF0cyhwbGF5ZXJfbmFtZSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCFkYXRhWydlcnJvcnMnXSkge1xyXG4gICAgICAgIHRoaXMudGVhbXN0YXRzID0gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVycm9yID0gZGF0YVsnZXJyb3JzJ11bMF1bJ3RpdGxlJ107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcihwbGF5ZXJfbmFtZSwgZmFsc2UpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJEYXRhID0gZGF0YVsnZGF0YSddWzBdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gdGhpcy5wbGF5ZXJEYXRhWydhdHRyaWJ1dGVzJ107XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuYXR0cmlidXRlWydzdGF0cyddO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tc3RhdHMgPSB0aGlzLmF0dHJpYnV0ZVsnY3VzdG9tc3RhdHMnXTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19