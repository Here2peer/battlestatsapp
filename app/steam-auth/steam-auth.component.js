"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_stats_service_1 = require("../player-stats/player-stats.service");
var SteamAuthComponent = /** @class */ (function () {
    function SteamAuthComponent(route, playerstatsservice) {
        this.route = route;
        this.playerstatsservice = playerstatsservice;
        this.api = '47E81668C8A02D8BC4341E13C666BE0B';
    }
    SteamAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['steamid'] !== undefined) {
                _this.steamid = params['steamid'];
                var avatarurl_1;
                _this.playerstatsservice.getAvatar(_this.steamid).subscribe((function (data) {
                    avatarurl_1 = data['url'];
                    _this.img_path = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + avatarurl_1;
                }));
            }
        });
    };
    SteamAuthComponent = __decorate([
        core_1.Component({
            selector: 'app-steam-auth',
            templateUrl: './steam-auth.component.html',
            styleUrls: ['./steam-auth.component.css'],
            providers: [player_stats_service_1.PlayerStatsService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, player_stats_service_1.PlayerStatsService])
    ], SteamAuthComponent);
    return SteamAuthComponent;
}());
exports.SteamAuthComponent = SteamAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlYW0tYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVhbS1hdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBZ0Q7QUFFaEQsNkVBQXlFO0FBUXpFO0lBSUUsNEJBQW9CLEtBQXFCLEVBQVUsa0JBQXNDO1FBQXJFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZ6RixRQUFHLEdBQUcsa0NBQWtDLENBQUM7SUFFb0QsQ0FBQztJQUU5RixxQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsSUFBSSxXQUFjLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQUEsSUFBSTtvQkFDN0QsV0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyx1RUFBdUUsR0FBRyxXQUFTLENBQUM7Z0JBQ3RHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDO1FBQUEsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBakJVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO1NBQ2hDLENBQUM7eUNBSzJCLHVCQUFjLEVBQThCLHlDQUFrQjtPQUo5RSxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBQbGF5ZXJTdGF0c1NlcnZpY2V9IGZyb20gJy4uL3BsYXllci1zdGF0cy9wbGF5ZXItc3RhdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zdGVhbS1hdXRoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3RlYW0tYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RlYW0tYXV0aC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU3RhdHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlYW1BdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBzdGVhbWlkOiBhbnk7XHJcbiAgYXBpID0gJzQ3RTgxNjY4QzhBMDJEOEJDNDM0MUUxM0M2NjZCRTBCJztcclxuICBpbWdfcGF0aDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBsYXllcnN0YXRzc2VydmljZTogUGxheWVyU3RhdHNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgaWYgKHBhcmFtc1snc3RlYW1pZCddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnN0ZWFtaWQgPSBwYXJhbXNbJ3N0ZWFtaWQnXTtcclxuICAgICAgICBsZXQgYXZhdGFydXJsOiBhbnk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzdGF0c3NlcnZpY2UuZ2V0QXZhdGFyKHRoaXMuc3RlYW1pZCkuc3Vic2NyaWJlKChkYXRhID0+IHtcclxuICAgICAgICAgIGF2YXRhcnVybCA9IGRhdGFbJ3VybCddO1xyXG4gICAgICAgICAgdGhpcy5pbWdfcGF0aCA9ICdodHRwczovL3N0ZWFtY2RuLWEuYWthbWFpaGQubmV0L3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvYXZhdGFycy8nICsgYXZhdGFydXJsO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgfX0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==