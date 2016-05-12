"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var auto_grow_directive_1 = require('./../auto-grow.directive');
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.title = "The title of the courses page";
        this.someThing = "SomeThins";
        this.imageURL = "http://lorempixel.com/400/200";
        this.courses = courseService.getCourses();
    }
    CoursesComponent.prototype.onClick = function () {
        this.someThing = "";
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n        <h2>Courses</h2>\n        {{ title }}\n        <img [src]=\"imageURL\" />\n        <!--<input type=\"text\" (input)=\"title = $event.target.value\" [value]=\"title\"/>-->\n        Preview: {{ title }}\n        <ul>\n            <li *ngFor=\"#course of courses\">{{course}}</li>\n        </ul>\n        <input type=\"button\" (click)=\"onClick()\" value=\"Click Me\" />\n\n        <input type=\"text\" [(ngModel)]=\"someThing\" />\n    ",
            providers: [course_service_1.CourseService],
            directives: [auto_grow_directive_1.AutoGrowDirective]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map