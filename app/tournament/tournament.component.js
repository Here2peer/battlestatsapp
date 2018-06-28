"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tournament_service_1 = require("./tournament.service");
var TournamentComponent = /** @class */ (function () {
    function TournamentComponent(tournamentService) {
        this.tournamentService = tournamentService;
        this.activeTab = 'myTourneys';
    }
    TournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournamentService.getTournamentList('00000001').subscribe(function (tdata) {
            console.log(tdata);
            _this.ownTourneyData = tdata;
        });
        this.updateTournamentData('00000001');
        this.tournamentService.getAllTourneys().subscribe(function (adata) {
            console.log(adata);
            _this.allTourneyData = adata;
        });
    };
    TournamentComponent.prototype.updateTournamentData = function (tournamentID) {
        var _this = this;
        this.tournamentService.getTournamentData(tournamentID).subscribe(function (data) {
            console.log(data);
            _this.tournamentData = data;
        });
    };
    TournamentComponent = __decorate([
        core_1.Component({
            selector: 'app-tournament',
            templateUrl: './tournament.component.html',
            styleUrls: ['./tournament.component.css']
        }),
        __metadata("design:paramtypes", [tournament_service_1.TournamentService])
    ], TournamentComponent);
    return TournamentComponent;
}());
exports.TournamentComponent = TournamentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91cm5hbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3VybmFtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwyREFBd0Q7QUFReEQ7SUFPRSw2QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFOakQsY0FBUyxHQUFHLFlBQVksQ0FBQztJQU00QixDQUFDO0lBRTdELHNDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFVO1lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrREFBb0IsR0FBcEIsVUFBcUIsWUFBWTtRQUFqQyxpQkFLQztRQUpDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBMUJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBU3VDLHNDQUFpQjtPQVA3QyxtQkFBbUIsQ0E0Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3VybmFtZW50U2VydmljZX0gZnJvbSAnLi90b3VybmFtZW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdG91cm5hbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvdXJuYW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvdXJuYW1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG91cm5hbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGFjdGl2ZVRhYiA9ICdteVRvdXJuZXlzJztcclxuXHJcbiAgdG91cm5hbWVudERhdGE6IGFueTtcclxuICBvd25Ub3VybmV5RGF0YTogYW55O1xyXG4gIGFsbFRvdXJuZXlEYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91cm5hbWVudFNlcnZpY2U6IFRvdXJuYW1lbnRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRvdXJuYW1lbnRTZXJ2aWNlLmdldFRvdXJuYW1lbnRMaXN0KCcwMDAwMDAwMScpLnN1YnNjcmliZSgodGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0ZGF0YSk7XHJcbiAgICAgIHRoaXMub3duVG91cm5leURhdGEgPSB0ZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZVRvdXJuYW1lbnREYXRhKCcwMDAwMDAwMScpO1xyXG4gICAgdGhpcy50b3VybmFtZW50U2VydmljZS5nZXRBbGxUb3VybmV5cygpLnN1YnNjcmliZSgoYWRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGF0YSk7XHJcbiAgICAgIHRoaXMuYWxsVG91cm5leURhdGEgPSBhZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG91cm5hbWVudERhdGEodG91cm5hbWVudElEKSB7XHJcbiAgICB0aGlzLnRvdXJuYW1lbnRTZXJ2aWNlLmdldFRvdXJuYW1lbnREYXRhKHRvdXJuYW1lbnRJRCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMudG91cm5hbWVudERhdGEgPSBkYXRhO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=