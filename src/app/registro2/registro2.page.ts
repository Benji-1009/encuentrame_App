import { Component, OnInit,signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonIcon, IonButton, IonCheckbox} from '@ionic/angular/standalone';
import { triangle, ellipse, square, homeOutline, homeSharp, star, personSharp, personCircleOutline, informationSharp, searchSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard, IonIcon, IonButton, IonCheckbox, IonicModule, NgFor],
})
export class Registro2Page implements OnInit {
  platforms = signal<any[]>(
    []
  );

  constructor(public servicioService: ServicioService) {
    addIcons({ triangle, ellipse, square, homeSharp, homeOutline, star, personCircleOutline, personSharp, informationSharp, searchSharp });
   }

  ngOnInit() {
    this.servicioService.getPlatforms().subscribe({
      next: (data) => this.platforms.set(data),
      error: (error) => console.error('Error al extraer datos: ',error),
    });
  }

}
