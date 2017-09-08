import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../_models/userComplete';


@Injectable()
export class controller{

	public userName: string;

	constructor(private http: Http) {

	}

	//GET all users
	public getAllUsers(): Observable<User[]>{
		return null;
	}

	//POST new user
	public createUser(){

	}

	//GET user by id
	public getUserById(userId: number){

	}

	//PUT update user by id
	public updateUser(user: User){

	}

	//DELETE user by id
	public deleteUserById(userId: number){

	}


}
