import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ClubTabsPage} from './clubTabs/clubTabs';

@Component({
  selector: 'page-about',
  templateUrl: 'club.html'
})

export class ClubPage {
  rootClubPage:any=ClubTabsPage;
  
  constructor(public navCtrl: NavController) {
  }

}