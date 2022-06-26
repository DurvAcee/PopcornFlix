import { Component, OnInit } from '@angular/core';
import { mylist, moviearray, movie } from '../movieArray';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    $(document).ready(() => {
      let navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"];
  
      $('#hero-carousel').owlCarousel({
          items: 1,
          dots: false,
          loop: true,
          margin: 10,
          nav: true,
          navText: [
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          navContainer: '.hero-slide .custom-nav',
          lazyLoad:true,
          rewindNav : true,
          autoPlay : 2500,
          stopOnHover : true
      })
 
     $('#top-movies-slide').owlCarousel({
       items: 6,
       dots: false,
       loop: true,
 
   })
 
   $('.movies-slide').owlCarousel({
     items: 6,
     dots: false,
     nav:true,
     navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
     margin: 15,
     responsive: {
         500: {
             items: 3
         },
         1280: {
             items: 4
         },
         1600: {
             items: 6
         }
     }
 })
  })

  }

  ml = mylist;
  mo:movie[] = moviearray;

  m1Details(m:any){
    this.router.navigate(['/movie',m]);
  }

  checkList(){
    if(this.ml.length  == 0){
    return true;
    }
    return false;
  }
}
