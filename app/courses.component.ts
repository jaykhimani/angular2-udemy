import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <img [src]="imageURL" />
        <!--<input type="text" (input)="title = $event.target.value" [value]="title"/>-->
        Preview: {{ title }}
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
        <input type="button" (click)="onClick()" value="Click Me" />

        <input type="text" [(ngModel)]="someThing" />
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of the courses page";
    someThing = "SomeThins";
    imageURL = "http://lorempixel.com/400/200";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    onClick() {
        this.someThing = "";
    }
}
