import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing }        from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { HomeComponent } from './home/home.component';
import { LoggedUserComponent } from './_loggedUser/loggedUser.component';
import { LoginComponent } from './_login/login.component';




@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedUserComponent,
    LoginComponent
  ],

  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
