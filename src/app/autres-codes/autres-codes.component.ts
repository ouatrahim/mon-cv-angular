import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autres-codes',
  // templateUrl: './autres-codes.component.html',
  template: '<div style="color: red;"> Templates dans component.ts </div>',
  // styleUrls: ['./autres-codes.component.scss']
  styles: ['div {border: 2px solid black;}', 'div {margin: 30px;}']
})
export class AutresCodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
