import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    // selection similar to css <div id="courses"> "#courses"
    template: '<h2>{{ "Title: " + getTitle() }}</h2>'
})
export class CoursesComponent {
    title = "List of courses";

    getTitle(){
        return this.title;
    }
}