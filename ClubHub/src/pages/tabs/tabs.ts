import { Component } from '@angular/core';

import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { ClubPage } from '../club/club';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = ClubPage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
