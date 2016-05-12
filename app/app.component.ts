import {Component} from '@angular/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LikesComponent} from './likes/likes.component';
import {VotesComponent} from './votes/votes.component';
import {TweetsComponent} from './tweet/tweets.component';
import {NgSwitchComponent} from './ngswitch/ngswitch.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact/contact-form.component';
import {SubscribeFormComponent} from './subscribe/subscribe-form.component';
import {SignupFormComponent} from './signup/signup-form.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikesComponent, VotesComponent, TweetsComponent, NgSwitchComponent, ZippyComponent, ContactFormComponent, SubscribeFormComponent, SignupFormComponent],
    pipes: [SummaryPipe]
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true,
        body: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam egestas nibh sed convallis. Donec vestibulum vehicula augue. Aenean id augue malesuada ipsum faucibus facilisis. Proin hendrerit lorem ultrices, finibus quam ut, luctus libero. Cras luctus mauris ut varius vehicula. Morbi condimentum nulla porta lobortis gravida. Nam metus nisl, porttitor non tortor imperdiet, ornare finibus nunc. Pellentesque quis mauris a turpis aliquet tincidunt rhoncus quis ipsum. Suspendisse semper quam in odio imperdiet, molestie aliquet neque ultricies. Ut ut gravida tortor. Nunc elementum gravida mauris.
        `
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
