import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { RepositoryComponent } from './repository/repository.component';
import { ProfileComponent } from './profile/profile.component';
import { UsernameInputComponent } from './username-input/username-input.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameInputComponent,
    SpinnerComponent,
    RepositoryComponent,
    ProfileComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
