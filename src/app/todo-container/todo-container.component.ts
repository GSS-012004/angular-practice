import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})

export class TodoContainerComponent {
  constructor(private route:Router,private activatedRoute :ActivatedRoute){}
  ngOnInit():void{

  }

  navigateToCreate(): void{
    this.route.navigate(['create'],{relativeTo:this.activatedRoute})
  }
  


}
