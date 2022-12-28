import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../frontend/home/home.service';
@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  constructor(private api: HomeService, private router: Router) { }
  getsinglevalue: any;
  getJob: any;
  ngOnInit(): void {
    this.api.getjobPost().subscribe((res) => {
      this.getJob = res.data;
    });

    this.api.getjobPost().subscribe((res) => {
      this.getJob = res.data;
      let value = localStorage.getItem("singleValue");
      this.getsinglevalue = JSON.parse(value);
      //console.log(this.getsinglevalue);
    })
  }


  getID(id: any) {
    this.api.getjobPostByID(id).subscribe((res) => {
      localStorage.setItem("singleValue", JSON.stringify(res.data));
      this.router.navigateByUrl("/job-details");
    });
  }

}

