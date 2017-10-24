import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import {LoginResponse} from '../../models/login/login-response.interface';
import { DataProvider } from '../../providers/data/data.service';
import {User} from 'firebase/app';

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

  constructor(private data: DataProvider, private navCtrl:NavController,private toast:ToastController  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(event: LoginResponse){
  if(!event.error){
    this.toast.create({
      message: `Welcome To Beep, ${event.result.email}`,
      duration: 3000
    }).present();
    this.data.getProfile(<User>event.result).subscribe(profile=>{
      console.log(profile.payload.val());
      profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
    });
    
  }else{
    this.toast.create({
      message: event.error.message,
      duration:3000
    }).present();
  }
console.log(event);
}  
}
