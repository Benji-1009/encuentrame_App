import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'https://localhost:3001/users';
  private apiUrlPlat = 'https://localhost:3001/platforms';


  constructor(private http: HttpClient) { }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ...existing code...
postUsers(userData: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, userData);
}
// ...para plataformas...
getPlatforms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPlat);
  }
}
