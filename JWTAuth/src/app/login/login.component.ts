import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  constructor(private router: Router , private httpClient: HttpClient , private auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.httpClient.post('http://localhost:3000/api/login', this.user ).subscribe( data => {
      console.log('token data : ' , data);
      // @ts-ignore
      localStorage.setItem('auth', data.toString());
      this.router.navigate(['/home']);
    });
  }
}
