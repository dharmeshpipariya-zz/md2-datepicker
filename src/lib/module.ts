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


const MATERIAL_MODULES = [
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
  exports: MATERIAL_MODULES,
})
export class MaterialRootModule { }


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: MaterialRootModule };
  }
}
