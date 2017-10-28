import { Component } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  text: string;

  constructor() {
    console.log('Hello SendMessageBoxComponent Component');
    this.text = 'Hello World';
  }

}
