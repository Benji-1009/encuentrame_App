import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton, IonCheckbox} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCardContent, IonCard, IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel, IonButton, IonCheckbox, NgFor],
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
