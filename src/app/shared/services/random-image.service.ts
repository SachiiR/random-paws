import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {
 private url = 'https://random.dog/woof.json';

  constructor(private http: HttpClient) { 
  }

  getRandomImage(): Observable<any>{
    return this.http.get(this.url);
  }
}
