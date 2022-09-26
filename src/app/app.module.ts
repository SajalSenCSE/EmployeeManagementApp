import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadListComponent } from './lead-list/lead-list.component';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { HomeComponent } from './home/home.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeadListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeServiceService, PaginationConfig],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
