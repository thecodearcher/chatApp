import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseObjectObservable,FirebaseListObservable} from 'firebase/database';
import { User} from 'firebase/app';
import {Profile} from '../../models/profile/profile.interface';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthProvider } from '../auth/auth.service';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {


  profileObject: FirebaseObjectObservable<Profile>;
  
  profileList: FirebaseListObservable<Profile>;

  constructor(private authService: AuthProvider,private db: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  searchUser(firstName: string) {
    const query = this.db.list('/profiles',query=>
      query.orderByChild('firstName').equalTo(firstName)    
);
console.log(query);

return query.valueChanges().take(1);
  }

  getAuthenticatedUserProfile(){
    return this.authService.getAuthenticatedUser()
    .map(user=>user.uid)
    .mergeMap(authId=>this.db.object(`profiles/${authId}`).snapshotChanges())
    .take(1);
  }

  getProfile(user: User){
    this.profileObject=this.db.object(`/profiles/${user.uid}`).snapshotChanges();
  return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile:Profile){
this.profileObject = this.db.object(`/profiles/${user.uid}`);
try {
  await this.profileObject.set(profile);
  return true;
} catch (e) {
  console.error(e);
  return false;
  }
}


}
