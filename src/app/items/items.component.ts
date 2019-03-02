import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  shoptab = 'planet';
  shoptabDescription = ['choose your unique', 'special', 'for you'];
  constructor() { }

  ngOnInit() {
  }

  setShoptab(curShoptab) {
    this.shoptab = curShoptab;
    console.log(this.shoptab + 'lalala');
  }

}
