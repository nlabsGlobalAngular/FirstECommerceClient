import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  pageTitle = 'Login';
  apiUrl: string = "localhost:3000/users/";
  constructor(private _http: HttpClient, private router: Router){}

  signIn(form: NgForm){
    if (form.valid) {
      this._http.get(this.apiUrl, form.value).subscribe({
        next: (res: any) => {
          localStorage.setItem("response", JSON.stringify(res));
          this.router.navigateByUrl("/");
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);          
        }
      })      
    }
  }
}
