
import { Component, OnInit } from '@angular/core';
import { GetLeadData } from '../models/get-lead-data';
import { ILead } from '../models/ilead';
import { LeadService } from '../services/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {
  leadList:ILead[]=[];
  preBtnDisable:boolean=false;
  nextBtnDisable:boolean=true;
  leadPerPage=10;
  pageIndex:number;
  selectPage=1;

  constructor(private leadService:LeadService) { }

  ngOnInit(): void {
     this.getLeadData(this.leadPerPage,this.selectPage);
  }

  getLeadData(leadPerPage:number,selectedPage:number){
    this.leadService.getAllLead(leadPerPage,selectedPage)
    .subscribe((res2:GetLeadData)=>{
      this.leadList= res2.data;
    });
  }

  get pageNumbers(){
    return Array(Math.ceil((50) / this.leadPerPage)).fill(0).map((x, i) => i + 1);
  }

  prePage(){
    this.selectPage=this.selectPage-1;
    this.changePage(this.selectPage)
  }

  changePage(page:number){
    this.selectPage=page
    this.getLeadData(this.leadPerPage,this.selectPage);
    this.preAndNext(this.selectPage);
  }

  nextPage(){
    this.selectPage=this.selectPage+1;
    this.changePage(this.selectPage)
  }

  leadPerPageChange(e:Event){
    const newPageSize=(e.target as HTMLInputElement).value;
    this.leadPerPage=Number(newPageSize);
    this.changePage(1)
  }

  preAndNext(selectPage2:number){
    let tempNextPage=this.pageNumbers
    if(selectPage2>1){
      this.preBtnDisable=true;
    }else{
      this.preBtnDisable=false;
    }
    if(selectPage2 >= this.pageNumbers.length){
      this.nextBtnDisable=false
    }else{
      this.nextBtnDisable=true
    }
  }

}