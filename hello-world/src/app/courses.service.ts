import { Component } from "@angular/core";


export class CoursesService {
    getCourses() {
        // simulating consuming an HTTP service
        return ["Course One", "Course Two", "Course Three"];
    }
}