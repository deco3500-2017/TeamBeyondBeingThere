import { Component } from '@angular/core';

import { MyClubsPage } from '../myClubs/myClubs';
import { AllClubsPage } from '../allClubs/allClubs';


@Component({
  templateUrl: 'clubTabs.html'
})
export class ClubTabsPage {

  allClubRoot = AllClubsPage;
  myClubRoot = MyClubsPage;

  constructor() {

  }
}
