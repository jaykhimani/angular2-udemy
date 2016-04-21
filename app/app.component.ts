import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LikesComponent} from './likes/likes.component';
import {VotesComponent} from './votes/votes.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hi There</h1>
        <favorites [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorites>
        <i class="glyphicon glyphicon-star"></i>
        <likes [liked]="tweets.tweetLiked" [noOfLikes]="tweets.totalLikes"></likes>
        <votes (vote)='onVote($event)'></votes>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikesComponent, VotesComponent]
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true
    }

    tweets = {
        totalLikes: 12,
        tweetLiked: false
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    onVote($event) {
        console.log($event);
    }
}
