import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  username = '';
  email = '';
  password = '';
  passwordRepeat = '';
  apiRequest = false;
  signUpSuccess = false;

  constructor(private userservice : UserService) {}

  ngOnInit():void{
  }


  isDisabled(){
    return this.password? (this.password !== this.passwordRepeat) : true
  }
  onClickSignUp(){
    this.apiRequest = true;
    this.userservice.signUp({
      username:this.username,
      email:this.email,
      password:this.password}).subscribe(() => {
      this.signUpSuccess = true
    })
  }
}
