# MD2-DATEPICKER

Angular2 based Material Design datepicker component.

[![Build Status](https://travis-ci.org/dharmeshpipariya/md2-datepicker.svg?branch=master)](https://travis-ci.org/dharmeshpipariya/md2-datepicker)

## Quick start

1. A recommended way to install ***md2-datepicker*** is through [npm](https://www.npmjs.com/package/md2-datepicker) package manager using the following command:

  `npm install md2-datepicker --save`

2. Setup `MD2-DATEPICKER` in your project
```ts
// system.config.js
// ================
{
  map: {
    'md2-datepicker': 'node_modules/md2-datepicker'
  },
  packages: {
    'md2-datepicker': {
	  format: 'cjs',
      main: 'md2datepicker.umd.js'
    }
  }
}


// app.module.ts
// =============

import { Md2DatepickerModule }  from 'md2-datepicker';
@NgModule({
  imports: [
    ...,
    Md2DatepickerModule.forRoot(),
  ],
  ...
})
export class AppModule { }

```

3. More information regarding of using ***md2-datepicker*** is located in
  [demo](http://dharmeshpipariya.github.io/md2-datepicker) and [demo sources](https://github.com/dharmeshpipariya/md2-datepicker/tree/master/src/demo-app).
