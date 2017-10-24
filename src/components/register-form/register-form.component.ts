import { Component,Output,EventEmitter } from '@angular/core';
import { ComponentsModule } from '../components.module';

import {Account} from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface';

import {AuthProvider} from '../../providers/auth/auth.service';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
 @Output() registerStatus: EventEmitter<LoginResponse>; 
  constructor(private auth:AuthProvider) {
   this.registerStatus= new EventEmitter<LoginResponse>();
  }

  async register(){
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
      console.log(result);
    } catch (e) {
      this.registerStatus.emit(e);
      console.error(e);
    }
  }

}
