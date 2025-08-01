import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
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
  IonText,
  IonImg,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
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
    IonText,
    FormsModule,
    NgIf,
    IonImg,
  ],
})
export class RecuperarPage {
  email: string = '';
  password: string = '';
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  recuperarContrasena() {
    this.servicioService.getUsers().subscribe({
      next: (data) => {
        const user = data.find((u: any) => u.email === this.email);
        if (user) {
          this.sendRecoveryEmail();
          // alert('Se ha enviado un correo para recuperar la contraseña');
          this.router.navigate(['../tabs/login']);
          this.email = '';
          this.password = '';
        } else {
          alert('El correo electrónico no está registrado');
        }
      },
      error: (error) => {
        console.error('Error al recuperar la contraseña:', error);
        alert('Error al recuperar la contraseña');
      },
    });
  }
  sendRecoveryEmail() {
    // Implementación de la función para enviar el correo de recuperación
    alert('Correo de recuperación enviado a ' + this.email);
  }
  goHome() {
    this.router.navigate(['../tabs/login']);
    this.email = '';
    this.password = '';
  }
  logo() {
    this.router.navigate(['../tabs/login']);
  }
}
