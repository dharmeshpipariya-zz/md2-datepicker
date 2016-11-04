var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { MdRippleModule, RtlModule, PortalModule, OverlayModule, A11yModule, StyleCompatibilityModule } from './core/index';
import { MdDatepickerModule } from './datepicker/index';
var MD2_MODULES = [
    MdDatepickerModule,
    MdRippleModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    A11yModule,
    StyleCompatibilityModule,
];
export var Md2DatepickerRootModule = (function () {
    function Md2DatepickerRootModule() {
    }
    Md2DatepickerRootModule = __decorate([
        NgModule({
            imports: [
                MdDatepickerModule.forRoot(),
                MdRippleModule.forRoot(),
                PortalModule.forRoot(),
                RtlModule.forRoot(),
                // These modules include providers.
                A11yModule.forRoot(),
                OverlayModule.forRoot(),
                StyleCompatibilityModule.forRoot(),
            ],
            exports: MD2_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], Md2DatepickerRootModule);
    return Md2DatepickerRootModule;
}());
export var Md2DatepickerModule = (function () {
    function Md2DatepickerModule() {
    }
    Md2DatepickerModule.forRoot = function () {
        return { ngModule: Md2DatepickerRootModule };
    };
    Md2DatepickerModule = __decorate([
        NgModule({
            imports: MD2_MODULES,
            exports: MD2_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], Md2DatepickerModule);
    return Md2DatepickerModule;
}());

//# sourceMappingURL=module.js.map
