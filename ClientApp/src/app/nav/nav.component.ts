import { Component, OnInit } from '@angular/core';
import {AccountService} from './account.service';
import {HttpClient} from'@angular/common/http';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  baseUrl:string = "https://localhost:44372/api/account/users";
  users?:any;
  constructor(private http:HttpClient,private _accountService:AccountService) {
    

  }
  ngOnInit(){
    this.getUsers();
    this.getCurrentUser();
    
  }
  
  getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    this._accountService.setCurrentUser(user);
    
  }
  getUsers()
{
  this.http.get(this.baseUrl).subscribe(response=>{
    this.users = response;

  },
  error=>{
    consoe.log(error);
  }
  )
}

}
