import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.completeAuthentication().then((data) => {
      if (data && data.returnUrl) {
        console.log('redirect ' + data.returnUrl);
        this.router.navigate([data.returnUrl]);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}



