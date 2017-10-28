import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat.service';
import { Channel } from '../../models/channel/channel.interface';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  channelList: Observable<Channel[]>;
  constructor(private chat: ChatProvider, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.getChannels();
    console.log('ionViewDidLoad ChannelPage');
  }

  showAddChannelDialog(){
this.alertCtrl.create({
  title: "Channel Name",
  inputs: [{
    name: 'channelName'
  }],
  buttons: [{
    text: 'Cancel',
    role: 'cancel'
  },
{
  text: 'Add',
  handler: data=>{
    this.chat.addChannel(data.channelName)
  }
}]
}).present();


  }

  getChannels(){
    this.channelList = this.chat.getChannelList();
     }

     selectChannel(channelName: Channel){
       this.navCtrl.push('ChannelChatPage', {channelName});
     }
}