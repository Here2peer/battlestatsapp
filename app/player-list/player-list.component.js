"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_service_1 = require("../player-services/player.service");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(route, router, playerService) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        this.searchPlayers();
    };
    PlayerListComponent.prototype.convertTime = function (seconds) {
        console.log(seconds);
        var minutes = seconds / 60;
        console.log(minutes);
        var hours = minutes / 60;
        console.log(hours);
        return Math.ceil(hours);
    };
    PlayerListComponent.prototype.searchPlayers = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.search = params['search'];
            if (_this.search !== undefined) {
                _this.playername = params['playername'];
                _this.playerService.getPlayer(_this.playername, false).subscribe(function (data) {
                    _this.playerlist = data.data;
                });
            }
            else {
                _this.playerService.getAllPlayers().subscribe(function (data) {
                    _this.playerlist = data;
                    console.log(_this.playerlist);
                });
            }
        });
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            moduleId: module.id,
            templateUrl: './player-list.component.html',
            styleUrls: ['./player-list.component.css'],
            providers: [player_service_1.PlayerService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUN2RCxvRUFBZ0U7QUFXaEU7SUFLRSw2QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVcsYUFBNEI7UUFBcEYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTdHLHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7b0JBQ3ZFLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO29CQUNyRCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQW5DVSxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUM3QixDQUFDO3lDQU0yQix1QkFBYyxFQUFrQixlQUFNLEVBQTBCLDhCQUFhO09BTDdGLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtQbGF5ZXJTZXJ2aWNlfSBmcm9tICcuLi9wbGF5ZXItc2VydmljZXMvcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wbGF5ZXItbGlzdCcsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGxheWVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BsYXllci1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBzZWFyY2g6IG51bWJlcjtcclxuICBwbGF5ZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGxheWVybGlzdDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VhcmNoUGxheWVycygpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRpbWUoc2Vjb25kcykge1xyXG4gICAgY29uc29sZS5sb2coc2Vjb25kcylcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBzZWNvbmRzIC8gNjA7XHJcbiAgICBjb25zb2xlLmxvZyhtaW51dGVzKTtcclxuICAgIGNvbnN0IGhvdXJzID0gbWludXRlcyAvIDYwO1xyXG4gICAgY29uc29sZS5sb2coaG91cnMpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChob3Vycyk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hQbGF5ZXJzKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2ggPSBwYXJhbXNbJ3NlYXJjaCddO1xyXG4gICAgICBpZiAodGhpcy5zZWFyY2ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVybmFtZSA9IHBhcmFtc1sncGxheWVybmFtZSddO1xyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIodGhpcy5wbGF5ZXJuYW1lLCBmYWxzZSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMucGxheWVybGlzdCA9IGRhdGEuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0QWxsUGxheWVycygpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllcmxpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==