"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player-services/player.service");
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(playerService) {
        this.playerService = playerService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0, max: 100, } },]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        };
        this.barChartLabels = ['ranked2v2', 'unranked 2v2', 'ranked 3v3', 'unranked 3v3', 'brawl', 'battleground'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,225,9)',
                borderColor: 'rgba(225,10,24)',
                pointBackgroundColor: 'rgba(225,10,24)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,10,24)'
            },
            {
                backgroundColor: 'rgba(225,10,24)',
                borderColor: 'rgba(225,10,24)',
                pointBackgroundColor: 'rgba(225,10,24)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,10,24,0.2)'
            }
        ];
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayer('Joltz', false).subscribe(function (data) {
            console.log(data);
            var playerData = data['data'][0];
            var attribute = playerData['attributes'];
            _this.stats = attribute['stats'];
            _this.barChartData = [
                { data: [(_this.stats[10] / (_this.stats[10] + _this.stats[11])) * 100,
                        (_this.stats[14] / (_this.stats[14] + _this.stats[15])) * 100,
                        (_this.stats[12] / (_this.stats[12] + _this.stats[13])) * 100,
                        (_this.stats[16] / (_this.stats[16] + _this.stats[17])) * 100,
                        (_this.stats[18] / (_this.stats[18] + _this.stats[19])) * 100,
                        (_this.stats[22] / (_this.stats[22] + _this.stats[23])) * 100],
                    label: 'wins' },
            ];
        });
    };
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'app-charts',
            templateUrl: './charts.component.html',
            styleUrls: ['./charts.component.css'],
            providers: [player_service_1.PlayerService]
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFDMUUsb0VBQWlFO0FBUWpFO0lBb0NFLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQW5DaEQsb0JBQWUsR0FBRztZQUNoQixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBSSxFQUFFLEVBQUc7YUFBQztZQUNoRyxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRSxPQUFPO2lCQUNuQjthQUNGO1NBQ0YsQ0FBQztRQUVGLG1CQUFjLEdBQUcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RHLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR2YsZ0JBQVcsR0FBZTtZQUMvQjtnQkFDRSxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUIsb0JBQW9CLEVBQUUsaUJBQWlCO2dCQUN2QyxnQkFBZ0IsRUFBRSxNQUFNO2dCQUN4Qix5QkFBeUIsRUFBRSxNQUFNO2dCQUNqQyxxQkFBcUIsRUFBRSxpQkFBaUI7YUFDekM7WUFDRDtnQkFDRSxlQUFlLEVBQUUsaUJBQWlCO2dCQUNsQyxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixvQkFBb0IsRUFBRSxpQkFBaUI7Z0JBQ3ZDLGdCQUFnQixFQUFFLE1BQU07Z0JBQ3hCLHlCQUF5QixFQUFFLE1BQU07Z0JBQ2pDLHFCQUFxQixFQUFFLHFCQUFxQjthQUM3QztTQUFDLENBQUM7SUFFK0MsQ0FBQztJQUVyRCxrQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO3dCQUM5RCxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7d0JBQzFELENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRzt3QkFDMUQsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO3dCQUMxRCxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7d0JBQzFELENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUM3RCxLQUFLLEVBQUUsTUFBTSxFQUFDO2FBQ2pCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0RFUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUM7eUNBcUNtQyw4QkFBYTtPQXBDckMsZUFBZSxDQXdEM0I7SUFBRCxzQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZX0gZnJvbSAnLi4vcGxheWVyLXNlcnZpY2VzL3BsYXllci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNoYXJ0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnRzLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBiYXJDaGFydE9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZVNob3dWZXJ0aWNhbExpbmVzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY2FsZXM6IHtcclxuICAgIHlBeGVzOiBbIHsgaWQ6ICd5LWF4aXMtMScsIHR5cGU6ICdsaW5lYXInLCBwb3NpdGlvbjogJ2xlZnQnLCB0aWNrczogeyBtaW46IDAsIG1heDogMTAwICwgfSB9LCBdfSxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBsYWJlbHM6IHtcclxuICAgICAgICBmb250Q29sb3I6ICd3aGl0ZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGJhckNoYXJ0TGFiZWxzID0gWydyYW5rZWQydjInLCAndW5yYW5rZWQgMnYyJywgJ3JhbmtlZCAzdjMnLCAndW5yYW5rZWQgM3YzJywgJ2JyYXdsJywgJ2JhdHRsZWdyb3VuZCddO1xyXG4gIGJhckNoYXJ0VHlwZSA9ICdiYXInO1xyXG4gIGJhckNoYXJ0TGVnZW5kID0gdHJ1ZTtcclxuICBiYXJDaGFydERhdGE7XHJcbiAgcHJpdmF0ZSBzdGF0czogYW55O1xyXG4gIHB1YmxpYyBjaGFydENvbG9yczogQXJyYXk8YW55PiA9IFtcclxuICAgIHsgLy8gZmlyc3QgY29sb3JcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDIyNSw5KScsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyMjUsMTAsMjQpJyxcclxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIyNSwxMCwyNCknLFxyXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjUsMTAsMjQpJ1xyXG4gICAgfSxcclxuICAgIHsgLy8gc2Vjb25kIGNvbG9yXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjI1LDEwLDI0KScsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyMjUsMTAsMjQpJyxcclxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIyNSwxMCwyNCknLFxyXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjUsMTAsMjQsMC4yKSdcclxuICAgIH1dO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoJ0pvbHR6JywgZmFsc2UpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zdCBwbGF5ZXJEYXRhID0gZGF0YVsnZGF0YSddWzBdO1xyXG4gICAgICBjb25zdCBhdHRyaWJ1dGUgPSBwbGF5ZXJEYXRhWydhdHRyaWJ1dGVzJ107XHJcbiAgICAgIHRoaXMuc3RhdHMgPSBhdHRyaWJ1dGVbJ3N0YXRzJ107XHJcbiAgICAgIHRoaXMuYmFyQ2hhcnREYXRhID0gW1xyXG4gICAgICAgIHtkYXRhOiBbKHRoaXMuc3RhdHNbMTBdIC8gKHRoaXMuc3RhdHNbMTBdICsgdGhpcy5zdGF0c1sxMV0pKSAqIDEwMCxcclxuICAgICAgICAgICAgKHRoaXMuc3RhdHNbMTRdIC8gKHRoaXMuc3RhdHNbMTRdICsgdGhpcy5zdGF0c1sxNV0pKSAqIDEwMCxcclxuICAgICAgICAgICAgKHRoaXMuc3RhdHNbMTJdIC8gKHRoaXMuc3RhdHNbMTJdICsgdGhpcy5zdGF0c1sxM10pKSAqIDEwMCxcclxuICAgICAgICAgICAgKHRoaXMuc3RhdHNbMTZdIC8gKHRoaXMuc3RhdHNbMTZdICsgdGhpcy5zdGF0c1sxN10pKSAqIDEwMCxcclxuICAgICAgICAgICAgKHRoaXMuc3RhdHNbMThdIC8gKHRoaXMuc3RhdHNbMThdICsgdGhpcy5zdGF0c1sxOV0pKSAqIDEwMCxcclxuICAgICAgICAgICAgKHRoaXMuc3RhdHNbMjJdIC8gKHRoaXMuc3RhdHNbMjJdICsgdGhpcy5zdGF0c1syM10pKSAqIDEwMF0sXHJcbiAgICAgICAgICBsYWJlbDogJ3dpbnMnfSxcclxuICAgICAgXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19