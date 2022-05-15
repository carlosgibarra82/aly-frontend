import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { ApiRestService } from '../services/api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;
  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId
  };

  constructor(
    private router: Router,
    private apiRestService: ApiRestService
  ) { }

  ngOnInit(): void {
    this.apiRestService.getHello().subscribe(
      data => {
        this.message = data.message;
        alert(this.message);
      },
      err => {
        alert(err.message || JSON.stringify(err));
      })
  }

  onLogout(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var currentUser = userPool.getCurrentUser();;
    currentUser.signOut();
    this.router.navigate(['']);
  }

}
