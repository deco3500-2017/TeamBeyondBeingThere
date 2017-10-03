import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  facebook={
    loggedIn:false,
    name:"anonymous",
    email:"",
    profilePicture:"",
  }

  constructor(private fire:AngularFireAuth,public navCtrl: NavController,private alertCtrl: AlertController) {
    
    /*
    if(fire.auth.currentUser.email.length==0){
      this.facebook.loggedIn=false;
    }else{
      
      this.facebook.email=fire.auth.currentUser.email;
      this.facebook.loggedIn=true;
      this.facebook.name=fire.auth.currentUser.displayName;
      this.facebook.profilePicture=fire.auth.currentUser.photoURL;
      
    }
    */
    
  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log(res);
      this.alert('You have logged in');
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

  logout(){
    this.fire.auth.signOut()
    .then(res =>{
      console.log(res);
      this.alert('You have logged out');
      this.facebook.loggedIn = false;
      this.facebook.name="anonymous";
      this.facebook.email=null;
      this.facebook.profilePicture=null;
    })
    .catch(error =>{
      console.log(error);
      this.alert(error.message);
      this.facebook.loggedIn=true;
    })
  }


  alert(message: string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }
}
