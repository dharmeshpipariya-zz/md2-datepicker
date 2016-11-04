import {Routes} from '@angular/router';
import {Home} from './demo-app';
import {DatepickerDemo} from '../datepicker/datepicker-demo';

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'datepicker', component: DatepickerDemo},
];
