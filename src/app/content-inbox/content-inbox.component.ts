import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-content-inbox',
  templateUrl: './content-inbox.component.html',
  styleUrls: ['./content-inbox.component.css'],

})

export class ContentInboxComponent implements OnInit {
  dataEmail = this.shared.getMockData();
  dataId : Number;
  isCheck: boolean = false;
  checkAll: boolean = false;

  constructor(public shared:SharedService) { }
  ngOnInit() {
   
  }
  onAreaListControlChanged(data : Number){
    this.dataId = data
    this.shared.setState(this.dataId);
   
  }
  changeCheck(event,id) {
    const checkedd = event.target.checked;
    if (event.target.name == 'dataEmail') {
     
      this.updateState(checkedd,id-1);
    }
    if (this.isCheck && this.checkAll) {
      event.target.checked = true;
      this.updateState(checkedd,id-1);
    }
  }
  updateState(status:boolean,i:number){
    this.shared.setCheck(status,i);
  }
  allCheck(event) {
    const checked = event.target.checked;
    for(let i = 0; i<this.dataEmail.length;i++){
      this.updateState(checked ,i);
    }
  }

}
