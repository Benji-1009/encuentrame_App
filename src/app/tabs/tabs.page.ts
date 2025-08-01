import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
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

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
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
}
