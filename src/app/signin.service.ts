import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }
  private user_msg_source= new Subject<boolean>();
  user_msg$=this.user_msg_source.asObservable();
  senduser(msg:boolean){
    this.user_msg_source.next(msg);
  }
}
