// config.service.ts
import { Injectable } from "@angular/core";
import{HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse}from "@angular/common/http";
    import { Observable, observable } from "rxjs";
@Injectable()
export class languageInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const lang=localStorage.getItem('lang')||'En';
    request=request.clone({
    setHeaders:{
          'Accept-Language':lang
        }
            });
    return next.handle(request);

  }
 
}
