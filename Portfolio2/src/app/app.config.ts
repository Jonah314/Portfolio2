import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBog6zoh2HdD8SseALhwkxUGlOxU7--vJg",
  authDomain: "portfolio2-aa50f.firebaseapp.com",
  projectId: "portfolio2-aa50f",
  storageBucket: "portfolio2-aa50f.firebasestorage.app",
  messagingSenderId: "777722129383",
  appId: "1:777722129383:web:7f0e49630dc1b65906eb42"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
