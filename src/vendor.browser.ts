// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import * as angularCore from '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
// import '@angularclass/hmr';

// RxJS
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

if ('production' === ENV) {
  // Production
  require('@angular/platform-browser');
  angularCore.enableProdMode();
} else {
  // Development
  require('@angular/platform-browser-dynamic');
}
