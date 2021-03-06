import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  signout():void{
    this.auth.isAuth=false;
    this.router.navigateByUrl('/login');
  }

}
