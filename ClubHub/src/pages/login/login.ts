import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('studentnumber') snumber;
	@ViewChild('password') password;

  rootPage


  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  alert(message: string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK'],
    }).present();
  }



  signin(){
  	console.log(this.snumber.value, this.password.value);
    this.fire.auth.signInWithEmailAndPassword(this.snumber.value,this.password.value)
    .then(data=>{
      this.alert("Successed! You are logged in!");
      this.navCtrl.setRoot(LoggedinPage);
      console.log("got some data",this.fire.auth.currentUser.email);
    })
    .catch(error =>{
      console.log("got an error", error);
      this.alert(error.message);
      //this.navCtrl.pop();
    });
  }
}
