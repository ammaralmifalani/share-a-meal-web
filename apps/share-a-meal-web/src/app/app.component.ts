import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule } from '@avans-nx-workshop/share-a-meal/features';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,FeaturesModule],
  selector: 'avans-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'share-a-meal-web';
}
