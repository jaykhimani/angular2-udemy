import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LikesComponent} from './likes/likes.component';
import {VotesComponent} from './votes/votes.component';
import {TweetsComponent} from './tweet/tweets.component';
import {NgSwitchComponent} from './ngswitch/ngswitch.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikesComponent, VotesComponent, TweetsComponent, NgSwitchComponent]
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
