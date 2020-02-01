import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/services/data-services.service';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean;
  faWindowClose = faWindowClose;

  constructor(private data:DataServiceService) { }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status)
  }
  closeHeaderArea(){
    this.data.changeStatus(false);
  }

}
