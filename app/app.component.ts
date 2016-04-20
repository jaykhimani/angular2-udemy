import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoritesComponent} from './favorites.component';
import {LikesComponent} from './likes.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hi There</h1>
        <favorites [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorites>
        <i class="glyphicon glyphicon-star"></i>
        <likes></likes>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikesComponent]
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}
