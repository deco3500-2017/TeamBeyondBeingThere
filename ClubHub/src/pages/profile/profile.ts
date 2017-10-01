import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';

import firebase from 'firebase'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  facebook={
    loggedIn:false,
    name:null,
    email:null,
    profilePicture:null,
  }



  constructor(private fire:AngularFireAuth,public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  openLoginPage(){
  	this.navCtrl.push(LoginPage);
  }

  openRegisterPage(){
  	this.navCtrl.push(RegisterPage);
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
