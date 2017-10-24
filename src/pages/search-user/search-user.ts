import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SearchUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchUserPage');
  }

}
