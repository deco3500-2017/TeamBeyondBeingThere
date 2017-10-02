import { Component } from '@angular/core';

import { MyClubsPage } from '../../club/myClubs/myClubs';
import { AllClubsPage } from '../../club/allClubs/allClubs';


@Component({
  templateUrl: 'clubTabs.html',
  selector: 'page-about',
})
export class ClubTabsPage {

  allClubRoot = AllClubsPage;
  myClubRoot = MyClubsPage;

  constructor() {

  }
}
