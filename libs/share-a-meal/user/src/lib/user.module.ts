import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes :Routes= [
{
  path: '',
  pathMatch: 'full',
  component: UserListComponent
},
{
  path: ':id',
  pathMatch: 'full',
  component: UserDetailComponent
}
]
@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,HttpClientModule],
  declarations: [UserListComponent, UserDetailComponent],
  providers:[UserService],
  exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {}