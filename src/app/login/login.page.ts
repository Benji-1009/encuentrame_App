import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardContent,
    IonCard,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    FormsModule,
  ],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  login() {
    this.servicioService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        const user = data.find(
          (u: any) => u.email === this.email && u.password === this.password
        );
        if (user) {
          localStorage.setItem('user', this.name);
          alert('Inicio de sesión exitoso');
          this.router.navigate(['../buscar']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
        alert('Error al iniciar sesión');
      },
    });
  }
}
