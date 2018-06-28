"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PlayerStatsService = /** @class */ (function () {
    function PlayerStatsService(http) {
        this.http = http;
    }
    PlayerStatsService.prototype.getStatsMapping = function () {
        return this.http.get('./assets/players/statsMapping.json');
    };
    PlayerStatsService.prototype.getGitMapping = function () {
        return this.http.get('./assets/players/gitMappings.json');
    };
    PlayerStatsService.prototype.getAvatar = function (steamid) {
        var url = 'http://127.0.0.1:5000/avatar?steamid=' + steamid;
        return this.http.get(url);
    };
    PlayerStatsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PlayerStatsService);
    return PlayerStatsService;
}());
exports.PlayerStatsService = PlayerStatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXN0YXRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXItc3RhdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBZ0Q7QUFLaEQ7SUFDRSw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsNENBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxPQUFPO1FBQ2YsSUFBTSxHQUFHLEdBQUcsdUNBQXVDLEdBQUcsT0FBTyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBZFUsa0JBQWtCO1FBSDlCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUUwQixpQkFBVTtPQUR6QixrQkFBa0IsQ0FnQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGdldFN0YXRzTWFwcGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2Fzc2V0cy9wbGF5ZXJzL3N0YXRzTWFwcGluZy5qc29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXRHaXRNYXBwaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXNzZXRzL3BsYXllcnMvZ2l0TWFwcGluZ3MuanNvbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZhdGFyKHN0ZWFtaWQpIHtcclxuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXZhdGFyP3N0ZWFtaWQ9JyArIHN0ZWFtaWQ7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19