import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private route: Router) { 
    this.user = new User();
  }

  login(loginForm: NgForm){
    this.authService.authenciateUser(this.user);
    if(this.authService.loggedInUser!=undefined){
      console.log(this.authService.loggedInUser);
      this.route.navigateByUrl('/menu-item-list');
    }else
      console.log('not a user');
  }

  ngOnInit(): void {
  }

}
