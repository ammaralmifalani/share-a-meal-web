import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MealListComponent, MealDetailComponent, AboutComponent],
  providers: [MealService],
  exports: [MealDetailComponent, MealListComponent,AboutComponent],
})
export class FeaturesModule {}
