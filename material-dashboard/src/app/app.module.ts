import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    JobListingComponent,
    JobDetailsComponent,
    HomeIndexComponent,
    RegFormComponent,
    CreateCvComponent,
    BlogPostComponent,
    BlogListComponent,
    BlogDetailsComponent,
    CategoryListComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
