import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2'; 
import { movie,moviearray, mylist } from '../movieArray';
declare var $:any;


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(public router: Router,private actroute:ActivatedRoute) { 
    this.movurl = this.router.url;
    this.loadScripts();
   
  }

  mid:number=0;
  movurl: string = '';
  myList = mylist;
  
  loadScripts() {
    const dynamicScripts = [
       './assets/js/custom.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
 }
  ngOnInit(): void {
    this.mid=parseInt(this.actroute.snapshot.params['id']);

    // $(document).ready(function(){    
    //   $("a").click(function(event: any)
    //     {            
    //       event.preventDefault();
    //     });
    // });

    // scroll window to the top
    $(function() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
  });
}

  mov:movie[]=moviearray;
  i = parseInt(this.actroute.snapshot.params['id']);
  mtitle: string = this.mov[this.i].title;
  murl: string = this.mov[this.i].slide[0];
  mlink: string = this.mov[this.i].mlink;
  
  watchlist(){
    for(let mo of moviearray){
      if(parseInt(mo.id) == this.i){
        mylist.push(mo);
      }
    }

    swal.fire({
      title: 'Awesome!',
      text: this.mtitle+' is added to your Watchlist.',
      imageUrl: this.murl,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Great!'
    });
  }

  watchnow(){
    window.open(this.mlink, '_blank');
    // window.location.href = this.mlink;
  }

  doNothing(){
    
  }

}
