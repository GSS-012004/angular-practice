// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-image-modal',
//   templateUrl: './image-modal.component.html',
//   styleUrls: ['./image-modal.component.css']
// })
// export class ImageModalComponent {

// }


import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent {
  constructor(public dialogRef: MatDialogRef <ImageModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
