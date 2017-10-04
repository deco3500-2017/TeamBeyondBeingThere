import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EntryPage } from '../pages/entry/entry';
import { EventPage } from '../pages/event/event';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClubPage } from '../pages/club/club';
import { MyClubsPage } from '../pages/club/myClubs/myClubs';
import { AllClubsPage } from '../pages/club/allClubs/allClubs';
import { ClubTabsPage } from '../pages/tabs/clubTabs/clubTabs';
import { ClubDetailPage } from '../pages/club/club-detail/club-detail';
import { AllEventsPage } from '../pages/event/allEvents/allEvents';
import { EventTabsPage } from '../pages/tabs/eventTabs/eventTabs';
import { MyEventsPage } from '../pages/event/myEvents/myEvents';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseServiceProvider } from './../providers/firebase-service/firebase-service';


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
    ClubDetailPage,
    EntryPage,
    AllEventsPage,
    EventTabsPage,
    MyEventsPage,


  ],


  imports: [
    BrowserModule,
    HttpModule,
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
   
    EntryPage,
    ClubDetailPage,

    EventTabsPage,
    AllEventsPage,
    MyEventsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
