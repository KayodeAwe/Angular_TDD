import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  constructor(private httpClient : HttpClient) {}

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
    this.httpClient.post("/api/1.0/users", {
      username:this.username,
      email:this.email,
      password:this.password
    }).subscribe(() => {})
  }
}
