import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNavbarComponent } from './option-navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OptionNavbarComponent', () => {
  let component: OptionNavbarComponent;
  let fixture: ComponentFixture<OptionNavbarComponent>;
  let dom;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionNavbarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionNavbarComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the icon all_inbox button', async () => {
    const menu = dom.parentNode.querySelector('#all_inbox');
    expect(menu).toBeTruthy();
  });
  it('check the icon create button', async () => {
    const menu = dom.parentNode.querySelector('#create');
    expect(menu).toBeTruthy();
  });

  it('check the icon present_to_allbutton', async () => {
    const menu = dom.parentNode.querySelector('#present_to_all');
    expect(menu).toBeTruthy();
  });
  it('check the icon delete_outline button', async () => {
    const menu = dom.parentNode.querySelector('#delete_outline');
    expect(menu).toBeTruthy();
  });
  it('check the icon block button', async () => {
    const menu = dom.parentNode.querySelector('#block');
    expect(menu).toBeTruthy();
  });
  it('check the icon archive button', async () => {
    const menu = dom.parentNode.querySelector('#archive');
    expect(menu).toBeTruthy();
  });
  it('check the icon event_note button', async () => {
    const menu = dom.parentNode.querySelector('#event_note');
    expect(menu).toBeTruthy();
  });
});
