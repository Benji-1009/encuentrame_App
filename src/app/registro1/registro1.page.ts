import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
  standalone: true,
imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard, IonInput, IonItem, IonIcon, IonLabel, IonButton],
})
export class Registro1Page {

  constructor() { }

}
