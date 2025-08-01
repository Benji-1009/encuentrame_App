import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
  ],
})
export class Tab3Page {
  constructor(private servicio: ServicioService, private router: Router) {}

  logo() {
    this.router.navigate(['../tabs/login']);
  }
}
