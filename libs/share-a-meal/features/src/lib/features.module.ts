import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule,HttpClientModule],
  declarations: [MealListComponent, MealDetailComponent],
  providers:[MealService],
  exports:[MealDetailComponent,MealListComponent],
})
export class FeaturesModule {}
