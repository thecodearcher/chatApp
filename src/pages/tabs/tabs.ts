import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:String;
  tab2Root:String;
  tab3Root:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.tab1Root='InboxPage';
  this.tab2Root='ChannelPage';
  this.tab3Root='ProfilePage';
  }


}
