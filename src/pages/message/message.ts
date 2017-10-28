import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/message/message.interface';
import { MESSAGE_LIST } from '../../mocks/messages/messages.mock';

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

  messageList = MESSAGE_LIST;
  selectedProfile: Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }


  ionViewDidLoad() {
  this.selectedProfile = this.navParams.get('profile');  console.log('ionViewDidLoad MessagePage');
this.messageList.forEach(m=>{
  console.log(m.user.email);
});  
 
}

}
