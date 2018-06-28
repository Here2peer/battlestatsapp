"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.isMobile = false;
        this.change = new core_1.EventEmitter();
    }
    NavigationService.prototype.toggle = function () {
        this.isMobile = !this.isMobile;
        var body = document.body;
        if (this.isMobile) {
            body.classList.add('with--sidebar');
        }
        else {
            body.classList.remove('with--sidebar');
        }
        this.change.emit(this.isMobile);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NavigationService.prototype, "change", void 0);
    NavigationService = __decorate([
        core_1.Injectable()
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStEO0FBRy9EO0lBREE7UUFHRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRVAsV0FBTSxHQUEwQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWEvRCxDQUFDO0lBWEMsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBWFM7UUFBVCxhQUFNLEVBQUU7a0NBQVMsbUJBQVk7cURBQStCO0lBSmxELGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO09BQ0EsaUJBQWlCLENBaUI3QjtJQUFELHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XHJcblxyXG4gIGlzTW9iaWxlID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5pc01vYmlsZSA9ICF0aGlzLmlzTW9iaWxlO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3dpdGgtLXNpZGViYXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd2l0aC0tc2lkZWJhcicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmlzTW9iaWxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==