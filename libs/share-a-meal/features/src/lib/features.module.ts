import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'meals',
    pathMatch: 'full',
    component: MealListComponent,
  },
  {
    path:'', 
    pathMatch:'full',
    redirectTo:'dashboard',
},
{
    path:'dashboard', 
    pathMatch:'full',
    component:DashboardComponent
},
{
  path:'about', 
  pathMatch:'full',
  component:AboutComponent
},
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    DashboardComponent,
  ],
  providers: [MealService],
  exports: [MealDetailComponent, MealListComponent, AboutComponent],
})
export class FeaturesModule {}
