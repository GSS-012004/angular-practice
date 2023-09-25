import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


// const routes: Routes = [
//   {path: 'first-component', component : FirstComponent},
//   {path: 'second-component', component: SecondComponent},
//   // {path: '**', component: PageNotFoundComponent},
// ];

const routes: Routes = [
    { path: '', component: HomeComponent},
  
   //{ path:'', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'First', component: FirstComponent },
  { path: 'Second', component: SecondComponent },
  { path: '**',component: ErrorComponent },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
