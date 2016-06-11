import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Location} from "@angular/common";

import { Home } from './home';
import { DatepickerComponent } from './components/datepicker/datepicker';

@Component({
  selector: "md2-app",
  templateUrl: "./app/app.html",
  directives: [Home, DatepickerComponent, RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home },
  { path: '/Datepicker', name: 'Datepicker', component: DatepickerComponent }
])
export class AppComponent implements OnInit {
  private isSidenavOpened: boolean = false;

  constructor(private location: Location) { }

  ngOnInit() {
    console.log("Application component initialized ...");
  }

  sidenavToggle() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  isActive(path: string) {
    return this.location.path().startsWith(path);
  }
}