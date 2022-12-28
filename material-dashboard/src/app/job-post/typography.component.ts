import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../frontend/home/home.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private api: HomeService) { }

  ngOnInit() {


  }



  //   let JobTitel = req.body.job_title;
  //   let Job_Description = req.body.job_description;
  //   let Required_KSA = req.body.job_required_KSA;
  //   let Job_Edu_EXP = req.body.job_education_experience;
  //   let Job_Vacency = req.body.job_vacency;
  //   let Job_Nature = req.body.job_nature
  //   let Job_salary = req.body.job_salary;
  //   let deadline = req.body.job_deadline;
  //   let Company_name = req.body.company_name;
  //   let Company_des = req.body.company_description;
  //   let Company_add = req.body.company_address;
  //   let Email = req.body.email;
  //   let mobile = req.body.mobile;
  //   let Image = req.body.image;
  //   let Date = req.body.date;

  userForm = new FormGroup({
    'job_title': new FormControl('', Validators.required),
    'job_description': new FormControl('', Validators.required),
    'job_required_KSA': new FormControl('', Validators.required),
    'job_education_experience': new FormControl('', Validators.required),
    'job_vacency': new FormControl('', Validators.required),
    'job_nature': new FormControl('', Validators.required),
    'job_salary': new FormControl('', Validators.required),
    'job_deadline': new FormControl('', Validators.required),
    'company_name': new FormControl('', Validators.required),
    'company_description': new FormControl('', Validators.required),
    'company_address': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),
    'image': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'date': new FormControl('', Validators.required)
  })

  //insert data
  userSubmit() {
    if (this.userForm.valid) {
      this.api.InsertjobPost(this.userForm.value).subscribe((res) => {
        alert("data insert successfully");
        // console.log()
        this.userForm.reset();
      })
    }

  }

  cardImageBase64: any;
  isImageSaved: boolean;

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          //console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
