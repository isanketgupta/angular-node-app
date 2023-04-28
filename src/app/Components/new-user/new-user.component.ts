import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  // name: string,
  // email: string,
  // password: string
  usercreated: boolean = false

  constructor(private http : HttpClient){
    
  }

  onSubmit(login){
    console.log('form submited', login.value )
    this.http.put<any>('http://localhost:4000/createuser/add', login.value )
    .subscribe(data => {
        this.usercreated = true
        setTimeout(function() {
            this.usercreated = false;
            console.log(this.usercreated);
        }.bind(this), 5000);
        // console.log(data)
        // console.log(data.httpStatus)
        // console.log(data.status)
    })
  }

}
