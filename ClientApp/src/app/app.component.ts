import { Component, OnInit } from '@angular/core';
import {SignalrService} from "./signalr.service";
import {AccountService} from './account.service';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  /**
   *
   */
  baseUrl:string = "https://localhost:44372/api/account/users";
  users?:any;
  constructor(public signalrService:SignalrService,private http:HttpClient,private _accountService:AccountService) {
    

  }
  ngOnInit(){
    this.signalrService.startConnection();
    this.getUsers();
    this.getCurrentUser();
    setTimeout(()=>{
      this.signalrService.askServerListener();
      this.signalrService.askServer();
    },2000);
  }
  ngOnDestroy(){
    this.signalrService.hubConncetion?.off("askServerResponse");
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
    console.log(error);
  }
  )
}}
