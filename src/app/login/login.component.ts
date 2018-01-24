import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public email;
public password;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToSignUp(){
    this.router.navigate(['signup']);
      }

 navTostudentList(email,password){
  this.router.navigate(['student-list']);
  this.email = email;
  this.password = password;
  console.log('email',this.email,'password', this.password);
}

}
