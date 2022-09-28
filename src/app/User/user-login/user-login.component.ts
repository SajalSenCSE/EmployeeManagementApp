import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserLoginForm } from 'src/app/models/UserLoginForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup<UserLoginForm>;
  newUser=new User();
  constructor(private fb: FormBuilder,private authService:AuthService) {}

  ngOnInit(): void {
    this.logInFormCreate();
  }

  logInFormCreate() {
    this.loginForm = this.fb.group<UserLoginForm>({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
    });
  }
  onUserLogin(){
    if(this.loginForm.valid){
      this.newUser=this.loginForm.value as User;
      this.authService.logIn(this.newUser).subscribe(res=>
        {
          console.log(res);
        })
    }
  }
}
