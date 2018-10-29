import {Component, OnInit} from '@angular/core';
import {DualSelectService} from './dual-select-service';
import {Item} from './item.model';

@Component({
  selector: 'dual-select',
  templateUrl: './dual-select.component.html',
  providers: [DualSelectService]
})
export class DualSelectComponent implements OnInit {

  items: Item[] = [];

  constructor (private service: DualSelectService) {  }

  ngOnInit() {
    this.items = this.service.getItems();
  }

}
