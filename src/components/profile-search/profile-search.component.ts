import {Component} from '@angular/core';
import { DataProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';

@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent{
    constructor(private data:DataProvider){

    } 

    profileList: Profile[];
query:string;
    searchUser(query:string){
this.data.searchUser(query).subscribe(profile=>{
    this.profileList = profile;
})
    }
}