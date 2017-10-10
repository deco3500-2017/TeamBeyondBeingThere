import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd:AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
}
    getEvents(){
      console.log(this.afd.list('/events/'));
    	return this.afd.list('/events/');
    }

    getBookmarks(){
      console.log(this.afd.list('/bookmarks/'));
      return this.afd.list('/events/');
    }


    getTickets(){
      console.log(this.afd.list('/tickets/'));
      return this.afd.list('/events/');
    }

    addEvent(event){
    	this.afd.list('/events/').push(event);
    }

    removeEvent(id){
    	this.afd.list('/events/').remove(id);
    }

}
