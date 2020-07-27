import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'auth-signout-callback',
  templateUrl: './auth-signout-callback.component.html',
  styleUrls: ['./auth-signout-callback.component.scss']
})
export class AuthSignoutCallbackComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.signoutRedirectCallback().then((response => {
      this.router.navigate(['/']);
    }));
  }

}
