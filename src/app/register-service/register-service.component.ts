import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class RegisterServiceComponent {
  private baseUrl = 'http://localhost:54438//api/user';
  constructor(private http: HttpClient) {}
  createUser(user: any) {
    return this.http.post('${this.baseUrl}/register', user);
  }
}
