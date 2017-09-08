import { Component, OnInit } from '@angular/core'; 
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router, Route } from '@angular/router';


@Component({
    selector: 'app-logged',
    moduleId: module.id,
    templateUrl: 'loggedUser.component.html'
})
 
export class LoggedUserComponent implements OnInit {
    user: User;
 
    constructor(private userService: UserService) { }
 
    ngOnInit() {
        // get users from secure api end point
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.userService.getLoggedUser(currentUser)
            .subscribe(user => {
                this.user = user;
            });
        }else{
            this.user = null;
        }
    }

    ngOnDestroy(){
        localStorage.removeItem('currentUser');
    }
}
