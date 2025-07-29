import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
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
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
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
    IonIcon,
    IonLabel,
    IonButton,
    FormsModule,
    IonText,
    NgIf,
  ],
})
export class Registro1Page {
  name: string = '';
  lastname: string = '';
  email: string = '';
  phone: number = 0;
  password: string = '';
  confirmPassword: string = '';

  constructor(public servicioService: ServicioService) {}

  guardarDatos() {
    if (this.password !== this.confirmPassword)
      return alert('Las contraseñas no coinciden');

    const userData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };

    this.servicioService.postUsers(userData).subscribe({
      next: (res) => console.log('Usuario guardado', res),
      error: (err) => console.error('Error al guardar', err),
    });
  }
}
