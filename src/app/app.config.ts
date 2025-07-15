import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-f46a8", appId: "1:962077891198:web:d3fa737b292252cb18d62f", storageBucket: "simple-crm-f46a8.firebasestorage.app", apiKey: "AIzaSyDrqbCGzWU1bWONfCZNh-8UTfxGQHrrSLQ", authDomain: "simple-crm-f46a8.firebaseapp.com", messagingSenderId: "962077891198" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
