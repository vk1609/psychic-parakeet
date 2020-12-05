import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
// import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
      // @Entity()
      // export class userDetails {
      //     @PrimaryGeneratedColumn()
      //   id: number;
      //   @Column()
      //   name: string;
       
      //   @Column()
      //   email: string;
       
      //   @Column({
      //       length: 10
      //   })
      //   mobileNumber: string;
       
 
       
      //   @Column()
      //   password: string;
       
      // }
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


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
name : String;

  constructor(private router: Router) { }
  signup:{};

  ngOnInit(): void {
  

    }
    Login(){
      this.router.navigateByUrl('/login');
    }
    signUp(){
  //     let userdetails = new userDetails();
  //     userdetails.name ='' ;
  //     userdetails.email = '';
  //     userdetails.mobileNumber = '';
  //     userdetails.password = '';
 
 
  // await connection.manager.save(userdetails);
  // console.log('userdetails has been saved'+'\n');
      }

    }

