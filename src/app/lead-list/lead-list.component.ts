import { Component, OnInit } from '@angular/core';
import { ILead } from '../models/ilead';
import { LeadService } from '../services/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {
  leadList:ILead[]=[];
  lead2:ILead[]=[];
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
    this.pageIndex=(this.selectPage-1)*this.leadPerPage;
    let endIndex=this.pageIndex+this.leadPerPage;
    console.log(this.pageIndex);
    console.log(endIndex)
    this.leadService.getAllLead(leadPerPage,selectedPage)
    .subscribe((res2)=>{
      this.leadList= res2.data;
      console.log(this.leadList)
      this.lead2=this.leadList.slice(this.pageIndex,endIndex);
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
    // this.sliceLead()
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

  // sliceLead(){
  //   this.pageIndex=(this.selectPage-1)*this.leadPerPage;
  //   let endIndex=this.pageIndex+this.leadPerPage;
  //   this.lead2=this.leadList.slice(this.pageIndex,endIndex);
  // }

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

