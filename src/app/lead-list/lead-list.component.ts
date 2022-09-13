
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  leadPerPage=20;
  totalLeadItem:number=60;
  page:number=1;
  
  constructor(private leadService:LeadService) { }
  
  ngOnInit(): void {
    console.log(this.page)
    this.getLeadData(this.leadPerPage,this.page);
  }

  getLeadData(leadPerPage:number,selectedPage:number){
    this.leadList$= this.leadService.getAllLead(leadPerPage,this.page)
    console.log(this.leadList$);
  }

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.leadPerPage = Number(newPageSize);
    this.ngOnInit() 
  }

  pageChange(event:number){
    this.page=event
    this.ngOnInit();
  }
  
}