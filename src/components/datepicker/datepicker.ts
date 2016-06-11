import {Component, ElementRef, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'md2-datepicker',
  template: `test
  `,
  styles: [`
    
  `],
  host: {
    '(click)': 'clickElement($event)'
  },
  encapsulation: ViewEncapsulation.None
})

export class Md2Datepicker {
  private _el: HTMLElement;
  //visible: boolean = false;
  //@Input('close-on-unfocus') closeOnUnfocus: boolean = true;
  //@Input('close-button') closeButton: boolean = true;
  //@Input('datepicker-header') datepickerHeader: string = '';

  constructor(el: ElementRef) {
    this._el = el.nativeElement;
  }

  clickElement(e: any) {

  }

  getElement(): HTMLElement {
    return this._el;
  }
}