import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'firebase/database';
import { Channel } from '../../models/channel/channel.interface';
import { Observable } from 'rxjs/Observable';
import { ChannelMessage } from '../../models/channel/channel-message.interface';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() 
export class ChatProvider {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
  
  }
addChannel(channelName: string){
  this.db.list(`/channel-names/`).push({name: channelName});
}
getChannelList():FirebaseListObservable<Channel>{
  
  var channelList: [Channel]=[{}];
  this.db.list(`channel-names`).stateChanges().forEach(payload=>{
      
      channelList.push( {
        $key: payload.key,
        name: payload.payload.val().name
    });
    });
   channelList.shift();
  
  return channelList;
}

  getChannelChat(channelKey: string): Observable<ChannelMessage[]> {
    return this.db.list(`channels/${channelKey}`).valueChanges();
}

async sendChannelChatMessage(channelKey: string, message:ChannelMessage ){    
     await this.db.list(`/channels/${channelKey}`).push(message);
}

}
