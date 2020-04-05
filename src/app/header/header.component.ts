import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userId;
  public logOutChoice = 'no';
  public sourceName;
  constructor() { }

  ngOnInit() {
    this.userId = 'Sindhura';
    this.sourceName = 'ALL'
  }

  LogOut(){
    logOutChoice : prompt("Are you sure you ant to log out?");
  }


  Filter(){
    alert("Please wait..Articles filtered will be displayed soon..");
  }

  AddArticle(){
    prompt("Please type in th title of your article");
  }
}
