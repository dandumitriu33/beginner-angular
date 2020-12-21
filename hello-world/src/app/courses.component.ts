import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>
    // selection similar to css <div id="courses"> "#courses"
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `        
})
export class CoursesComponent {
    title = "List of courses";
    courses: any;

    constructor (service: CoursesService){
        // let service = new CoursesService(); // usinng DI instead
        // Angular has built in DI
        // must register the CoursesService class in app.module.ts Providers
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }

    // Logic for calling a HTTP service - tightly couple
    // the component to the endpoint - hard for tests
    // or in another place, this logic has to be repeated
    // or - a component should not include logic other than presentation logic
    // details should be delegated in other places - SERVICES
    // courses.service.ts

    


}