import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCardContent, IonCard, IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel, IonButton],
})
export class Tab1Page {
  constructor() {}
}
