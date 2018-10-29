import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Service class that represents PickListComponent.
 * @author odair.pereira@castgroup.com.br
 */
@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html'
})
export class PickListComponent implements OnInit {

  @Input() showButtons: boolean;
  @Input() isEdit: boolean;
  @Input() list: any[];
  @Input() listLabel: string;
  @Input() selectedLabel: string;

  items: any[] = [];

  /*
   * Items selected to be added to the selected list
   */
  selectedItems: any[] = [];

  /*
   * Items already added to the selected list
   */
  itemsSelected: any[] = [];

  /*
   * Items selected to be removed from the selected list
   */
  selectedItemsSelected: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items = this.list;
  }

  public addSelectedItems(event) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      const item = this.items.find(element => element.description() === this.selectedItems[i]);
      const index = this.items.indexOf(item);
      this.itemsSelected.push(item);
      this.items.splice(index, 1);
    }
    this.selectedItems = [];
  }

  public removeSelectedItems(event) {
    for (let i = 0; i < this.selectedItemsSelected.length; i++) {
      const item = this.itemsSelected.find(element => element.description() === this.selectedItemsSelected[i]);
      const index = this.itemsSelected.indexOf(item);
      this.items.push(item);
      this.itemsSelected.splice(index, 1);
    }
    this.selectedItemsSelected = [];
  }

  getSelectedItems() {
    return this.itemsSelected;
  }
}
