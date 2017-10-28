import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'firebase/database';
import { Channel } from '../../models/channel/channel.interface';

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
  return this.db.list(`channel-names`).valueChanges();
}

}
