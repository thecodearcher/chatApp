import {Profile} from '../../models/profile/profile.interface';

const userList: Profile[]=[
    {firstName:"Brian",lastName: "Iyoha",email:"brian@brian.com",avatar:"../assets/image/avatar.png", dateOfBirth:new Date()},
    { firstName: "Brian", lastName: "Black", email: "brian@brian.com", avatar: "../assets/image/avatar.png", dateOfBirth: new Date()},
    { firstName: "Brian", lastName: "Factor", email: "brian@brian.com", avatar: "../assets/image/avatar.png", dateOfBirth: new Date()},
    { firstName: "Brian", lastName: "Daemon", email: "brian@brian.com", avatar: "../assets/image/avatar.png", dateOfBirth: new Date()}
];
export const USER_LIST = userList;