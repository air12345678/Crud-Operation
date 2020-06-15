import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
declare var jQuery:any;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router:Router) { }
  username;
  ngOnInit(): void {
    this.username = localStorage.getItem("user");
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
  
  ngAfterViewInit()
  {
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  
  }

}
