import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ListServiceComponent {

private baseUrl = 'http://localhost:54438//api/user';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/list`);

}
}
