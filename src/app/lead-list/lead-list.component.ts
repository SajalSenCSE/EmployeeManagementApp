
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';
import { GetDataOutPut } from '../models/GetDataOutPut';
import { LeadOutPut } from '../models/LeadOutPut';
import { LeadService } from '../services/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {
  leadList$:Observable<GetDataOutPut<LeadOutPut>>;
  leadPerPage=10;
  totalLeadItem:number=60;
  page:number=1;
  
  
  constructor(private leadService:LeadService) { }
  
  ngOnInit(): void {
    this.getLeadData(this.leadPerPage,this.page);
  }

  getLeadData(leadPerPage:number,selectedPage:number){
    this.leadList$= this.leadService.getAllLead(leadPerPage,this.page)
  }

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.leadPerPage = Number(newPageSize);
    this.getLeadData(this.leadPerPage,this.page) 
  }

  pageChanged(event:PageChangedEvent):void{
    this.page=event.page;
    this.getLeadData(this.leadPerPage,this.page) 
  }
  
}