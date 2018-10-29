import {Item} from './item.model';

export class DualSelectService {
  getItems(): any {
    const items: Item[] = [];
    items.push(new Item(2, 'Item 2'));
    items.push(new Item(3, 'Item 3'));
    items.push(new Item(4, 'Item 4'));
    return items;
  }
}
