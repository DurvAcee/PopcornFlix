import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'; 
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyListComponent } from './my-list/my-list.component'; 
import { SearchListComponent } from './search-list/search-list.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'sign-in',component: SigninComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'browse', component: HomeComponent},
  {path: 'movie-details', component: MovieDetailsComponent},
  // temp
  {path: 'movie/:id',component: MovieDetailsComponent},
  {path: 'mylist',component: MyListComponent},
  {path: 'search', component: SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingcomponents = [LandingpageComponent, SigninComponent, SignUpComponent, HomeComponent, MovieDetailsComponent, MyListComponent, SearchListComponent]                 

