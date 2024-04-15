import { NgModule } from '@angular/core';
import { UsernameInputComponent } from './username-input/username-input.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component: UsernameInputComponent },
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
