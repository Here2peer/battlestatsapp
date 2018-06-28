"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var TeamStatsService = /** @class */ (function () {
    function TeamStatsService(http) {
        this.http = http;
    }
    TeamStatsService.prototype.getTeamStats = function (playerName) {
        return this.http.get('http://127.0.0.1:5000/team?player=' + playerName);
    };
    TeamStatsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TeamStatsService);
    return TeamStatsService;
}());
exports.TeamStatsService = TeamStatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1zdGF0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbS1zdGF0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFnRDtBQUtoRDtJQUNFLDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qyx1Q0FBWSxHQUFaLFVBQWEsVUFBa0I7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFMVSxnQkFBZ0I7UUFINUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRTBCLGlCQUFVO09BRHpCLGdCQUFnQixDQU01QjtJQUFELHVCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlYW1TdGF0c1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0VGVhbVN0YXRzKHBsYXllck5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC90ZWFtP3BsYXllcj0nICsgcGxheWVyTmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==