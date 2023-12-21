import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrl: string = "";
  count: number = 0;

  constructor(private http: HttpClient) { 
    this.getCount();
  }
  getCount() {
    this.http.get(this.apiUrl).subscribe({
      next: (res: any) => {
        this.count = res.count;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
      }
    })
  }
}
