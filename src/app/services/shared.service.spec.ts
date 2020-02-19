import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { dataEmail ,Data} from '../model/model.email'
import { HttpClientModule } from '@angular/common/http';
describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers : [SharedService],
    imports : [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
  it('should be setState(), set data number', () => {
    const service: SharedService = TestBed.get(SharedService);
    service.setState(1)
    expect(service.data).toEqual(1);
  });
  it('should be getState(), get data number', () => {
    const service: SharedService = TestBed.get(SharedService);
    service.setState(1)
    expect(service.getState()).toBe(service.data);
  });
  it('should be getMockData(), get data', () => {
    const service: SharedService = TestBed.get(SharedService);
    
    expect(service.getMockData()).toEqual(dataEmail);
  });
});
