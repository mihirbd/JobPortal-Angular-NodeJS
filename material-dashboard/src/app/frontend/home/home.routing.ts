import { Routes } from '@angular/router';
import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { HomeIndexComponent } from 'app/home-index/home-index.component';
import { JobDetailsComponent } from 'app/job-details/job-details.component';
import { JobListingComponent } from 'app/job-listing/job-listing.component';
import { RegFormComponent } from 'app/reg-form/reg-form.component';
import { ResumeComponent } from 'app/resume/resume.component';


export const HomeRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: HomeIndexComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: ContactComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: AboutComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: JobListingComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: JobDetailsComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: RegFormComponent
        }]
    },
    {
        path: '',
        children: [{
            path: '',
            component: ResumeComponent
        }]
    },

    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home-index', component: HomeIndexComponent },
    { path: 'job-listing', component: JobListingComponent },
    { path: 'reg-form', component: RegFormComponent },
    { path: 'job-details', component: JobDetailsComponent },
    { path: 'resume', component: ResumeComponent }


];
