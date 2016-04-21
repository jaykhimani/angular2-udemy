import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {LikesComponent} from '../likes/likes.component';

@Component({
    selector: 'tweets',
    template: `
        <div class="media" *ngFor="#tweet of tweets">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" [src]="tweet.imageUrl">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{tweet.userFirstName}}  {{tweet.userName}}</h4>
                <span>{{tweet.tweet}}</span><br/>
                <likes [noOfLikes]="tweet.likes"></likes>
            </div>
        </div>
    `,
    providers: [TweetService],
    directives: [LikesComponent]
})
export class TweetsComponent {
    tweets;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}
