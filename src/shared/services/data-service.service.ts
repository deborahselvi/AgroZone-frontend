import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private statusMobNav = new BehaviorSubject(false);
  currentStatus = this.statusMobNav.asObservable();

  constructor() { }

  changeStatus(status:boolean){
    this.statusMobNav.next(status);
  }
}
