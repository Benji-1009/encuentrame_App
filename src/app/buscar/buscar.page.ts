import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton,
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
import { TabsPage } from '../tabs/tabs.page';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
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
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonAvatar,
    IonButton,
    FormsModule,
    TabsPage,
  ],
})
export class BuscarPage {
  platform: string = '';
  nombreUsuario: string = '';
  email: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
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
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }

  buscarPlataformas() {
    this.servicioService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        const user = data.find((u: any) => u.email === this.email);
        if (user) {
          localStorage.setItem('platform', user.platform);
          alert('Plataformas encontradas');
          this.router.navigate(['../tabs/tab2']);
        } else {
          alert('Usuario no encontrado');
        }
      },
      error: (error) => {
        console.error('Error al buscar plataformas:', error);
      },
    });
  }
}
