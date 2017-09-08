import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    user: User;
 
    constructor(private userService: UserService) { }
 
    ngOnInit() {
        // get users from secure api end point
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getLoggedUser(currentUser)
            .subscribe(user => {
                this.user = user;
            });
    }
    
 
}
