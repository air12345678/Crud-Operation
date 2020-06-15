import { Component, OnInit } from '@angular/core';
import { Mydata } from '../models/mydata';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  mydata=new Mydata();
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
create(){
  
    this.ds.getpush(this.mydata)
    .subscribe((d)=>{
      if(d.status="Ok"){
        this.ds.getstudents().subscribe((d)=>{
          this.mydata =d.resultData;
        })
      }
    });
    alert("Create User Successfully");
    this.router.navigate(['/view']);
    }
    
}
