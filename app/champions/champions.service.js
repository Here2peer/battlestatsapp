"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ChampionsService = /** @class */ (function () {
    function ChampionsService(http) {
        this.http = http;
    }
    ChampionsService.prototype.getNewGameplay = function () {
        // return this.http.get('./assets/champions/newgameplay.json');
        return this.http.get('http://127.0.0.1:5000/champions');
    };
    ChampionsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ChampionsService);
    return ChampionsService;
}());
exports.ChampionsService = ChampionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFtcGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBZ0Q7QUFLaEQ7SUFFRSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMseUNBQWMsR0FBZDtRQUNFLCtEQUErRDtRQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBUFUsZ0JBQWdCO1FBSDVCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcwQixpQkFBVTtPQUZ6QixnQkFBZ0IsQ0FRNUI7SUFBRCx1QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFtcGlvbnNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXROZXdHYW1lcGxheSgpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2Fzc2V0cy9jaGFtcGlvbnMvbmV3Z2FtZXBsYXkuanNvbicpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9jaGFtcGlvbnMnKTtcclxuICB9XHJcbn1cclxuIl19