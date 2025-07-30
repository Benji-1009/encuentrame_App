import { Component, OnInit, signal } from '@angular/core';
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
  IonIcon,
  IonLabel,
  IonButton,
  IonCheckbox,
} from '@ionic/angular/standalone';
import {
  triangle,
  ellipse,
  square,
  homeOutline,
  homeSharp,
  star,
  personSharp,
  personCircleOutline,
  informationSharp,
  searchSharp,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ServicioService } from '../servicio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
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
    IonList,
    IonIcon,
    IonLabel,
    IonButton,
    IonCheckbox,
    NgFor,
  ],
})
export class Registro2Page implements OnInit {
  platforms = signal<any[]>([]);
  selectedPlatforms = signal<string[]>([]);

  constructor(public servicioService: ServicioService) {
    addIcons({
      triangle,
      ellipse,
      square,
      homeSharp,
      homeOutline,
      star,
      personCircleOutline,
      personSharp,
      informationSharp,
      searchSharp,
    });
  }

  ngOnInit() {
    this.servicioService.getPlatforms().subscribe({
      next: (data) => this.platforms.set(data),
      error: (error) => console.error('Error al extraer datos: ', error),
    });
  }

  onCheckboxChange(platformName: string, checked: boolean) {
    const current = this.selectedPlatforms();
    if (checked) {
      this.selectedPlatforms.set([...current, platformName]);
    } else {
      this.selectedPlatforms.set(
        current.filter((name) => name !== platformName)
      );
    }
  }

  /* guardarSeleccion() {
    // Envía los datos a la API
    this.servicioService
      .postSelectedPlatforms(this.selectedPlatforms())
      .subscribe({
        next: (res) => console.log('Datos guardados', res),
        error: (err) => console.error('Error:', err),
      });
  } */
}
