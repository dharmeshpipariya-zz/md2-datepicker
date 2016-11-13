import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDatepicker } from './datepicker';
import { MdCalendar } from './calendar';
import { OverlayModule } from '../core/overlay/overlay-directives';
import { MdRippleModule } from '../core/ripple/ripple';
import { OVERLAY_PROVIDERS } from '../core/overlay/overlay';
export * from './datepicker';

@NgModule({
  imports: [CommonModule, OverlayModule, MdRippleModule],
  exports: [MdDatepicker, MdCalendar],
  declarations: [MdDatepicker, MdCalendar],
})
export class MdDatepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdDatepickerModule,
      providers: [OVERLAY_PROVIDERS]
    };
  }
}
