import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard, IonInput, IonItem, IonLabel, IonButton],
})
export class Tab1Page {
  constructor() {}
}
