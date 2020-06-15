import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Input() curuser
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
