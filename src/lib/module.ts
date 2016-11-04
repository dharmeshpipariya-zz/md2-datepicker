import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  MdRippleModule,
  RtlModule,
  PortalModule,
  OverlayModule,
  A11yModule,
  StyleCompatibilityModule,
} from './core/index';

import { MdDatepickerModule } from './datepicker/index';


const MD2_MODULES = [
  MdDatepickerModule,
  MdRippleModule,
  OverlayModule,
  PortalModule,
  RtlModule,
  A11yModule,
  StyleCompatibilityModule,
];

@NgModule({
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
})
export class Md2DatepickerRootModule { }


@NgModule({
  imports: MD2_MODULES,
  exports: MD2_MODULES,
})
export class Md2DatepickerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: Md2DatepickerRootModule };
  }
}
