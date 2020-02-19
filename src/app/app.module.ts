import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OptionHeadNavComponent } from './option-head-nav/option-head-nav.component';
import { OptionNavbarComponent } from './option-navbar/option-navbar.component';
import { BodyComponent } from './body/body.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentInboxComponent } from './content-inbox/content-inbox.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { AutoCompleteTestComponent } from './auto-complete-test/auto-complete-test.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OptionHeadNavComponent,
    OptionNavbarComponent,
    BodyComponent,
    DetailComponent,
    ContentInboxComponent,
    AutoCompleteTestComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    materialModule,
    HttpClientModule,
    FormsModule , ReactiveFormsModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
