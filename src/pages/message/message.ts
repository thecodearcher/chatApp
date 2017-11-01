import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/message/message.interface';
import { AuthProvider } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { ChatProvider } from '../../providers/chat/chat.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  userId: string;
  userProfile: Profile;
  

  messageList: any;
   selectedProfile: Profile;
  constructor(private chat: ChatProvider, private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }
  a:any;


  ionViewWillLoad() {
  this.selectedProfile = this.navParams.get('profile');
  
  this.data.getAuthenticatedUserProfile()
  .subscribe(profile=>{
    this.userProfile =   profile.payload.val();
    this.userId =   profile.key;
  });
  
//  this.messageList=this.chat.getChat(this.selectedProfile.$key);

   
   this.chat.getChat(this.selectedProfile.$key)
   .subscribe(data=>{
     this.messageList = data;
      
    console.log(this.messageList);/* 
    console.log(data.map(s=>s.userFromProfile.firstName));
    console.log(data.map(s=>s.userFromProfile.lastName)); */

  });   
   //s.forEach(s=>
   //s.forEach(s=>
    

console.log(this.messageList);
}

async sendMessage(content: string){
  try{
    const message: Message={
      userToId: this.selectedProfile.$key,
      userToProfile:{
        firstName: this.selectedProfile.firstName,
        lastName: this.selectedProfile.lastName,
      },

      userFromId: this.userId,
      userFromProfile:{
        firstName: this.userProfile.firstName,
        lastName: this.userProfile.lastName,
      },
      content: content,
    }
    console.log(message);
    await this.chat.sendChat(message);
  } catch (e) {
console.log(e);
  }
}



}
