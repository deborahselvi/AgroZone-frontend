import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/services/data-service.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  status:boolean;

  constructor(private data:DataServiceService) { }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status)
  }
  showHeaderArea(){
    this.data.changeStatus(!this.status); 
  }

}
