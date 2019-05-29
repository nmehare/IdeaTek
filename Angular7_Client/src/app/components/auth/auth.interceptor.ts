import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next:HttpHandler) {
        if(req.headers.get('noauth'))
        return next.handle(req.clone());
        else{
            const clonedreq = req.clone({
               headers:req.headers.set("Authorization","Bearer "+ this.userService.getToken()) 
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => {},
                    err => {
                        if(err.error.auth == false){
                            this.router.navigateByUrl('/posts');
                        }
                    }
                )
            )
        }
    }
  constructor(private userService : UserService, private router: Router){
  }
}