import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username = '';
  email = '';
  password = '';
  passwordRepeat = '';

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
    fetch("/api/1.0/users", {
      method: 'POST',
      body: JSON.stringify({username:this.username, email:this.email, password:this.password}),
      headers:{
        "Content-type": "application/json"
      }
    })
  }
}
