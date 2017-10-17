import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';


/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-event-detail',
  templateUrl: 'eventdetail.html',
})
export class EventDetailPage {

  event:any;



  constructor(public viewCtrl:ViewController,public navCtrl: NavController,public navParams:NavParams) {
    this.event=this.navParams.data;
  }

  ionViewDidLoad(){

    console.log(this.navParams.data); 
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }



}
