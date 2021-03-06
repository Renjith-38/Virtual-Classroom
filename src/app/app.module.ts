import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { EnrollClassComponent } from './enroll-class/enroll-class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditClassComponent } from './edit-class/edit-class.component';
import { GoToClassComponent } from './go-to-class/go-to-class.component';
import { NotesComponent } from './notes/notes.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TeacherHomeComponent,
    StudentHomeComponent,
    CreateClassComponent,
    EnrollClassComponent,
    EditClassComponent,
    GoToClassComponent,
    NotesComponent,
    AssignmentsComponent,
    SubmissionsComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminStudentsComponent,
    AdminTeachersComponent,
    AdminAddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
