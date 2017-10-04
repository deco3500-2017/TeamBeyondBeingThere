import { Component } from '@angular/core';

import { MyEventsPage } from '../../event/myEvents/myEvents';
import { AllEventsPage } from '../../event/allEvents/allEvents';


@Component({
  templateUrl: 'eventTabs.html',
  selector: 'page-about',
})
export class EventTabsPage {

  allEventsRoot = AllEventsPage;
  myEventsRoot = MyEventsPage;

  constructor() {

  }
}
