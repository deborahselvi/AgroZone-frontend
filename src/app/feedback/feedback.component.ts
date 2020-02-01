import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback:any =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://deborahselvi.pythonanywhere.com/feebackdata").subscribe(
      (res) => {
        this.feedback = res['items'];
        console.log(res['items'])
      },
      (error) => {
        alert("Something went wrong");
      }
    )
  }

}
