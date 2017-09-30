import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { EventPage } from '../pages/event/event';
import { EventDetailPage } from '../pages/event/eventDetail/eventDetail';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClubPage } from '../pages/club/club';
import { MyClubsPage } from '../pages/club/myClubs/myClubs';
import { AllClubsPage } from '../pages/club/allClubs/allClubs';
import { ClubTabsPage } from '../pages/club/clubTabs/clubTabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


const firebaseAuth = {
    apiKey: "AIzaSyCkJh51QufXF7wEfpuR1_L6g5yUyGBFWew",
    authDomain: "uq-clubhub.firebaseapp.com",
    databaseURL: "https://uq-clubhub.firebaseio.com",
    projectId: "uq-clubhub",
    storageBucket: "uq-clubhub.appspot.com",
    messagingSenderId: "626079250531"
  };


@NgModule({
  declarations: [
    MyApp,
    EventPage,
    ProfilePage,
    ClubPage,
    HomePage,
    TabsPage,
    MyClubsPage,
    AllClubsPage,
    ClubTabsPage,
    EventDetailPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
  ],


  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],


  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    EventPage,
    ProfilePage,
    ClubPage,
    HomePage,
    TabsPage,
    MyClubsPage,
    AllClubsPage,
    ClubTabsPage,
    EventDetailPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
