import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  //userForm!: FormGroup;

  constructor(private api: AppService) { }

  //get Data
  readUser: any;
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res) => {
      this.readUser = res.data;
    })
  }



  userForm = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  })

  //insert data
  userSubmit() {
    if (this.userForm.valid) {
      this.api.CreateUser(this.userForm.value).subscribe((res) => {
        console.log("data insert successfully")
        this.userForm.reset();
      })
    }

  }



}
