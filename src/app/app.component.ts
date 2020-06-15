import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstPro';
  curpath;
  u;
  constructor(private router : Router){}
  fun(){
    this.curpath = this. router.url;
    if(this.curpath.includes('/login'))
    {
      this.u = localStorage.getItem("user");
    }
    if(this.curpath.includes('/main')) 
      {
       
        this.u = localStorage.getItem("user");
        
      }       
  }
}
