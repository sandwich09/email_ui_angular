import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let dom; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance; 
    dom = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('check the icon new_message button', async () => {
    const menu = dom.parentNode.querySelector('#new_message');
    expect(menu).toBeTruthy();
  });
  it('check the icon mark button', async () => {
    const menu = dom.parentNode.querySelector('#mark');
    expect(menu).toBeTruthy();
  });

  it('check the icon undo button', async () => {
    const menu = dom.parentNode.querySelector('#undo');
    expect(menu).toBeTruthy();
  });
  it('check careate the component-inbox', async () => {
    expect('app-content-inbox').toBeDefined();
  });
  it('check create the component-detail', async () => {
    expect('app-detail').toBeDefined();
  });
});
