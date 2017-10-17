import { Component } from '@angular/core';
import { NavController,AlertController,ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//Dont delete this!!!
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
//,public firebaseService:FirebaseServiceProvider

import { EntryPage } from '../entry/entry';

import * as firebase from 'firebase'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  events:any;
  tickets:any;
  bookmarks:any;

  email:string;
  pw:string;

  user={
    loggedIn:false,
    email:"",
    name:"",
  }


  facebook={
    loggedIn:false,
    name:"anonymous",
    email:"",
    profilePicture:"",
  }

  constructor(public modalCtrl:ModalController,public fire:AngularFireAuth,public navCtrl: NavController,private alertCtrl: AlertController,public firebaseService:FirebaseServiceProvider) {   
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
    this.user.loggedIn=true;
    this.user.email=this.fire.auth.currentUser.email;
    this.user.name="Ethan";
    this.events=this.firebaseService.getEvents();
    this.tickets=this.firebaseService.getTickets();
    this.bookmarks=this.firebaseService.getBookmarks();
  }

/*
  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log(res);
      this.alert('You have logged in');
      this.facebook.loggedIn=true;
      this.facebook.name=res.user.displayName;
      this.facebook.email=res.user.email;
      this.facebook.profilePicture = res.user.photoURL;
      this.events=this.firebaseService.getEvents();
      this.tickets=this.firebaseService.getTickets();
      this.bookmarks=this.firebaseService.getBookmarks();
    })
    .catch(error =>{
      console.log(error);
      this.alert(error.message);
    })
  }
*/


  loginWithAccount(){
    let modal=this.modalCtrl.create(EntryPage);

    modal.onDidDismiss((data)=>{
      console.log(data);
    });
    modal.present();
    /*
    this.fire.auth.signInWithEmailAndPassword(this.email,this.pw)
    .then(res=>{
      console.log(res);
      this.user.email=this.fire.auth.currentUser.email;
      this.user.name="Ethan";
      this.user.loggedIn=true;
      
      this.alert("logged in")
    })
    */
  }


  logout(){
    this.fire.auth.signOut()
    .then(res =>{
      console.log(res);
      this.alert('You have logged out');
      this.user.email=null;
      this.user.name="anonymous";
      this.user.loggedIn=false;

      /*
      this.facebook.loggedIn = false;
      this.facebook.name="anonymous";
      this.facebook.email=null;
      this.facebook.profilePicture=null;
      */
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



dosomething(){
  console.log("worked");
}



}

