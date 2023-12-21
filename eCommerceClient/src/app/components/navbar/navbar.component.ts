import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;

  constructor(
    private auth: AuthService,
    public cart: BasketService
  ) {
    this.isAuthenticated = this.auth.isAuthenticated();
  }
}
