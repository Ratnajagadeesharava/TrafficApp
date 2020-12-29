import { Injectable } from '@angular/core';
import  * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  hubConncetion:signalR.HubConnection | undefined;
  constructor() { }
  startConnection(){
    this.hubConncetion = new signalR.HubConnectionBuilder().withUrl("https://localhost:44340/tester",{
      skipNegotiation:true,
      transport:signalR.HttpTransportType.WebSockets
    }).build();
    this.hubConncetion.start().then(()=>{
      console.log("HubConnection Started");

    }).catch(err=>console.log("error while starting connection " +err));
  }
  askServer(){
    this.hubConncetion?.invoke("AskServer","hey").catch(err=>console.log(err));
  }
  askServerListener(){
    this.hubConncetion?.on("askServerResponse",(textMessage)=>console.log(textMessage));
  }
}
