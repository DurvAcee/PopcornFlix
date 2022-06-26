import { Component, OnInit } from '@angular/core';
import {  Users, UserVerification } from '../userArray';
import swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public router: Router) { }
  userdata= new Users('','','','');
  ngOnInit(): void {
  }

  su(){
    let j=0;
    for(let i of UserVerification){
      if(i.email==this.userdata.email){
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This email is already registered'
        })
        j=1;
      }}
      if(j==0){
      swal.fire({
        icon: 'success',
        title: 'Awesome...',
        text: 'Regitered Successfully!..',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
      UserVerification.push(this.userdata)
      this.router.navigate(['sign-in']);
    
    }
  }
}
