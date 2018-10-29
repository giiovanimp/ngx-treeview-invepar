import IPickListModel from '../../pick-list/pick-list.model';

export class Item implements IPickListModel {

  constructor (public id: any, public descricao: string) { }

  description(): string {
    return this.descricao;
  }

  value(): any {
    return this.id;
  }
}
