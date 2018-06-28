"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("isomorphic-fetch");
var NewsService = /** @class */ (function () {
    function NewsService() {
        this.key = '47E81668C8A02D8BC4341E13C666BE0B\n';
        this.appid = '504370'; // steam game id, in this case battlerite.
        this.count = 10; // how many news entry to be returned.
        this.maxlength = 100; // max length of each news entry.
        this.format = 'json'; // can be json, xml or vdf.
        this.link = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' +
            this.appid + '&count=' + this.count + '&maxlength=' + this.maxlength + '&format=' + this.format; // actual link to the api end-point.
    }
    NewsService.prototype.fetch = function (requestMethod) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = __assign({}, (requestMethod === 'POST' ? {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify('appnews'),
                        } : {}), { method: requestMethod });
                        return [4 /*yield*/, fetch(this.link, req)];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) {
                            throw new Error("unexpected status " + res.status);
                        }
                        return [2 /*return*/, res.json()];
                }
            });
        });
    };
    NewsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDRCQUEwQjtBQUsxQjtJQVVFO1FBVEEsUUFBRyxHQUFHLG9DQUFvQyxDQUFDO1FBQzNDLFVBQUssR0FBRyxRQUFRLENBQUMsQ0FBQywwQ0FBMEM7UUFDNUQsVUFBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHNDQUFzQztRQUNsRCxjQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsaUNBQWlDO1FBQ2xELFdBQU0sR0FBRyxNQUFNLENBQUMsQ0FBQywyQkFBMkI7UUFDNUMsU0FBSSxHQUFHLG9FQUFvRTtZQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsb0NBQW9DO0lBR3ZILENBQUM7SUFFSiwyQkFBSyxHQUFsQixVQUNFLGFBQTZCOzs7Ozs7d0JBRXZCLEdBQUcsZ0JBQ0osQ0FBQyxhQUFhLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsT0FBTyxFQUFFO2dDQUNQLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ25DOzRCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt5QkFDaEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ0osRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQzdCLENBQUM7d0JBQ1UscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUE7O3dCQUFqQyxHQUFHLEdBQUcsU0FBMkI7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBcUIsR0FBRyxDQUFDLE1BQVEsQ0FBQyxDQUFDO3dCQUFDLENBQUM7d0JBQ3BFLHNCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQzs7OztLQUNuQjtJQTNCVSxXQUFXO1FBSHZCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcclxuICBrZXkgPSAnNDdFODE2NjhDOEEwMkQ4QkM0MzQxRTEzQzY2NkJFMEJcXG4nO1xyXG4gIGFwcGlkID0gJzUwNDM3MCc7IC8vIHN0ZWFtIGdhbWUgaWQsIGluIHRoaXMgY2FzZSBiYXR0bGVyaXRlLlxyXG4gIGNvdW50ID0gMTA7IC8vIGhvdyBtYW55IG5ld3MgZW50cnkgdG8gYmUgcmV0dXJuZWQuXHJcbiAgbWF4bGVuZ3RoID0gMTAwOyAvLyBtYXggbGVuZ3RoIG9mIGVhY2ggbmV3cyBlbnRyeS5cclxuICBmb3JtYXQgPSAnanNvbic7IC8vIGNhbiBiZSBqc29uLCB4bWwgb3IgdmRmLlxyXG4gIGxpbmsgPSAnaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lTdGVhbU5ld3MvR2V0TmV3c0ZvckFwcC92MDAwMi8/YXBwaWQ9JyArXHJcbiAgICB0aGlzLmFwcGlkICsgJyZjb3VudD0nICsgdGhpcy5jb3VudCArICcmbWF4bGVuZ3RoPScgKyB0aGlzLm1heGxlbmd0aCArICcmZm9ybWF0PScgKyB0aGlzLmZvcm1hdDsgLy8gYWN0dWFsIGxpbmsgdG8gdGhlIGFwaSBlbmQtcG9pbnQuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmV0Y2goXHJcbiAgICByZXF1ZXN0TWV0aG9kOiAnR0VUJyB8ICdQT1NUJyxcclxuICApIHtcclxuICAgIGNvbnN0IHJlcSA9IHtcclxuICAgICAgLi4uKHJlcXVlc3RNZXRob2QgPT09ICdQT1NUJyA/IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgnYXBwbmV3cycpLFxyXG4gICAgICB9IDoge30pLFxyXG4gICAgICAuLi57IG1ldGhvZDogcmVxdWVzdE1ldGhvZCB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMubGluaywgcmVxKTtcclxuICAgIGlmICghcmVzLm9rKSB7IHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCBzdGF0dXMgJHtyZXMuc3RhdHVzfWApOyB9XHJcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==