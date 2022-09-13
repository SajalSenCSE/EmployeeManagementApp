
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeServiceService } from './services/employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AgePipe } from './pipes/age.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LeadListComponent } from './lead-list/lead-list.component';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AgePipe,
    SortPipe,
    FilterPipe,
    LeadListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule, 
  ],
  providers: [EmployeeServiceService,PaginationConfig ],
  bootstrap: [AppComponent],
})
export class AppModule {}
