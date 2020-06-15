import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Mydata } from '../models/mydata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata = new User();
  mydata = new Mydata();
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  fun(){
         
    // var result = this.ds.getvalidate(this.userdata);
    // if(result.status){
    //   localStorage.setItem("user",this.userdata.username);
    //   this.router.navigate(['/main'],
    //   {queryParams:{user:this.userdata.username}});
    // }
    //   else{
    //    alert("Not a valid user");
    //   }
  //   this.ds.loginstudents(this.mydata)
  //   .subscribe(d=>{
  //     localStorage.setItem('token',d.token);
  // this.router.navigate(['/main'])
 
  //   },
  //   err =>console.log(err))
  // alert(JSON.stringify(this.mydata));
    //  this.ds.loginstudents(this.mydata)
    //  .subscribe((d)=>{
    //    localStorage.setItem("user",this.mydata.id);
    //    this.router.navigate(['/main']);
    //  },
    //  err => console.log(err)
    //  )
    this.ds.loginstudents(this.mydata)
    .subscribe((d)=>{
      if(d.status == "Ok")
      {
        localStorage.setItem("user",this.mydata.id);
        this.router.navigate(['/main']);
      }
      else{
        alert("Invalid Id/Password");
      }
    })
}
}
