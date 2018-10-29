import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from '../lib';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { CityComponent } from './city/city.component';
import { RoomComponent } from './room/room.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found.component';
import { DropdownTreeviewSelectModule } from './dropdown-treeview-select';
import { I18n } from './i18n';
import { DisabledOnSelectorDirective } from './disabled-on-selector.directive';
import {PickListComponent} from '../pick-list/pick-list.component';
import {DualSelectComponent} from './dual-select/dual-select.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TreeviewModule.forRoot(),
        DropdownTreeviewSelectModule,
        AppRoutingModule
    ],
    declarations: [
        NotFoundComponent,
        BookComponent,
        CityComponent,
        RoomComponent,
        ProductComponent,
        AppComponent,
        DisabledOnSelectorDirective,
        PickListComponent,
        DualSelectComponent
    ],
    providers: [
        I18n
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
