import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionHeadNavComponent } from './option-head-nav.component';
import { materialModule } from '../material.module';
describe('OptionHeadNavComponent', () => {
  let component: OptionHeadNavComponent;
  let fixture: ComponentFixture<OptionHeadNavComponent>;
  let app : OptionHeadNavComponent;
  let dom; 
  
  beforeEach(async(() => {
   
    TestBed.configureTestingModule({
      declarations: [ OptionHeadNavComponent ],
      imports : [materialModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionHeadNavComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    dom = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the icon apps button', async () => {
    const menu = dom.parentNode.querySelector('#apps');
    expect(menu).toBeTruthy();
  });
  it('check the icon search button', async () => {
    const menu = dom.parentNode.querySelector('#search');
    expect(menu).toBeTruthy();
  });

  it('check the icon icon_question button', async () => {
    const menu = dom.parentNode.querySelector('#icon_question');
    expect(menu).toBeTruthy();
  });
  it('check the icon icon_settings button', async () => {
    const menu = dom.parentNode.querySelector('#icon_settings');
    expect(menu).toBeTruthy();
  });
  it('check the icon icon_help button', async () => {
    const menu = dom.parentNode.querySelector('#icon_help');
    expect(menu).toBeTruthy();
  });
  it('check the icon icon_volume button', async () => {
    const menu = dom.parentNode.querySelector('#icon_volume');
    expect(menu).toBeTruthy();
  });
  it('check the icon icon_notification button', async () => {
    const menu = dom.parentNode.querySelector('#icon_notification');
    expect(menu).toBeTruthy();
  });
  it('check the icon icon_circle button', async () => {
    const menu = dom.parentNode.querySelector('#icon_circle');
    expect(menu).toBeTruthy();
  });


});
