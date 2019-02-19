import { Component } from '@angular/core';
import { AuthService } from './components/shared/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from './components/DialogData';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularfiebase-authentication';
  constructor(
    public authService: AuthService) { }

  islogout() {
    this.authService.SignOut();
  }
  
  
}


