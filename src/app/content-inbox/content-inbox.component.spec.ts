import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentInboxComponent } from './content-inbox.component';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from '../services/shared.service';

import { dataEmail ,Data} from '../model/model.email'
describe('ContentInboxComponent', () => {
  let component: ContentInboxComponent;
  let fixture: ComponentFixture<ContentInboxComponent>;
  let dom; 
  let button;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInboxComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports : [materialModule,BrowserAnimationsModule]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ContentInboxComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    button = dom.querySelector('#filter');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('don\'t open the menu when clicking on the filter button', async () => {
    const menu = dom.parentNode.querySelector('.mat-menu-panel');
    expect(menu).toBeFalsy();
  });

  it('open the menu when clicking on the filter button', async () => {
    button.click();
    const menu = dom.parentNode.querySelector('.mat-menu-panel');
    expect(menu).toBeTruthy();
  });
  it('check the click button Inbox', async () => {

    const menu = dom.parentNode.querySelector('#inbox');
    expect(menu).toBeTruthy();
  });
  it('check the button Inbox and dataId is 0', async () => {
    component.onAreaListControlChanged(0)
    expect(component.dataId).toEqual(0);
    expect(component.shared.data).toEqual(0);
  });
  it('check data mock service', async () => {
    spyOn(component.shared,'getMockData').and.returnValue(dataEmail)
    expect(component.dataEmail).toEqual(dataEmail)
  });

});
