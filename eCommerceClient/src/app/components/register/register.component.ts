import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  pageTitle = 'Register';
  apiUrl = "localhost:3000/users/";

  constructor(
    private http: HttpClient,
     private router: Router
     ){}

  signUp(form: NgForm){
    if(form.valid){
      this.http.post(this.apiUrl, form.value).subscribe({
        next: (res: any) => {
          this.router.navigateByUrl("/login");
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);          
        }
      })
    }
  }
}
