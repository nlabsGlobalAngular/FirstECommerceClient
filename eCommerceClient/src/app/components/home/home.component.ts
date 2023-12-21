import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BasketService } from '../../services/basket.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrCurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageTitle = 'Home';
  apiUrl: string = "localhost:3000/products";
  products: ProductModel[] = [];
  isAuthenticated: boolean = false;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private basket: BasketService
  ){
    this.getAllProducts();
  }
  getAllProducts() {
    this.http.get(this.apiUrl).subscribe({
      next: (res: any) => {
        this.products = res.products;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
      }
    })
  }

  addToBasket(productId: number){
    this.http.get(this.apiUrl + productId).subscribe({
      next: (res: any) => {
        this.basket.count++;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
      }
    })
  }
}
