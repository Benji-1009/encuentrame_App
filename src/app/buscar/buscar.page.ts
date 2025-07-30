import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  signal,
} from '@angular/core';
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

NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
});

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
  ],
})
export class BuscarPage {
  platform = signal<any[]>([]);
  nombreUsuario: string = '';

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
}
