import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  userData: any;
  ngOnInit() {
  }
  getUserDetails() {
    const token = localStorage.getItem('auth');
    const headers = new HttpHeaders().set('authorization', token);
    this.httpClient.get('http://localhost:3000/api/getUserDetails', {headers} ).subscribe( data => {
      console.log('jwt data : ', data);
      if(data) {
        // @ts-ignore
        this.userData = data.user;
      }
    });
  }
}
