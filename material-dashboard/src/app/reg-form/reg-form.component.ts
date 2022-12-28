import { Component, OnInit } from '@angular/core';
import { HomeService } from '../frontend/home/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private api: HomeService, private router: Router) { }

  ngOnInit(): void {
  }


  userForms = new FormGroup({
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'c_password': new FormControl('', Validators.required),
    'user_status': new FormControl('', Validators.required)
  })

  //insert data
  userinsert() {
    if (this.userForms.valid) {
      this.api.InsertUser(this.userForms.value).subscribe((res) => {
        alert("User created successfully")
        this.router.navigateByUrl("/login");
        this.userForms.reset();
      })
    }

  }

}
