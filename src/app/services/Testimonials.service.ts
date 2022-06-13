import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class TestimonialsService{

    constructor(private httpClient: HttpClient)
    {

    }
    getTestimonials():Observable<any>
    {
        return this.httpClient.get('https://reqres.in/api/users?page=1');


    }

}