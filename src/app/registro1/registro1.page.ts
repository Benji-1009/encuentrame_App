import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonList,
  IonFooter,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
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
    ExploreContainerComponent,
    IonCardContent,
    IonCard,
    IonInput,
    IonItem,
    IonList,
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonButton,
    FormsModule,
    IonText,
  ],
})
export class Registro1Page {
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public servicioService: ServicioService) {}

  guardarDatos() {
    if (this.password !== this.confirmPassword) return;

    const userData = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      telefono: this.telefono,
      password: this.password,
    };

    this.servicioService.postUsers(userData).subscribe({
      next: (res) => console.log('Usuario guardado', res),
      error: (err) => console.error('Error al guardar', err),
    });
  }
}
