# md2-datepicker

Native Angular2 Material Datepicker component.

### Selector

```html
<md2-datepicker></md2-datepicker>
<md2-datepicker [(ngModel)]="myDate"
                [min-date]="minDate"
                [max-date]="maxDate"
                [date-filter]="onlyWeekendsPredicate"
                [open-on-focus]="openOnFocus"
                [placeholder]="Enter date"
                [disabled]="disabled">
</md2-datepicker>
```