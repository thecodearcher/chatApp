import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {
  ngOnInit(): void {
    this.setUserOnline();
    this.getOnlineUsers();
   }

  text: string;
onlineUsers: Observable<Profile[]>;
  constructor(private data:DataProvider, private navCtrl: NavController) {
    console.log('Hello OnlineUsersComponent Component');
    this.text = 'Hello World';
  }

  setUserOnline(){
    this.data.getAuthenticatedUserProfile().subscribe(profile=>{
      this.data.setOnlineUser(profile.payload.val(), profile.key);
    })
  }

  getOnlineUsers(){
this.onlineUsers = this.data.getOnlineUsers();
  }


  openChat(profile: Profile){
    this.navCtrl.push('MessagePage',{profile: profile})
  }
}
