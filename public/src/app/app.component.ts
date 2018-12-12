import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  gold = 0;
  log = "";

  constructor(private _httpService: HttpService){}
  ngOnInit(){

  }
  onClick(str: String){
    if(str==='Farm'){
    var rand_num = Math.floor(Math.random()* 6)+2;
    this.gold+=rand_num;
    this.log +='Earned ' +rand_num ;
    }
    if(str==='Cave'){
    var rand_num = Math.floor(Math.random()* 11)+5;
    this.gold+=rand_num;
    this.log += "Earned " +rand_num;
    }
    if(str==='House'){
    var rand_num = Math.floor(Math.random()* 16)+7;
    this.gold+=rand_num;
    this.log += `<p> Earned ${rand_num}</p> `
    }
    if(str==='Casino'){
    var rand_num = Math.floor(Math.random()* 200)-100;
    this.gold +=rand_num;
    if(rand_num>0){
      this.log += "Earned " +rand_num;
    }
    else{
      this.log += "Lost" + rand_num;
    }
    }

  }
}
