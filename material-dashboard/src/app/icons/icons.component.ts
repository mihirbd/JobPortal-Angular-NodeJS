import { Component, OnInit } from '@angular/core';
import { HomeService } from '../frontend/home/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private api: HomeService, private router: Router) { }


  ngOnInit() {
  }
  userForms = new FormGroup({
    'blog_title': new FormControl('', Validators.required),
    'blog_description': new FormControl('', Validators.required),
    'blog_image': new FormControl('', Validators.required),

  })

  //insert data
  bloginsert() {
    if (this.userForms.valid) {
      console.log(this.userForms);
      this.api.Insertblog(this.userForms.value).subscribe((res) => {
        alert("Blog created successfully")

        //this.router.navigateByUrl("/login");
        this.userForms.reset();
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
