"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var steam_service_1 = require("./steam.service");
var SteamComponent = /** @class */ (function () {
    function SteamComponent(steamService) {
        this.steamService = steamService;
    }
    SteamComponent.prototype.ngOnInit = function () {
        /*this.steamService.getSteamUser().subscribe((data: any) =>  {
          this.steamuser = data;
          console.log(this.steamuser);
        }
        );*/
        try {
            this.steamuser = window.location.search.substr(1);
        }
        catch (e) {
            this.steamuser = 0;
        }
        console.log(this.steamuser);
    };
    SteamComponent = __decorate([
        core_1.Component({
            selector: 'app-steam',
            templateUrl: './steam.component.html',
            styleUrls: ['./steam.component.css'],
            providers: [steam_service_1.SteamService]
        }),
        __metadata("design:paramtypes", [steam_service_1.SteamService])
    ], SteamComponent);
    return SteamComponent;
}());
exports.SteamComponent = SteamComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUE2QztBQVU3QztJQUlFLHdCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFOzs7O1lBSUk7UUFDSixJQUFHLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbkJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO3lDQUtrQyw0QkFBWTtPQUpuQyxjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N0ZWFtU2VydmljZX0gZnJvbSAnLi9zdGVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc3RlYW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVhbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RlYW0uY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1N0ZWFtU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0ZWFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgc3RlYW11c2VyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RlYW1TZXJ2aWNlOiBTdGVhbVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLyp0aGlzLnN0ZWFtU2VydmljZS5nZXRTdGVhbVVzZXIoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gIHtcclxuICAgICAgdGhpcy5zdGVhbXVzZXIgPSBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZWFtdXNlcik7XHJcbiAgICB9XHJcbiAgICApOyovXHJcbiAgICB0cnl7XHJcbiAgICAgIHRoaXMuc3RlYW11c2VyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5zdGVhbXVzZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGVhbXVzZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=