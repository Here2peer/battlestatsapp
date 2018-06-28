"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player-services/player.service");
var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(playerService) {
        this.playerService = playerService;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getLeaderboard();
    };
    LeaderboardComponent.prototype.convertTime = function (seconds) {
        console.log(seconds);
        var minutes = seconds / 60;
        console.log(minutes);
        var hours = minutes / 60;
        console.log(hours);
        return Math.ceil(hours);
    };
    LeaderboardComponent.prototype.getLeaderboard = function () {
        var _this = this;
        this.playerService.getAllPlayers().subscribe(function (data) {
            _this.playerlist = data;
            console.log(_this.playerlist);
        });
    };
    LeaderboardComponent.prototype.sortData = function (sort) {
        var data = this.playerlist.slice();
        if (!sort.active || sort.direction === '') {
            this.playerlist = data;
            return;
        }
        this.playerlist = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'Player name':
                    return compare(a.battlerite_name, b.battlerite_name, isAsc);
                case 'Winrate':
                    return compare(a.winrate, b.winrate, isAsc);
                case 'Time Played':
                    return compare(a.time_played, b.time_played, isAsc);
                case 'Ranked 2v2 wins':
                    return compare(+a.twov2_ranked_wins, +b.twov2_ranked_wins, isAsc);
                case 'Ranked 3v3 wins':
                    return compare(+a.threev3_ranked_wins, +b.threev3_ranked_wins, isAsc);
                case 'Unranked 2v2 wins':
                    return compare(+a.twov2_unranked_wins, +b.twov2_unranked_wins, isAsc);
                case 'Unranked 3v3 wins':
                    return compare(+a.threev3_unranked_wins, +b.threev3_unranked_wins, isAsc);
                default:
                    return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    LeaderboardComponent = __decorate([
        core_1.Component({
            selector: 'app-leaderboard',
            templateUrl: './leaderboard.component.html',
            styleUrls: ['./leaderboard.component.css']
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVhZGVyYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG9FQUFnRTtBQVFoRTtJQUlFLDhCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQU87UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixJQUFNLE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBTSxLQUFLLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBYyxHQUFkO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztZQUN2QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsS0FBSyxhQUFhO29CQUNoQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxTQUFTO29CQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLGFBQWE7b0JBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLGlCQUFpQjtvQkFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEUsS0FBSyxpQkFBaUI7b0JBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3hFLEtBQUssbUJBQW1CO29CQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4RSxLQUFLLG1CQUFtQjtvQkFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUU7b0JBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUs7WUFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUEzRFUsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLbUMsOEJBQWE7T0FKckMsb0JBQW9CLENBNERoQztJQUFELDJCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQbGF5ZXJTZXJ2aWNlfSBmcm9tICcuLi9wbGF5ZXItc2VydmljZXMvcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxlYWRlcmJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGVhZGVyYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVhZGVyYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHBsYXllcmxpc3Q6IGFueTtcclxuICBwbGF5ZXJzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldExlYWRlcmJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VGltZShzZWNvbmRzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzZWNvbmRzKVxyXG4gICAgY29uc3QgbWludXRlcyA9IHNlY29uZHMgLyA2MDtcclxuICAgIGNvbnNvbGUubG9nKG1pbnV0ZXMpO1xyXG4gICAgY29uc3QgaG91cnMgPSBtaW51dGVzIC8gNjA7XHJcbiAgICBjb25zb2xlLmxvZyhob3Vycyk7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKGhvdXJzKTtcclxuICB9XHJcblxyXG4gIGdldExlYWRlcmJvYXJkKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldEFsbFBsYXllcnMoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllcmxpc3QgPSBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcmxpc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzb3J0RGF0YShzb3J0OiBTb3J0KSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wbGF5ZXJsaXN0LnNsaWNlKCk7XHJcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xyXG4gICAgICB0aGlzLnBsYXllcmxpc3QgPSBkYXRhO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJsaXN0ID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQXNjID0gc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xyXG4gICAgICBzd2l0Y2ggKHNvcnQuYWN0aXZlKSB7XHJcbiAgICAgICAgY2FzZSAnUGxheWVyIG5hbWUnOlxyXG4gICAgICAgICAgcmV0dXJuIGNvbXBhcmUoYS5iYXR0bGVyaXRlX25hbWUsIGIuYmF0dGxlcml0ZV9uYW1lLCBpc0FzYyk7XHJcbiAgICAgICAgY2FzZSAnV2lucmF0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gY29tcGFyZShhLndpbnJhdGUsIGIud2lucmF0ZSwgaXNBc2MpO1xyXG4gICAgICAgIGNhc2UgJ1RpbWUgUGxheWVkJzpcclxuICAgICAgICAgIHJldHVybiBjb21wYXJlKGEudGltZV9wbGF5ZWQsIGIudGltZV9wbGF5ZWQsIGlzQXNjKTtcclxuICAgICAgICBjYXNlICdSYW5rZWQgMnYyIHdpbnMnOlxyXG4gICAgICAgICAgcmV0dXJuIGNvbXBhcmUoK2EudHdvdjJfcmFua2VkX3dpbnMsICtiLnR3b3YyX3JhbmtlZF93aW5zLCBpc0FzYyk7XHJcbiAgICAgICAgY2FzZSAnUmFua2VkIDN2MyB3aW5zJzpcclxuICAgICAgICAgIHJldHVybiBjb21wYXJlKCthLnRocmVldjNfcmFua2VkX3dpbnMsICtiLnRocmVldjNfcmFua2VkX3dpbnMsIGlzQXNjKTtcclxuICAgICAgICBjYXNlICdVbnJhbmtlZCAydjIgd2lucyc6XHJcbiAgICAgICAgICByZXR1cm4gY29tcGFyZSgrYS50d292Ml91bnJhbmtlZF93aW5zLCArYi50d292Ml91bnJhbmtlZF93aW5zLCBpc0FzYyk7XHJcbiAgICAgICAgY2FzZSAnVW5yYW5rZWQgM3YzIHdpbnMnOlxyXG4gICAgICAgICAgcmV0dXJuIGNvbXBhcmUoK2EudGhyZWV2M191bnJhbmtlZF93aW5zLCArYi50aHJlZXYzX3VucmFua2VkX3dpbnMsIGlzQXNjKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgaXNBc2MpIHtcclxuICAgICAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=