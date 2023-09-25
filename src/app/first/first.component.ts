import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor( private route: Router ,private activatedRoute :ActivatedRoute) { }

  ngOnInit() :void
  {

  }
  navigateToHome(){
     this.route.navigate(['Home'],{relativeTo: this.activatedRoute})
    //this.route.navigateByUrl('Home')
  }

  



}
