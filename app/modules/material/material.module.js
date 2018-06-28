"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatExpansionModule,
                material_1.MatCardModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatInputModule,
                material_1.MatSortModule,
                material_1.MatTabsModule,
                material_1.MatGridListModule
            ],
            exports: [
                material_1.MatExpansionModule,
                material_1.MatCardModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatInputModule,
                material_1.MatSortModule,
                material_1.MatTabsModule,
                material_1.MatGridListModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0ZXJpYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDhDQVUyQjtBQUMzQixtRUFBNkU7QUE4QjdFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBNUIxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsNkJBQWtCO2dCQUNsQix3QkFBYTtnQkFDYixvQ0FBdUI7Z0JBQ3ZCLHdCQUFhO2dCQUNiLHdCQUFhO2dCQUNiLDBCQUFlO2dCQUNmLGdDQUFxQjtnQkFDckIseUJBQWM7Z0JBQ2Qsd0JBQWE7Z0JBQ2Isd0JBQWE7Z0JBQ2IsNEJBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDZCQUFrQjtnQkFDbEIsd0JBQWE7Z0JBQ2Isb0NBQXVCO2dCQUN2Qix3QkFBYTtnQkFDYix3QkFBYTtnQkFDYiwwQkFBZTtnQkFDZixnQ0FBcUI7Z0JBQ3JCLHlCQUFjO2dCQUNkLHdCQUFhO2dCQUNiLHdCQUFhO2dCQUNiLDRCQUFpQjthQUNsQjtTQUNGLENBQUM7T0FDVyxjQUFjLENBQUc7SUFBRCxxQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTWF0Q2FyZE1vZHVsZSxcclxuICBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZSxcclxuICBNYXRNZW51TW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXHJcbiAgTWF0VGFic01vZHVsZSxcclxuICBNYXRJbnB1dE1vZHVsZSwgTWF0U29ydE1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNvcnRNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIE1hdEdyaWRMaXN0TW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUge31cclxuIl19