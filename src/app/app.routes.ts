import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Animaltest } from './animaltest/animaltest';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'animaltest', component: Animaltest },
  { path: '**', redirectTo: '' } // optional fallback to homepage
];
