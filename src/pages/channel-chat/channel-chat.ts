import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'firebase/database';
import { Channel } from '../../models/channel/channel.interface';
import { ChatProvider } from '../../providers/chat/chat.service';
import { ChannelMessage } from '../../models/channel/channel-message.interface';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  selectedChannel: Channel;
  channelMessages: Observable<ChannelMessage[]>; 
  
  constructor(private chat: ChatProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.selectedChannel = this.navParams.get('channelName');
    
    this.channelMessages = this.chat.getChannelChat(this.selectedChannel.$key);
    console.log(this.selectedChannel);
    console.log(this.selectedChannel.$key);
  }

  sendMessage(message: string){
    let channelMessage: ChannelMessage={
    content: message,
}

console.log(this.selectedChannel);
this.chat.sendChannelChatMessage(this.selectedChannel.$key,channelMessage);

}

}
