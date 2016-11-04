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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var demo_app_1 = require('./demo-app/demo-app');
var router_1 = require('@angular/router');
var md2_1 = require('md2');
var routes_1 = require('./demo-app/routes');
var datepicker_demo_1 = require('./datepicker/datepicker-demo');
var DemoAppModule = (function () {
    function DemoAppModule(_appRef) {
        this._appRef = _appRef;
    }
    DemoAppModule.prototype.ngDoBootstrap = function () {
        this._appRef.bootstrap(demo_app_1.DemoApp);
    };
    DemoAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes_1.DEMO_APP_ROUTES),
                md2_1.Md2DatepickerModule.forRoot(),
            ],
            declarations: [
                datepicker_demo_1.DatepickerDemo,
                demo_app_1.DemoApp,
            ],
            entryComponents: [
                demo_app_1.DemoApp,
            ],
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], DemoAppModule);
    return DemoAppModule;
}());
exports.DemoAppModule = DemoAppModule;

//# sourceMappingURL=demo-app-module.js.map
