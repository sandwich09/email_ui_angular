import { Injectable } from '@angular/core';

import { dataEmail ,Data} from '../model/model.email'
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  data : Number ;
  
  constructor() { }
  setState(data: Number){
    this.data = data;
   
  }
  getState(){
    
    return this.data;
  }
  getMockData(){
   
    return dataEmail;
  }
  setCheck(status:boolean,index:number){

    dataEmail[index].state = status
    console.log(dataEmail[index].from.name+" "+dataEmail[index].state);
  }
}
