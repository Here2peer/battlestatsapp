"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var navigation_service_1 = require("./navigation.service");
var router_1 = require("@angular/router");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(navigationService, router) {
        this.navigationService = navigationService;
        this.router = router;
        this.mobile = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.change.subscribe(function (mobile) {
            _this.mobile = mobile;
        });
    };
    NavigationComponent.prototype.searchPlayer = function (playername) {
        this.router.navigate(['/player-list'], { queryParams: { playername: playername, search: 1 } });
    };
    __decorate([
        core_1.HostBinding('class.is-mobile'),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "mobile", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css'],
            providers: [navigation_service_1.NavigationService]
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService, router_1.Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwyREFBdUQ7QUFFdkQsMENBQXVDO0FBUXZDO0lBSUUsNkJBQW9CLGlCQUFvQyxFQUFVLE1BQWM7UUFBNUQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGaEYsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUdmLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLFVBQVU7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBZEQ7UUFEQyxrQkFBVyxDQUFDLGlCQUFpQixDQUFDOzt1REFDaEI7SUFGSixtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDO3lDQUt1QyxzQ0FBaUIsRUFBa0IsZUFBTTtPQUpyRSxtQkFBbUIsQ0FvQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uU2VydmljZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge01hdE1lbnVUcmlnZ2VyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW05hdmlnYXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1tb2JpbGUnKVxyXG4gIG1vYmlsZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUobW9iaWxlID0+IHtcclxuICAgICAgdGhpcy5tb2JpbGUgPSBtb2JpbGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFBsYXllcihwbGF5ZXJuYW1lKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGxheWVyLWxpc3QnXSwgeyBxdWVyeVBhcmFtczogeyBwbGF5ZXJuYW1lOiBwbGF5ZXJuYW1lLCBzZWFyY2g6IDF9fSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==