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
            templateUrl: './player-list.component.html',
            styleUrls: ['./player-list.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUN2RCxvRUFBZ0U7QUFTaEU7SUFLRSw2QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBbkYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTVHLHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7b0JBQ3ZFLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO29CQUNyRCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQW5DVSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO3lDQU0yQix1QkFBYyxFQUFrQixlQUFNLEVBQXlCLDhCQUFhO09BTDVGLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtQbGF5ZXJTZXJ2aWNlfSBmcm9tICcuLi9wbGF5ZXItc2VydmljZXMvcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wbGF5ZXItbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYXllckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNlYXJjaDogbnVtYmVyO1xyXG4gIHBsYXllcm5hbWU6IHN0cmluZztcclxuICBwbGF5ZXJsaXN0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciAscHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlYXJjaFBsYXllcnMoKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUaW1lKHNlY29uZHMpIHtcclxuICAgIGNvbnNvbGUubG9nKHNlY29uZHMpXHJcbiAgICBjb25zdCBtaW51dGVzID0gc2Vjb25kcyAvIDYwO1xyXG4gICAgY29uc29sZS5sb2cobWludXRlcyk7XHJcbiAgICBjb25zdCBob3VycyA9IG1pbnV0ZXMgLyA2MDtcclxuICAgIGNvbnNvbGUubG9nKGhvdXJzKTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoaG91cnMpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoUGxheWVycygpIHtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoID0gcGFyYW1zWydzZWFyY2gnXTtcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnBsYXllcm5hbWUgPSBwYXJhbXNbJ3BsYXllcm5hbWUnXTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKHRoaXMucGxheWVybmFtZSwgZmFsc2UpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYXllcmxpc3QgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldEFsbFBsYXllcnMoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbGF5ZXJsaXN0ID0gZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVybGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=