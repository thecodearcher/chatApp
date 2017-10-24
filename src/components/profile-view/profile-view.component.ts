import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';
import { User } from 'firebase/app';
import { Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
  
  
  loader: Loading;
  userProfile:Profile;
  

 

  constructor(private loading: LoadingController,private data: DataProvider, private auth: AuthProvider) {
    console.log('Hello ProfileViewComponent Component');
   this.loader = loading.create({
     content: 'Loading Profile...'
   });
  }
  ngOnInit(): void {
    this.loader.present();
      this.auth.getAuthenticatedUser().subscribe((user: User) => {
        this.data.getProfile(user).subscribe((profile) => {
          this.userProfile = <Profile>profile.payload.val();
        this.loader.dismiss();
        });
      });
  }
}
