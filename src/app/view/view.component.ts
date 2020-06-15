import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Mydata } from '../models/mydata';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
//  public datas =new Mydata()
 datas
data:any;
 tobeupdated;
  constructor(private ds: DataService,private router:Router) { }

  ngOnInit(): void {
    this.ds.getstudents()
    .subscribe((d)=>{
      this.datas = d.resultData;
      console.log(this.datas)
    })
    // this.datas=this.ds.data;
  }
  delete(d){
    alert(d._id);
    // this.ds.getpop(s);
    // alert("Delete student successfully");
    // this.datas=this.ds.data;
    this.ds.getpop({_id:d._id}).subscribe((s)=>{
      if(s.status = "Ok"){
    this.ds.getstudents().subscribe((d)=>{
      this.datas =d.resultData;
    })
      }
    })
  }
 
 update(s){
  this.tobeupdated={...s};
  
 }
 create(){
  this.ds.getupdate(this.tobeupdated)
  .subscribe((d)=>{
    if(d.status="Ok"){
      this.ds.getstudents().subscribe((d)=>{
        this.datas =d.resultData;
      })
    }
  })
  alert("Update Student Successfully");
   this.router.navigate(['/view']);
 }

  }