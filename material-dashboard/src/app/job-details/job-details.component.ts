import { Component, OnInit } from '@angular/core';
import { HomeService } from '../frontend/home/home.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  getsinglevalue: any;
  constructor(private api: HomeService) { }

  getJob: any;
  ngOnInit(): void {
    this.api.getjobPost().subscribe((res) => {
      this.getJob = res.data;
      let value = localStorage.getItem("singleValue"); 
      this.getsinglevalue = JSON.parse(value);
      console.log(this.getsinglevalue);
    })
  }
}
