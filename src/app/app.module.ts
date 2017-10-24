import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import {FormsModule} from '@angular/forms';
import {FIREBASE_CONFIG} from './app.firebase.config';
import { AuthProvider } from '../providers/auth/auth.service';
import { DataProvider } from '../providers/data/data.service';
@NgModule({
  declarations: [
        MyApp
      ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(FIREBASE_CONFIG),
     AngularFireAuthModule,
     AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DataProvider
  ]
})
export class AppModule {}
