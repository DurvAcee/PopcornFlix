import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie, moviearray } from '../movieArray';
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  
  mo:movie[] = moviearray;
 

   checkIndex(i: number){
    if (i<3 || i == 16){
      return true
    }
    return false
  }

  checkIndex2(i: number){
    if (i>2 && i<9) {
      return true
    }
    return false
  }

  checkIndex3(i: number){
    if (i>=9 && i < 16 || i == 17) {
      return true
    }
    return false
  }

  checkIndex4(i: number){
    if (i == 3 || i>18){
      return true;
    }
    return false;
  }

  m1Details(m:any){
    this.router.navigate(['/movie',m]);
  }

}
