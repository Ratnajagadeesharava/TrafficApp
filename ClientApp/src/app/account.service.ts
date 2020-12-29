import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = "https://localhost:44372/api/account/login";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http:HttpClient) { }
  login(model:any){
    return this.http.post(this.baseUrl,model).pipe(
      map((response:any)=>{
        const user =response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }
  setCurrentUser(user:any){
    this.currentUserSource.next(user);
  }
}
class User{
  user?:String;
  password?:string;
}
