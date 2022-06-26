import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users, UserVerification } from '../userArray';
import swal from 'sweetalert2'; 
import { SigninService } from '../signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router: Router, private comu_service:SigninService) { 
  }

 
  public userInfo: Users[] = UserVerification;

  ngOnInit(): void {
    this.comu_service.senduser(false);
  }

  loginform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  });

  signup(){
    this.router.navigate(['sign-up']);
  }

  signin(email:string,pwd:string){
    let j=0;
    for(let i=0;i<this.userInfo.length;i++){
      if(this.userInfo[i].email==email && this.userInfo[i].pwd==pwd){
        swal.fire({
          icon: 'success',
          title: 'Awesome...',
          // text: 'Welcome '+this.userInfo[i].name,
          html: "Welcome <b>" +this.userInfo[i].name +"</b>",
          timer: 3800,
          timerProgressBar: true,
          showConfirmButton: false
        });
        this.comu_service.senduser(true);
        this.router.navigate(['browse']);

        j=1;
      }
    }
    if(j==0)
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Wrong Username or Password!'
    })
  }

}
