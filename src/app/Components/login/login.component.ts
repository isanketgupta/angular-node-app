import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private http : HttpClient){
      
    }

    onSubmit(login){
      console.log('form submited', login.value )
      this.http.post<any>('http://localhost:4000/auth/login', login.value )
      .subscribe(data => {
          console.log(data)
          // let statsCode = data.httpStatus 
      })
    }

}
