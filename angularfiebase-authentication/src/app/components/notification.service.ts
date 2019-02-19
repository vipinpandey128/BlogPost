import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {

  }


  showError() {
    this.toastr.error('This is error toast.', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('This is warning toast.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('This is info toast.', 'Info');
  }


  showSuccess(message, title) {
    this.toastr.success(message, title)
  }

  showHTMLMessage(message, title) {
    this.toastr.success(message, title, {
      enableHtml: true
    })
  }

  showSuccessWithTimeout(message, title, timespan){  
    this.toastr.success(message, title ,{
        timeOut :  timespan
    })
}
}
