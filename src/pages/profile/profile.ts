import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthProvider } from '../../providers/auth/auth.service';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  loader:Loading;
  existingProfile = {} as Profile;
  constructor(private loading: LoadingController,private auth:AuthProvider,public navCtrl: NavController, public navParams: NavParams) {

    this.loader = loading.create({
      content: 'Logging Out...'
    });
  }

  signOut(){

    this.loader.present();
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
    
    this.loader.dismiss();
  
  }
  navigateToEditProfilePage(){
this.navCtrl.push('EditProfilePage', {existingProfile:this.existingProfile})
}

  getExistingProfile(profile: Profile){
this.existingProfile = profile;
  }
}
