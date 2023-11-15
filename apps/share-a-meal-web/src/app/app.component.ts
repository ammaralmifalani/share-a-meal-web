import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { FeaturesModule } from '@avans-nx-workshop/share-a-meal/features';
import { UiModule } from '@avans-nx-workshop/ui';
import { initFlowbite } from 'flowbite';
@Component({
  standalone: true,
  imports: [ RouterModule,UiModule],
  selector: 'avans-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'share-a-meal-web';
  ngOnInit(): void
  {
    initFlowbite();
  }
}
