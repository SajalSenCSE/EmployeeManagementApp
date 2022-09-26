import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  constructor() {}
  @Input() totalRecords: number = 0;
  @Input() employeePerPage: number = 5;

  @Output() indexPageNo: EventEmitter<number> = new EventEmitter();
  @Output() employeePerPageEmit: EventEmitter<number> = new EventEmitter();

  preBtnDisable: boolean = false;
  nextBtnDisable: boolean = true;
  selectPage: number = 1;
  pageIndex: number = (this.selectPage - 1) * this.employeePerPage;

  ngOnInit(): void {}

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.indexPageNo.emit(Number(newPageSize));
    this.employeePerPage = Number(newPageSize);
    console.log(this.employeePerPage);
    this.changePage(1); //defaultPage will be 1
  }

  changePage(page: number) {
    this.selectPage = page;
  }

  prePage() {
    this.selectPage = this.selectPage - 1;
    this.changePage(this.selectPage);
    this.preAndNex(this.selectPage);
  }

  nextPage() {
    this.selectPage = this.selectPage + 1;
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
    if (selectPage >= tempForNex) {
      this.nextBtnDisable = false;
    } else {
      console.log(this.selectPage);
      this.nextBtnDisable = true;
    }
  }
}
