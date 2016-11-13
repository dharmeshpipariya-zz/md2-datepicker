import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoApp} from './demo-app/demo-app';
import {RouterModule} from '@angular/router';
import {Md2DatepickerModule} from 'md2datepicker';
import {DEMO_APP_ROUTES} from './demo-app/routes';
import {DatepickerDemo} from './datepicker/datepicker-demo';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    Md2DatepickerModule.forRoot(),
  ],
  declarations: [
    DatepickerDemo,
    DemoApp,
  ],
  entryComponents: [
    DemoApp,
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoApp);
  }
}
