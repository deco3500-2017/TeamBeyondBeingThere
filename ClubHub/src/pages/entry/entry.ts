import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase'; 

/**
 * Generated class for the EntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})

export class EntryPage {
	facebook={
    loggedIn:false,
    name:null,
    email:null,
    profilePicture:null,
  }

  
  constructor(private fire:AngularFireAuth,public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }

  loginWithFacebook(){
	this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log(res);
      //go to tab page if the user signed in
      this.navCtrl.setRoot(TabsPage);
      this.facebook.loggedIn=true;
      this.facebook.name=res.user.displayName;
      this.facebook.email=res.user.email;
      this.facebook.profilePicture = res.user.photoURL;
    })
    .catch(error =>{
      console.log(error);
      this.alert(error.message);
    })
  }

}




  

  
