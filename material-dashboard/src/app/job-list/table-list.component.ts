import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../frontend/home/home.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private api: HomeService, private router: Router) { }
  getJob: any;

  ngOnInit(): void {
    this.api.getjobPost().subscribe((res) => {
      this.getJob = res.data;
    }) 
  }

  getID(id: any) {
    this.api.getjobPostByID(id).subscribe((res) => {
      localStorage.setItem("singleValue", JSON.stringify(res.data));
      this.router.navigateByUrl("/job-details");
    });
  }












}
