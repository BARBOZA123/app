import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    
    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers();
        headers.append("Content-Type", 'application/x-www-form-urlencoded; charset=UTF-8');
        let requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: API_URL + '/user/authenticate',
            headers: headers,
            body: "username="+username+"&password="+password
        });

        return this.http.request( new Request(requestoptions) )
            .map((response: Response) => {
                console.log( response.json() );
                if ( response.json().success ){
                    let token = response.json() && response.json().token;
                    this.token = token; 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, id: response.json().id }));
                    // return true to indicate successful login
                    return true;
                }else{
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
