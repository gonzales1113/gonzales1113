import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';

const routes: Routes = [
  // your other routes here...

  { path: '', component: Homepage },        // root path loads Homepage
  { path: '**', component: Homepage }       // catch-all also loads Homepage
];
