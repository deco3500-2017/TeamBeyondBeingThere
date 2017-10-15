import { Component } from '@angular/core';

import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { ClubPage } from '../club/club';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs-about',
})

export class TabsPage {

  tab1Root = EventPage;
  tab2Root = ClubPage;
  tab3Root = HomePage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
