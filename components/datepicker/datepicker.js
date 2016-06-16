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
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const moment_ = require('moment');
const moment = moment_['default'] || moment_;
let Md2Datepicker = class Md2Datepicker {
    constructor(cd, viewContainer) {
        this.changed = new core_1.EventEmitter();
        cd.valueAccessor = this;
        this.cd = cd;
        this.viewContainer = viewContainer;
        this.el = viewContainer.element.nativeElement;
        this.init();
    }
    ngAfterViewInit() {
        this.initValue();
    }
    openDatepicker() {
        this.isOpened = true;
    }
    closeDatepicker() {
        this.isOpened = false;
    }
    prevYear() {
        this.date.subtract(1, 'Y');
        this.generateCalendar(this.date);
    }
    prevMonth() {
        this.date.subtract(1, 'M');
        this.generateCalendar(this.date);
    }
    nextYear() {
        this.date.add(1, 'Y');
        this.generateCalendar(this.date);
    }
    nextMonth() {
        this.date.add(1, 'M');
        this.generateCalendar(this.date);
    }
    selectDate(e, date) {
        e.preventDefault();
        if (this.isSelected(date))
            return;
        let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
        this.setValue(selectedDate);
        this.closeDatepicker();
        this.changed.emit(selectedDate.toDate());
    }
    generateCalendar(date) {
        let lastDayOfMonth = date.endOf('month').date();
        let month = date.month();
        let year = date.year();
        let n = 1;
        let firstWeekDay = null;
        this.dateValue = date.format('MMMM YYYY');
        this.days = [];
        if (this.firstWeekDaySunday === true) {
            firstWeekDay = date.set('date', 2).day();
        }
        else {
            firstWeekDay = date.set('date', 1).day();
        }
        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }
        for (let i = n; i <= lastDayOfMonth; i += 1) {
            if (i > 0) {
                this.days.push({ day: i, month: month + 1, year: year, enabled: true });
            }
            else {
                this.days.push({ day: null, month: null, year: null, enabled: false });
            }
        }
    }
    isSelected(date) {
        let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
        return selectedDate.toDate().getTime() === this.cannonical;
    }
    generateDayNames() {
        this.dayNames = [];
        let date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
        for (let i = 0; i < 7; i += 1) {
            this.dayNames.push(date.format('ddd'));
            date.add('1', 'd');
        }
    }
    initMouseEvents() {
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('click', (e) => {
            if (!this.isOpened || !e.target)
                return;
            if (this.el !== e.target && !this.el.contains(e.target)) {
                this.closeDatepicker();
            }
        }, false);
    }
    setValue(value) {
        let val = moment(value, this.modelFormat || 'YYYY-MM-DD');
        this.viewValue = val.format(this.viewFormat || 'Do MMMM YYYY');
        this.cd.viewToModelUpdate(val.format(this.modelFormat || 'YYYY-MM-DD'));
        this.cannonical = val.toDate().getTime();
    }
    initValue() {
        setTimeout(() => {
            if (!this.initDate) {
                this.setValue(moment().format(this.modelFormat || 'YYYY-MM-DD'));
            }
            else {
                this.setValue(moment(this.initDate, this.modelFormat || 'YYYY-MM-DD'));
            }
        });
    }
    writeValue(value) {
        if (!value)
            return;
        this.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    init() {
        this.isOpened = false;
        this.date = moment();
        this.firstWeekDaySunday = false;
        this.generateDayNames();
        this.generateCalendar(this.date);
        this.initMouseEvents();
    }
};
__decorate([
    core_1.Input('model-format'), 
    __metadata('design:type', String)
], Md2Datepicker.prototype, "modelFormat", void 0);
__decorate([
    core_1.Input('view-format'), 
    __metadata('design:type', String)
], Md2Datepicker.prototype, "viewFormat", void 0);
__decorate([
    core_1.Input('init-date'), 
    __metadata('design:type', String)
], Md2Datepicker.prototype, "initDate", void 0);
__decorate([
    core_1.Input('first-week-day-sunday'), 
    __metadata('design:type', Boolean)
], Md2Datepicker.prototype, "firstWeekDaySunday", void 0);
__decorate([
    core_1.Input('static'), 
    __metadata('design:type', Boolean)
], Md2Datepicker.prototype, "isStatic", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], Md2Datepicker.prototype, "changed", void 0);
Md2Datepicker = __decorate([
    core_1.Component({
        selector: 'md2-datepicker[ngModel]',
        template: `
  <input type="text"
         class="md2-datepicker-input"
         (focus)="openDatepicker()"
         [value]="viewValue"
         [hidden]="isStatic"
         readonly>

  <div class="md2-datepicker" *ngIf="isStatic || isOpened" [ngClass]="{ static: isStatic }">
    <div class="controls">
      <div class="left">
        <i class="fa fa-backward prev-year-btn" (click)="prevYear()"></i>
        <i class="fa fa-angle-left prev-month-btn" (click)="prevMonth()"></i>
      </div>
      <span class="date">
        {{ dateValue }}
      </span>
      <div class="right">
        <i class="fa fa-angle-right next-month-btn" (click)="nextMonth()"></i>
        <i class="fa fa-forward next-year-btn" (click)="nextYear()"></i>
      </div>
    </div>
    <div class="day-names">
      <span *ngFor="#dn of dayNames">
        <span>{{ dn }}</span>
      </span>
    </div>
    <div class="calendar">
      <span *ngFor="let d of days; let i = index;">
        <span class="day" [ngClass]="{'disabled': !d.enabled, 'selected': isSelected(d)}" (click)="selectDate($event, d)">
          {{ d.day }}
        </span>
      </span>
    </div>
  </div>
  `,
        styles: [`
  .md2-datepicker-input {
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  .md2-datepicker {
    position: absolute;
    z-index: 99;
    width: 250px;
    background: #fff;
    font-size: 12px;
    color: #565a5c;
    display: inline-block;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    margin: 0;
    padding: 0;
  }

  .md2-datepicker > .controls {
    width: 250px;
    display: inline-block;
    padding: 5px 0 0 0;
  }

  .md2-datepicker > .controls i {
    font-size: 25px;
    cursor: pointer;
  }

  .md2-datepicker > .controls > .left {
    width: 35px;
    display: inline-block;
    float: left;
    margin: 5px 0 0 3px;
  }

  .md2-datepicker > .controls > .left > i.prev-year-btn {
    float: left;
    display: block;
    font-size: 14px;
    opacity: 0.4;
  }

  .md2-datepicker > .controls > .left > i.prev-month-btn {
    float: left;
    margin: -5px 0 0 9px;
    display: block;
  }

  .md2-datepicker > .controls > span.date {
    width: 170px;
    text-align: center;
    font-size: 14px;
    color: #565a5c;
    font-weight: bold;
    float: left;
    padding: 3px 0 0 0;
  }

  .md2-datepicker > .controls > .right {
    width: 35px;
    display: inline-block;
    float: right;
    margin: 5px 0 0 0;
  }

  .md2-datepicker > .controls > .right > i.next-year-btn {
    float: left;
    display: block;
    font-size: 14px;
    opacity: 0.4;
  }

  .md2-datepicker > .controls > .right > i.next-month-btn {
    float: left;
    margin: -6px 9px 0 0;
  }

  .md2-datepicker > .day-names {
    width: 250px;
    border-bottom: 1px solid #c4c4c4;
    display: inline-block;
  }

  .md2-datepicker > .day-names > span {
    width: 35.7px;
    text-align: center;
    color: #82888a;
    float: left;
    display: block;
  }

  .md2-datepicker > .calendar {
    width: 255px;
    display: inline-block;
    margin: -3px 0 -3.5px -1px;
    padding: 0;
  }

  .md2-datepicker > .calendar > span > span.day {
    width: 35px;
    height: 35px;
    border-left: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    float: left;
    display: block;
    color: #565a5c;
    text-align: center;
    font-weight: bold;
    line-height: 35px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    cursor: pointer;
  }

  .md2-datepicker > .calendar > span:last-child > span.day {
    border-right: 1px solid #c4c4c4;
  }

  .md2-datepicker > .calendar > span:nth-child(7n) > span.day {
    border-right: none;
  }

  .md2-datepicker > .calendar > span > span.day.disabled {
    border-left: 1px solid transparent;
    cursor: default;
    pointer-events: none;
  }

  .md2-datepicker > .calendar > span > span.day:hover {
    background: #2193b0;
    color: #fff;
  }

  .md2-datepicker > .calendar > span > span.day.selected {
    background: #186c81;
    cursor: default;
    pointer-events: none;
    color: #fff;
  }

  .md2-datepicker.static {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  .md2-datepicker.static > .controls {
    width: 100%;
    text-align: center;
    background-color: #eee;
    padding: 5px 0;
  }

  .md2-datepicker.static > .controls > .left > i.prev-month-btn {
    margin-top: -6px;
  }

  .md2-datepicker.static > .controls > span.date {
    width: auto;
    float: none;
    display: inline-block;
    padding-top: 4px;
  }

  .md2-datepicker.static > .day-names {
    width: 100%;
    background-color: #f9f9f9;
  }

  .md2-datepicker.static > .day-names > span {
    width: calc(100%/7);
  }

  .md2-datepicker.static > .calendar {
    width: 100%;
  }

  .md2-datepicker.static > .calendar > span > span.day {
    width: calc(100%/7 - 1px);
    height: 50px;
    line-height: 50px;
  }
  `],
        providers: [],
        directives: [common_1.FORM_DIRECTIVES],
        pipes: []
    }), 
    __metadata('design:paramtypes', [common_1.NgModel, core_1.ViewContainerRef])
], Md2Datepicker);
exports.Md2Datepicker = Md2Datepicker;

//# sourceMappingURL=datepicker.js.map
