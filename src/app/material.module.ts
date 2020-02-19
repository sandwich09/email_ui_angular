import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
  
   
} from '@angular/material';
@NgModule({
 
  imports: [MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatListModule,
    AngularSvgIconModule,
    HttpClientModule ,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatAutocompleteModule,
    
  
   
  ],
  exports: [MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    AngularSvgIconModule,
    HttpClientModule ,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatAutocompleteModule,
  

  ]

  })
  export class materialModule { }
  