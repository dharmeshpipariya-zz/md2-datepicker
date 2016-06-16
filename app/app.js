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
const core_1 = require("@angular/core");
const router_deprecated_1 = require("@angular/router-deprecated");
const common_1 = require("@angular/common");
const home_1 = require('./home');
const datepicker_1 = require('./components/datepicker/datepicker');
let AppComponent = class AppComponent {
    constructor(location) {
        this.location = location;
        this.isSidenavOpened = false;
    }
    ngOnInit() {
        console.log("Application component initialized ...");
    }
    sidenavToggle() {
        this.isSidenavOpened = !this.isSidenavOpened;
    }
    isActive(path) {
        return this.location.path().startsWith(path);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "md2-app",
        templateUrl: "./app/app.html",
        directives: [home_1.Home, datepicker_1.DatepickerComponent, router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES]
    }),
    router_deprecated_1.RouteConfig([
        { path: '/', name: 'Home', component: home_1.Home },
        { path: '/Datepicker', name: 'Datepicker', component: datepicker_1.DatepickerComponent }
    ]), 
    __metadata('design:paramtypes', [common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.js.map
