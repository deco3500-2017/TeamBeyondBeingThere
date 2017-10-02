import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';

import {ClubTabsPage} from '../tabs/clubTabs/clubTabs';

@Component({
  selector: 'page-about',
  templateUrl: 'club.html'
})

export class ClubPage {
  rootClubPage:any=ClubTabsPage;
  
  constructor(public navCtrl: NavController,public app:App) {
  }

}