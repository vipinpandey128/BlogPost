import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/components/shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/components/shared/alert.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  animal: string;
  name: string;
  emailPattern: string;
  constructor(
    public authService: AuthService, public router: Router,
    public ngZone: NgZone,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertService,
    public dialog: MatDialog
  ) {

    if (this.authService.isLoggedIn) {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
    }
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this.authService.SignOut();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.SignIn(this.f.username.value, this.f.password.value, this.loading);

  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.animal = result;
  //   });
  // }

}
