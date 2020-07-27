import { Injectable } from '@angular/core'; 
import { 
    HttpRequest, 
    HttpHandler, 
    HttpEvent, 
    HttpInterceptor 
} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { AuthService } from './auth.service';

 
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', this.authService.getAuthorizationHeaderValue());
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
