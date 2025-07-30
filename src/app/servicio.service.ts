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

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlUsers);
  }

  // ...existing code...
  postUsers(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrlUsers, userData);
  }
  /*   postPlatforms(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  } */

  /*   postSelectedPlatforms(platforms: string[]): Observable<any> {
    // Cambia la URL por la de la otra tabla
    return this.http.post<any>(this.apiUrl, { platforms });
  } */
  // ...para plataformas...
  getPlatforms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPlat);
  }

  postCustomPlatform(nombre: string): Observable<any> {
    return this.http.post<any>(this.apiUrlPlat, { name: nombre });
  }

  getMensaje(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlShip);
  }
}
