import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component ({
    selector: 'courses',
    template: `
        <h2>{{ title | lowercase }}</h2>
        <h5>Course avg. rating: {{ rating | number}}</h5>
        <ul>
            <li *ngFor="let course of courses; index as i">
                {{i}}. {{ course.title }}
            </li>
        </ul>
        <br/>
        <input [(ngModel)]="email" (keyup.enter)="onEmailInputKeyUp(email.value)"/>
        <br/>
        <button class="btn btn-primary" 
            (click)="onSaveButtonClick($event)"
            (mouseover)="onMouseOver($event)"
        >Save</button>
    `
})

export class CoursesComponent {
    title = 'page title';
    email = "me@example.com";
    rating = 4.29;
    courses;
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onSaveButtonClick ($event) {
        $event.stopPropagation();
        console.log("button was clicked", $event);
    }
    onMouseOver ($event) {
        $event.stopPropagation();
        console.log("button was moused over", $event);
    }
    onKeyUp($event) {
        if($event.keyCode === 13) {
            console.log('enter was pressed');
        }
    }
    onEmailInputKeyUp () {
        console.log("input was added", this.email);
    }
}