import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EventPage } from '../pages/event/event';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClubPage } from '../pages/club/club';
import { MyClubsPage } from '../pages/club/myClubs/myClubs';
import { AllClubsPage } from '../pages/club/allClubs/allClubs';
import { ClubTabsPage } from '../pages/club/clubTabs/clubTabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ClubTabsPage
  ],


  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    ClubTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
