import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


Amplify.configure({
  Interactions: {
    bots: {
      BookTrip: {
        name: 'BookTrip', // Name your AWS Lex Chatbot
        alias: '$LATEST',
        region: 'us-east-1'
      }
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
