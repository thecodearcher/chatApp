import {Component, Output, EventEmitter} from '@angular/core';
import { DataProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';

@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent{

    query: string;
    profileList: Profile[];
@Output() selectedProfile: EventEmitter<Profile>;
    constructor(private data:DataProvider){
    this.selectedProfile = new EventEmitter<Profile>();
           console.log(this.query);
    } 

    selectProfile(profile: Profile){
this.selectedProfile.emit(profile); 
    }
    

searchUser(query:string){
    const trimmed = query.trim();

    if(trimmed==query){
this.data.searchUser(query).subscribe(profile=>{
    this.profileList = <Profile[]>profile;
    console.log(this.profileList);
});
}
    }
}