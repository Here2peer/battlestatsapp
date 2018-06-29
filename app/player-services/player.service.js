"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getPlayer = function (playerName, id) {
        if (id) {
            return this.http.get('http://192.168.178.17:5000/player?player=' + playerName + '&id=true');
        }
        else {
            return this.http.get('http://192.168.178.17:5000/player?player=' + playerName);
        }
    };
    PlayerService.prototype.getAllPlayers = function () {
        return this.http.get('http://192.168.178.17:5000/players');
    };
    PlayerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBNkQ7QUFLN0Q7SUFFRSx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsaUNBQVMsR0FBVCxVQUFVLFVBQWtCLEVBQUUsRUFBVztRQUN2QyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDakYsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWRVLGFBQWE7UUFIekIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRzBCLGlCQUFVO09BRnpCLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UGxheWVyKHBsYXllck5hbWU6IHN0cmluZywgaWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzE5Mi4xNjguMTc4LjE3OjUwMDAvcGxheWVyP3BsYXllcj0nICsgcGxheWVyTmFtZSArICcmaWQ9dHJ1ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4xNzo1MDAwL3BsYXllcj9wbGF5ZXI9JyArIHBsYXllck5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUGxheWVycygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vMTkyLjE2OC4xNzguMTc6NTAwMC9wbGF5ZXJzJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==