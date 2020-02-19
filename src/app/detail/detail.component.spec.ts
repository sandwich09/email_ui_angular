import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { dataEmail ,Data} from '../model/model.email'
describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let dom;
  let img;
  let data;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports : [HttpClientModule]
    
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    
    dom = fixture.nativeElement;
    img = dom.querySelector('#chooseMail');
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check value for show detail',() => {
    spyOn(component.shared, 'getState').and.returnValue(0);
    expect(component.shared.getState()).toBe(0);
    expect(img).toBeTruthy;
  });
  it('check data mock service', async () => {
    spyOn(component.shared,'getMockData').and.returnValue(dataEmail)
    expect(component.dataDetail).toEqual(dataEmail)
    data = dom.querySelector('#dataId');
    expect(data).toBeTruthy;
  });
  


});
