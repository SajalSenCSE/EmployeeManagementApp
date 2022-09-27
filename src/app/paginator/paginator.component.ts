import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() dataPerPage: number = 5;
  @Output() selectPageEmit: EventEmitter<number> = new EventEmitter();
  @Output() dataPerPageEmit: EventEmitter<number> = new EventEmitter();

  preBtnDisable: boolean = false;
  nextBtnDisable: boolean = true;
  selectPage: number = 1;
  pageIndex: number = (this.selectPage - 1) * this.dataPerPage;

  constructor() {}

  ngOnInit(): void {}

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.dataPerPage = Number(newPageSize);
    this.dataPerPageEmit.emit(Number(newPageSize));
    this.changePage(1);
  }

  changePage(page: number) {
    this.selectPage = page;
    this.preAndNexDisable(page);
    this.selectPageEmit.emit(this.selectPage);
  }

  combinePreAndNextBtn(count: number) {
    this.selectPage = this.selectPage + count;
    this.changePage(this.selectPage);
    this.preAndNexDisable(this.selectPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.totalRecords / this.dataPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  preAndNexDisable(selectPage: number) {
    let tempForPre = selectPage;
    let tempForNex = this.pageNumbers.length;
    tempForPre > 1 ? (this.preBtnDisable = true) : (this.preBtnDisable = false);
    selectPage >= this.pageNumbers.length
      ? (this.nextBtnDisable = false)
      : (this.nextBtnDisable = true);
  }
}
