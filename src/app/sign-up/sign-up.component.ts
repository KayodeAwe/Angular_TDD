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

  onUsernameChange(event:Event){
    this.username = (event.target as HTMLInputElement).value
  }
  onEmailChange(event:Event){
    this.email = (event.target as HTMLInputElement).value
  }
  onPasswordChange(event:Event){
    this.password = (event.target as HTMLInputElement).value
  }
  onPasswordRepeatChange(event:Event){
    this.passwordRepeat = (event.target as HTMLInputElement).value
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
