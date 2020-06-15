import { Injectable } from '@angular/core';
import { Mydata } from '../models/mydata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users=[{
    username:"kk12",
    Password:"kk@1234"},
  
  {username:"ka123",
   Password:"air@1234"},
  
   {username:"gupta23",
    Password:"Skit5959"}
  ]

  data=new Array();
  constructor(private http:HttpClient) { }
  getvalidate(u){
    var p =  this.users.some(
      (user) => {return u.username === user.username && 
       u.Password === user.Password})
 
 return {status:p};
 }
 getpush(d:Mydata):any{
    // this.data.push(d);
  //  return this.http.get('http://localhost:3000/create-student?id='+d.id + "&name="+d.name
  //  +"&branch="+d.branch+"&email="+d.email+"&phone="+d.phone);
    return this.http.post('http://localhost:3000/create-student',d);
   }
  getstudents():any{
    return this.http.get('http://localhost:3000/list-student');
    
  }
  loginstudents(s:Mydata):any{
    return this.http.post('http://localhost:3000/login-student',s);
    
  }
  getToken() {
    return localStorage.getItem('token')
  }
  getpop(u):any{
    //  var c = this.data.filter((std)=>{
    //    if(u!=std.id){
    //       return true;
    //    }
    //    else{
    //      return false;
    //    }
    //  })
    //  this.data=c;
    return this.http.post('http://localhost:3000/delete-student',u);

  }
  getupdate(t):any{
    // this.data.forEach((d)=>{
    //   if(t.id==d.id){
    //     d.id=t.id;
    //     d.name=t.name;
    //     d.branch=t.branch;
    //     d.email=t.email;
    //     d.phone=t.phone;
    //   }
    // })
    return this.http.put('http://localhost:3000/update-student',t);
  }
}
