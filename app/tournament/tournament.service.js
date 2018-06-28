"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var TournamentService = /** @class */ (function () {
    function TournamentService(http) {
        this.http = http;
    }
    TournamentService.prototype.getTournamentList = function (userID) {
        return this.http.get('http://localhost:5000/tournament/tournamentList?playerID=' + userID);
        // return this.http.get('./assets/tournaments/tournaments_p' + userID + '.json');
    };
    TournamentService.prototype.getTournamentData = function (tournamentID) {
        return this.http.get('http://localhost:5000/tournament?tournamentID=' + tournamentID);
        // return this.http.get('./assets/tournaments/tournament_' + tournamentID + '.json');
    };
    TournamentService.prototype.getAllTourneys = function () {
        return this.http.get('http://localhost:5000/tournaments');
    };
    TournamentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TournamentService);
    return TournamentService;
}());
exports.TournamentService = TournamentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91cm5hbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG91cm5hbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFnRDtBQU9oRDtJQUNFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qyw2Q0FBaUIsR0FBakIsVUFBa0IsTUFBTTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkRBQTJELEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0YsaUZBQWlGO0lBQ25GLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsWUFBWTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDdEYscUZBQXFGO0lBQ3ZGLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQWZVLGlCQUFpQjtRQUw3QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FJMEIsaUJBQVU7T0FEekIsaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG91cm5hbWVudFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0VG91cm5hbWVudExpc3QodXNlcklEKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RvdXJuYW1lbnQvdG91cm5hbWVudExpc3Q/cGxheWVySUQ9JyArIHVzZXJJRCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldCgnLi9hc3NldHMvdG91cm5hbWVudHMvdG91cm5hbWVudHNfcCcgKyB1c2VySUQgKyAnLmpzb24nKTtcclxuICB9XHJcblxyXG4gIGdldFRvdXJuYW1lbnREYXRhKHRvdXJuYW1lbnRJRCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90b3VybmFtZW50P3RvdXJuYW1lbnRJRD0nICsgdG91cm5hbWVudElEKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2Fzc2V0cy90b3VybmFtZW50cy90b3VybmFtZW50XycgKyB0b3VybmFtZW50SUQgKyAnLmpzb24nKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFRvdXJuZXlzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90b3VybmFtZW50cycpO1xyXG4gIH1cclxufVxyXG4iXX0=