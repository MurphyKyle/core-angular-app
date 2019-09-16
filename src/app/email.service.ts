import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(message: string) {
    // http request to send a message

  }

}
