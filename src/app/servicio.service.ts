import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private apiUrlUsers = 'http://localhost:3001/users';
  private apiUrlPlat = 'http://localhost:3001/platforms';
  private apiUrlShip = 'http://localhost:3001/shipment';
  private apiurlUpdt = 'http://localhost:3001/users/:id';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlUsers);
  }

  // ...para usuarios...
  postUsers(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrlUsers, userData);
  }
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrlUsers}/${id}`, userData);
  }

  // ...para plataformas...
  getPlatforms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPlat);
  }

  postCustomPlatform(nombre: string): Observable<any> {
    return this.http.post<any>(this.apiUrlPlat, { name: nombre });
  }
  // ...para envíos...
  getMensaje(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlShip);
  }
}
