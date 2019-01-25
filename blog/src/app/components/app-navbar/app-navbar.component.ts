import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) {
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }

}
