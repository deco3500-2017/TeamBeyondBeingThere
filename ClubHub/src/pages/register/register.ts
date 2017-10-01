import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('fbaccount') fbaccount;
  @ViewChild('password') password;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



  alert(message: string){
    this.alertCtrl.create({
      title:'Information',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }



  signup(){
  	this.fire.auth.createUserWithEmailAndPassword(this.fbaccount.value,this.password.value)
    .then(data =>{
      console.log('got data ', data);
      this.alert('You have signed up successfully!')
    })
    .catch(error =>{
      console.log('got an error ',error);
      this.alert(error.message);
    });
  }
}
