
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, Query, ViewChild, ViewChildren } from '@angular/core';
import { ServerService } from 'src/app/Services/server.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, startWith, Subscribable, Subscription, switchMap } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr'
import { ModalDismissReasons, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Moment } from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import dayjs from 'dayjs';

// export interface violation {
//   si_no?: string
// }



@Component({
  selector: 'app-fire-and-smoke-violation',
  templateUrl: './fire-and-smoke-violation.component.html',
  styleUrls: ['./fire-and-smoke-violation.component.css']
})
export class FireAndSmokeViolationComponent {

  selectedCameraId: string | null = null
  selectedItems!: any
  isdatewise: boolean = false
  page: number = 1

 
   ngOnDestroy(): void {
     throw new Error('Method not implemented.');
   }




  ranges: any = {
    'Today': [dayjs().hour(0).minute(0).second(0), dayjs()],
    'Yesterday': [dayjs().subtract(1, 'days').hour(0).minute(0).second(0), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(6, 'days').hour(0).minute(0).second(0), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days').hour(0).minute(0).second(0), dayjs()],
    'This Month': [dayjs().startOf('month').hour(0).minute(0).second(0), dayjs().endOf('month')],
    'Last Month': [dayjs().subtract(1, 'month').startOf('month').hour(0).minute(0).second(0), dayjs().subtract(1, 'month').endOf('month')]
  }

  constructor(private Router: Router,private server: ServerService){
    
  }


  selectedMoments: { startDate: Moment, endDate: Moment }

  // @ViewChildren(DaterangepickerDirective) pickerDirective: any;
  // editViol: any
// dropdownList: Observable<unknown>|Subscribable<unknown>|Promise<unknown>;

  dropdownList: Observable<any[]> = of([])


  // ngAfterViewInit() {
  //   this.dataread()


  // }

  openDatePicker(event: any) {

    var dateInput = document.getElementById('dateInput')
    dateInput.click()

  }

  onCameraIdSelect(event: any) {
    !this.isdatewise ? this.page = 1 : ''
    this.selectedCameraId = this.selectedItems.data
    console.log(this.selectedItems)
    console.log(event)


  }

  // ngOnDestroy() {
  //   this.modalService.dismissAll()
  //   clearInterval(this.interval)
  //   clearInterval(this.interval2)
  //   this.isalert = false

  //   this.toasterService.clear()

  // }


}
