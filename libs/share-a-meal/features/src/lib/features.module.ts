import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MealListComponent, MealDetailComponent, MealListComponent],
})
export class FeaturesModule {}
