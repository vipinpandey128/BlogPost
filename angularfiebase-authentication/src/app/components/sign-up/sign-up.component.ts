import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/components/shared/alert.service';
import { User } from 'src/app/components/shared/user';
import { AuthService } from 'src/app/components/shared/auth.service';
import { NotificationService } from 'src/app/components/notification.service';
 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/";
  constructor(
    public authService: AuthService, public router: Router,
    public ngZone: NgZone,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertService ) {  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    let details = this.registerForm.value;
    this.authService.SignUp(details.username, details.password).then(data => {
      this.loading = false;
    });

  }
}
