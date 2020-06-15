import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("user");
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
