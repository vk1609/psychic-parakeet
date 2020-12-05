import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password : string;
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }

  LoginUser(){
    if(this.email == "admin" && this.password == "Admin@123" ){
      this.router.navigateByUrl('/home');
      // createConnection({
      //   type: "mysql",
      //   host: "localhost",
      //   port: 3306,
      //   username: "root",
      //   password: " ",
      //   database: "data",
      //   entities: [
      //      __dirname + "/entity/*.ts"
      //   ],
      //   synchronize: true,
      //   logging: false
      // }).then(async connection => {
      // …
      // …
      // }).catch(error => console.log(error));
      // let userdetails = new userDetails();
      //     userdetails.name ='' ;
      //     userdetails.email = '';


    }
  }
  SignUp(){
    this.router.navigateByUrl('/signup');
  }
}
export class userDetails {
  name : string;
  password: String;
}
