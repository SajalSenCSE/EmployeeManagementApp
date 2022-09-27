import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit,OnChanges {

  @Input() totalRecords: number = 0;
  @Input() employeePerPage: number = 5;

  @Output() selectPagePageEmit: EventEmitter<number> = new EventEmitter();
  @Output() employeePerPageEmit: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // this.indexPageNoEmit.emit(5)
    // this.employeePerPageEmit.emit(5)
  }


  preBtnDisable: boolean = false;
  nextBtnDisable: boolean = true;
  selectPage: number = 1;
  pageIndex: number = (this.selectPage - 1) * this.employeePerPage;

  ngOnInit(): void {}

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.employeePerPage = Number(newPageSize);
    this.employeePerPageEmit.emit(Number(newPageSize));
    this.changePage(1);
  }

  changePage(page: number) {
    this.selectPage = page;
    this.preAndNex(page);
    this.selectPagePageEmit.emit(this.selectPage);
  }

  combinePreAndNextBtn(count:number){
    this.selectPage = this.selectPage + count;
    this.changePage(this.selectPage);
    this.preAndNex(this.selectPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.totalRecords / this.employeePerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  preAndNex(selectPage: number) {
    let tempForPre = selectPage;
    let tempForNex = this.pageNumbers.length;
    if (tempForPre > 1) {
      this.preBtnDisable = true;
    } else {
      this.preBtnDisable = false;
    }
    if (selectPage >= this.pageNumbers.length) {
      this.nextBtnDisable = false;
    } else {
      this.nextBtnDisable = true;
    }
  }
}
