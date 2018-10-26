import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-tree-view [data]="treeData" [collapseAll]="collapseAll" [selectAll]="selectAll" (onClick)="click($event)" (onChange)="onChange($event)">
      </app-tree-view>
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-sm btn-secondary" (click)="collapseAll = true">Collapse All</button>
            <button type="button" class="btn btn-sm btn-secondary" (click)="collapseAll = false">Expand All</button>
        </div>
        <div class="btn-group" role="group" aria-label="Second group">
            <button type="button" class="btn btn-sm btn-secondary" (click)="selectAll = true">Check All</button>
            <button type="button" class="btn btn-sm btn-secondary" (click)="selectAll = false">Uncheck All</button>
        </div>
      </div>  
      
  `,
  styles: [`
  `],
  exportAs: 'AppTreeComponent'
})
export class AppTreeComponent {
  
  public treeData = [
    {'ID': 1, 'NAME': 'ROOT_1'}, {'ID': 2, 'NAME': 'ROOT_2'},
    {'ID': 3, 'NAME': 'ROOT_3', 'PARENT_ID': 2},
    {'ID': 4, 'NAME': 'ROOT_4', 'PARENT_ID': 3},
    {'ID': 5, 'NAME': 'ROOT_5', 'PARENT_ID': 4},
    {'ID': 6, 'NAME': 'ROOT_6', 'PARENT_ID': 7}, 
    {'ID': 7, 'NAME': 'ROOT_7'},
    {'ID': 8, 'NAME': 'ROOT_8', 'PARENT_ID': 7},
    {'ID': 9, 'NAME': 'ROOT_9', 'PARENT_ID': 7},
    {'ID': 10, 'NAME': 'ROOT_10', 'PARENT_ID': 7},
    {'ID': 11, 'NAME': 'ROOT_11', 'PARENT_ID': 7},
    {'ID': 12, 'NAME': 'ROOT_12', 'PARENT_ID': 7},
    {'ID': 13, 'NAME': 'ROOT_13'},
    {'ID': 14, 'NAME': 'ROOT_14'},
    {'ID': 15, 'NAME': 'ROOT_15', 'PARENT_ID': 4},
    {'ID': 16, 'NAME': 'ROOT_16', 'PARENT_ID': 4},
    {'ID': 17, 'NAME': 'ROOT_17', 'PARENT_ID': 16},
    {'ID': 18, 'NAME': 'ROOT_18', 'PARENT_ID': 16},
    {'ID': 19, 'NAME': 'ROOT_19', 'PARENT_ID': 18},
    {'ID': 20, 'NAME': 'ROOT_20', 'PARENT_ID': 2},
    {'ID': 21, 'NAME': 'ROOT_21', 'PARENT_ID': 2},
    {'ID': 22, 'NAME': 'ROOT_22', 'PARENT_ID': 3},
    {'ID': 23, 'NAME': 'ROOT_23', 'PARENT_ID': 3},
    {'ID': 24, 'NAME': 'ROOT_24', 'PARENT_ID': 3},
    {'ID': 25, 'NAME': 'ROOT_25', 'PARENT_ID': 4},
    {'ID': 26, 'NAME': 'ROOT_26', 'PARENT_ID': 18}
  ];
  public collapseAll: boolean;
  public selectAll: boolean;
  
  click(node: any){
    console.log(node);
  }

  onChange(data){
    console.log(data);
  }
}