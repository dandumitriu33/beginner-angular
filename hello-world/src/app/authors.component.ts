import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
        `  
})
export class AuthorsComponent {
    title = "List of authors";
    authors: any;

    constructor (service: AuthorsService){
        // let service = new CoursesService(); // usinng DI instead
        // Angular has built in DI
        // must register the CoursesService class in app.module.ts Providers
        this.authors = service.getAuthors();
    }

    getTitle(){
        return this.title;
    }
}