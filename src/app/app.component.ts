import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'table';
  //  public getJsonValue:any;
  data:any[] = [];
  ppe:any[] = [];
constructor( private http :HttpClient ,public dialog: MatDialog){  }

// ngOnInit():void {
//   this.getMethod();

// }

//  public getMethod(){
//   this.http.get('http://192.168.1.77:7000/live_data1').subscribe((data) => {
//     console.log (data);
//     this.getJsonValue = data;
//   });
// }


// ngOnInit(): void {
//   this.http.get('http://192.168.1.77:7000/live_data1').subscribe((response:{"message":"data not found","success":false}) => {
//     this.data = response;
//   });
// }

ngOnInit(): void {
  this.http.get('http://192.168.1.77:7000/get_ra_camera_details').subscribe((response :any) => {
  //  console.log(this.data = response.message);
   this.data = response.message;
   
  });
}

image(){
  this.http.get('http://192.168.1.77:7000/get_roi_image/JSW_DOLVI_2023_09_09_20_44_35_907239.jpg').subscribe((response:any) =>{
    // console.log(this.image = response );
    this.image = response;
  })
  
}

openImageDialog():void{
  const dialogRef = this.dialog.open(ImageModalComponent,{ width :'400px'});
}





}
