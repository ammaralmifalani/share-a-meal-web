import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule } from '@avans-nx-workshop/share-a-meal/features';
import { UiModule } from '@avans-nx-workshop/ui';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,FeaturesModule,UiModule],
  selector: 'avans-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'share-a-meal-web';
}
