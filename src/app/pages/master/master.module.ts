import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MasterBusinessRuleSearchComponent } from './master-business-rule/master-business-rule-search/master-business-rule-search.component';
import { MasterItemSearchComponent } from './master-item/master-item-search/master-item-search.component';
import { MasterRouteSearchComponent } from './master-route/master-route-search/master-route-search.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterRouteNewComponent } from './master-route/master-route-new/master-route-new.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterRouteUpdateComponent } from './master-route/master-route-update/master-route-update.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DxAutocompleteModule, DxButtonModule, DxContextMenuModule, DxDataGridModule, DxDrawerModule, DxFormModule, DxListModule, DxScrollViewModule, DxToolbarModule, DxTreeViewModule } from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
                MasterRouteSearchComponent,
                MasterBusinessRuleSearchComponent,
                MasterRouteNewComponent,
                MasterRouteUpdateComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule, 
    InlineSVGModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    NgbModule,    
    DxDataGridModule,
    HttpClientModule,    
    DxDrawerModule,
  ],  
  exports:[
    MasterRouteSearchComponent,
    MasterBusinessRuleSearchComponent,
    MasterRouteNewComponent,
    MasterRouteUpdateComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ] ,
  providers: [
    
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class MasterModulo {}