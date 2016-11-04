import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'home',
  template: `
    <h4>Angular2 based Material Design datepicker component.</h4>
    <hr>
    <div class="home-page">
      <a button="primary" href="https://github.com/dharmeshpipariya/md2-datepicker">View on GitHub</a>
      <a button="primary" href="https://github.com/dharmeshpipariya/md2-datepicker/zipball/master">Download .zip</a>
      <a button="primary" href="https://github.com/dharmeshpipariya/md2-datepicker/tarball/master">Download .tar.gz</a>
    </div>
  `
})
export class Home { }

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app.html',
  styleUrls: ['demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoApp {
  private isSidenavOpened: boolean = false;
  navItems = [
    { name: 'Datepicker', route: 'datepicker' },
  ];

  constructor(private location: Location) { }

  ngOnInit() {
    console.log('Application component initialized ...');
  }

  sidenavToggle() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  sidenav(state: boolean) {
    this.isSidenavOpened = state;
    if (this.isSidenavOpened && this.window.innerWidth > 767) {
      this.isSidenavOpened = false;
    }
  }

  isActive(path: string) {
    return this.location.path() === '/' + path;
  }

  private get window(): Window { return window; }
}
