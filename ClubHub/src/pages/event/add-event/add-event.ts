import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
	event={
    isOncampus:null,
		title:null,
		club:null,
    tags:null,
    memberRestriction:null,
    	memberFee:null,
      nonmemberFee:null,
    	description:null,
    	email:null,
      number:null,
    	tag:null, 
      locationCity:"Brisbane",
      locationPostcode:null,
      locationSuburb:null,
      locationStreet:null,
      locationCampus:null,
      locationDetails:null,
      startTime:null,
      endTime:null,
      registrationDeadline:null,
	}
   hasImage:boolean;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private firebaseProvider:FirebaseServiceProvider ) {
  	this.hasImage=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addEvent(event){
    console.log(this.event);
    if(this.event.title==null){
      this.alert("Club title needed!");
    }else if(this.event.tags==null){
      this.alert("Tags needed!")
    }else if(this.event.memberFee==null){
      this.alert("MemberFee needed!")
    }else if(this.event.nonmemberFee==null){
      this.alert("nonmemberFee needed!")
    }else if(this.event.description==null){
      this.alert("Description needed!")
    }else if(this.event.email==null){
      this.alert("Email needed!")
    }else if(this.event.registrationDeadline==null){
      this.alert("Registration deadline needed!")
    }else if(this.event.endTime==null){
      this.alert("End time needed!")
    }else if(this.event.startTime==null){
      this.alert("Start time needed!")
    }else if(this.event.number==null){
      this.alert("Contact number needed!")
    }else{
          this.firebaseProvider.addEvent(this.event);
          this.navCtrl.pop();
          this.alert("Event Created");
    }
  }



  
  alert(message: string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }

  showImage(){
    this.hasImage=true;
  }

}
