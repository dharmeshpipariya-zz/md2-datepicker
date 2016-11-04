"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <h4>Angular2 based Material Design datepicker component.</h4>\n    <hr>\n    <div class=\"home-page\">\n      <a button=\"primary\" href=\"https://github.com/dharmeshpipariya/md2-datepicker\">View on GitHub</a>\n      <a button=\"primary\" href=\"https://github.com/dharmeshpipariya/md2-datepicker/zipball/master\">Download .zip</a>\n      <a button=\"primary\" href=\"https://github.com/dharmeshpipariya/md2-datepicker/tarball/master\">Download .tar.gz</a>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
var DemoApp = (function () {
    function DemoApp(location) {
        this.location = location;
        this.isSidenavOpened = false;
        this.navItems = [
            { name: 'Datepicker', route: 'datepicker' },
        ];
    }
    DemoApp.prototype.ngOnInit = function () {
        console.log('Application component initialized ...');
    };
    DemoApp.prototype.sidenavToggle = function () {
        this.isSidenavOpened = !this.isSidenavOpened;
    };
    DemoApp.prototype.sidenav = function (state) {
        this.isSidenavOpened = state;
        if (this.isSidenavOpened && this.window.innerWidth > 767) {
            this.isSidenavOpened = false;
        }
    };
    DemoApp.prototype.isActive = function (path) {
        return this.location.path() === '/' + path;
    };
    Object.defineProperty(DemoApp.prototype, "window", {
        get: function () { return window; },
        enumerable: true,
        configurable: true
    });
    DemoApp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-app',
            providers: [],
            templateUrl: 'demo-app.html',
            styleUrls: ['demo-app.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;

//# sourceMappingURL=demo-app.js.map
