import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // points to app.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
