import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
// App routing modules


// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './components/shared/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './components/shared/alert.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NotificationService } from './components/notification.service';
import { MaterialModule } from './material.module';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';
import { UserPostComponent } from './components/user-post/user-post.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
  

// Auth service
 
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomePageComponent,
    AlertComponent,
    SignUpComponent,
    ModalComponent,
    TooltipComponent,
    UserPostComponent,
    PostBlogComponent,
    


  ],
  imports: [
    MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialModule,
    OverlayModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'customer',component:DashboardComponent},
    ]),
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    
  ],
  exports: [MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule,MatTableModule,MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
  providers: [AuthService,AlertService,NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule {

  

 }