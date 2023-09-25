import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

// const appRoute: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
//   // { path: '**', component: PageNotFoundComponent },  
// ];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     //RouterModule.forRoot(appRoute),
  ],
  providers: [
    // provideRouter(appRoutes,withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // @Input ()
  // set id(heroId: string){
  //   this.hero$ = this.service.getHero(heroId);
  // }
 }
