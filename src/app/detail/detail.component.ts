import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { dataEmail ,Data} from '../model/model.email'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public shared:SharedService) { }
  
  dataDetail = this.shared.getMockData();
  ngOnInit() {
    
  }


 
}
