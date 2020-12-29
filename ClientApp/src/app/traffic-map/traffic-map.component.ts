import { Component, ViewChild,ElementRef,AfterViewInit, OnInit } from '@angular/core';



@Component({
  selector: 'app-traffic-map',
  templateUrl: './traffic-map.component.html',
  styleUrls: ['./traffic-map.component.css']
})
export class TrafficMapComponent implements OnInit {
  public color:string="yellow";
  public x:number = 0;
  public y:number =0;
  public tl1R:string="white";
  public tl1Y:string="white";
  public tl1G:string="green";
  public tl2R:string="white";
  public tl2Y:string="white";
  public tl2G:string="green";
  public gy:boolean =true;
  public ry:boolean=true;
  public gy2:boolean =true;
  public ry2:boolean=true;
  public tl3R:string="white";
  public tl3Y:string="white";
  public tl3G:string="green";
  public gy3:boolean =true;
  public ry3:boolean=true;
  public tl4R:string="white";
  public tl4Y:string="white";
  public tl4G:string="green";
  public gy4:boolean =true;
  public ry4:boolean=true;
  public tl5R:string="white";
  public tl5Y:string="white";
  public tl5G:string="green";
  public gy5:boolean =true;
  public ry5:boolean=true;
  public tl6R:string="white";
  public tl6Y:string="white";
  public tl6G:string="green";
  public gy6:boolean =true;
  public ry6:boolean=true;
  public tl7R:string="white";
  public tl7Y:string="white";
  public tl7G:string="green";
  public gy7:boolean =true;
  public ry7:boolean=true;
  public tl8R:string="white";
  public tl8Y:string="white";
  public tl8G:string="green";
  public gy8:boolean =true;
  public ry8:boolean=true;
  constructor() { 
     
  }
  public title:string = "TrafficApp";

  ngOnInit(): void {
    
  }
  changeColor(){
    if(this.tl1R=="red"){
      this.tl1R="white";
      this.tl1Y="yellow";
      this.ry=true;
      return ;
    }
    if(this.tl1G ==="green"){
      this.tl1G="white";
      this.tl1Y="yellow";
      this.gy = true;
      return ;
    }
    if(this.tl1Y==="yellow" && this.gy ===true){
      this.tl1R="red";
      this.tl1Y="white"
      this.gy=false;
      return ;
    }
    if(this.tl1Y==="yellow" && this.ry ===true){
      this.tl1G="green";
      this.tl1Y="white"
      this.ry=false;
      return ;
    }
   
    
    
   
  }
  changeColorL2(){
    if(this.tl2R=="red"){
      this.tl2R="white";
      this.tl2Y="yellow";
      this.ry2=true;
      return ;
    }
    if(this.tl2G ==="green"){
      this.tl2G="white";
      this.tl2Y="yellow";
      this.gy2 = true;
      return ;
    }
    if(this.tl2Y==="yellow" && this.gy2 ===true){
      this.tl2R="red";
      this.tl2Y="white"
      this.gy2=false;
      return ;
    }
    if(this.tl2Y==="yellow" && this.ry2 ===true){
      this.tl2G="green";
      this.tl2Y="white"
      this.ry=false;
      return ;
    }
   
    
    
   
  }
  changeColorL3(){
    if(this.tl3R=="red"){
      this.tl3R="white";
      this.tl3Y="yellow";
      this.ry3=true;
      return ;
    }
    if(this.tl3G ==="green"){
      this.tl3G="white";
      this.tl3Y="yellow";
      this.gy3 = true;
      return ;
    }
    if(this.tl3Y==="yellow" && this.gy3 ===true){
      this.tl3R="red";
      this.tl3Y="white"
      this.gy3=false;
      return ;
    }
    if(this.tl3Y==="yellow" && this.ry3 ===true){
      this.tl3G="green";
      this.tl3Y="white"
      this.ry3=false;
      return ;
    }
   
    
    
   
  }
  changeColorL4(){
    if(this.tl4R=="red"){
      this.tl4R="white";
      this.tl4Y="yellow";
      this.ry4=true;
      return ;
    }
    if(this.tl4G ==="green"){
      this.tl4G="white";
      this.tl4Y="yellow";
      this.gy4 = true;
      return ;
    }
    if(this.tl4Y==="yellow" && this.gy4 ===true){
      this.tl4R="red";
      this.tl4Y="white"
      this.gy4=false;
      return ;
    }
    if(this.tl4Y==="yellow" && this.ry4 ===true){
      this.tl4G="green";
      this.tl4Y="white"
      this.ry4=false;
      return ;
    }
   
    
    
   
  }
   changeColorL5(){
    if(this.tl5R=="red"){
      this.tl5R="white";
      this.tl5Y="yellow";
      this.ry5=true;
      return ;
    }
    if(this.tl5G ==="green"){
      this.tl5G="white";
      this.tl5Y="yellow";
      this.gy5 = true;
      return ;
    }
    if(this.tl5Y==="yellow" && this.gy5 ===true){
      this.tl5R="red";
      this.tl5Y="white"
      this.gy5=false;
      return ;
    }
    if(this.tl5Y==="yellow" && this.ry5 ===true){
      this.tl5G="green";
      this.tl5Y="white"
      this.ry5=false;
      return ;
    }
   
    
    
   
  }
  changeColorL6(){
    if(this.tl6R=="red"){
      this.tl6R="white";
      this.tl6Y="yellow";
      this.ry6=true;
      return ;
    }
    if(this.tl6G ==="green"){
      this.tl6G="white";
      this.tl6Y="yellow";
      this.gy6 = true;
      return ;
    }
    if(this.tl6Y==="yellow" && this.gy6 ===true){
      this.tl6R="red";
      this.tl6Y="white"
      this.gy6=false;
      return ;
    }
    if(this.tl6Y==="yellow" && this.ry6 ===true){
      this.tl6G="green";
      this.tl6Y="white"
      this.ry6=false;
      return ;
    }
   
    
    
   
  }
  changeColorL7(){
    if(this.tl7R=="red"){
      this.tl7R="white";
      this.tl7Y="yellow";
      this.ry7=true;
      return ;
    }
    if(this.tl7G ==="green"){
      this.tl7G="white";
      this.tl7Y="yellow";
      this.gy7 = true;
      return ;
    }
    if(this.tl7Y==="yellow" && this.gy7 ===true){
      this.tl7R="red";
      this.tl7Y="white"
      this.gy7=false;
      return ;
    }
    if(this.tl7Y==="yellow" && this.ry7 ===true){
      this.tl7G="green";
      this.tl7Y="white"
      this.ry7=false;
      return ;
    }
   
    
    
   
  }
  changeColorL8(){
    if(this.tl8R=="red"){
      this.tl8R="white";
      this.tl8Y="yellow";
      this.ry8=true;
      return ;
    }
    if(this.tl8G ==="green"){
      this.tl8G="white";
      this.tl8Y="yellow";
      this.gy8 = true;
      return ;
    }
    if(this.tl8Y==="yellow" && this.gy8 ===true){
      this.tl8R="red";
      this.tl8Y="white"
      this.gy8=false;
      return ;
    }
    if(this.tl8Y==="yellow" && this.ry8 ===true){
      this.tl8G="green";
      this.tl8Y="white"
      this.ry8=false;
      return ;
    }
   
  }
    
    
   
  
}
