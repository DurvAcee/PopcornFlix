import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import swal from 'sweetalert2'; 
import { searchlist, moviearray } from './movieArray';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flix2';


  constructor(public router: Router,private com_service:SigninService){
  }

  users:boolean=false;

  ngOnInit(){
    this.com_service.user_msg$
    .subscribe(
      msg=>{
        this.users=msg;
      }
    )
  }

  signout(){
    this.com_service.senduser(false);
    this.router.navigate(["sign-in"]);
  }

  searchbox(mname: string){
    if(mname.length > 0){
    while(searchlist.length > 0){
      searchlist.pop();
    }
      for(let i of moviearray){
        if (i.title.toLowerCase().includes(mname.toLowerCase())){
           if(parseInt(i.id) > 4 ){
          searchlist.push(i);
        }
        }
      }
      this.router.navigate(['search']);
    }
    else{
      this.router.navigate(['browse']);
    }
  
  }
}

