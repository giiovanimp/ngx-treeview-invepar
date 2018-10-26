import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TreeViewComponent } from './tree-view.component';

import { AppTreeComponent } from './app-treeview.component';

@NgModule({
  declarations: [
    AppTreeComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppTreeComponent]
})
export class TreeViewNgModule { }
