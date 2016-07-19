import {Component} from "@angular/core";
import {TweetService} from "./tweet.service";
import {LikesComponent} from "../likes/likes.component";

@Component({
    selector: 'tweets',
    template: `
        <div class="media" *ngFor="let tweet of tweets">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" [src]="tweet.imageUrl">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{tweet.userFirstName}}  <span class="handle">{{tweet.userName}}</span></h4>
                <span>{{tweet.tweet}}</span><br/>
                <likes [noOfLikes]="tweet.likes"></likes>
            </div>
        </div>
    `,
    styles: [`
        .handle {
            color: #ccc;
        }

        .media {
            margin-bottom: 20px;
        }

        .media-object {
            border-radius: 8px;
        }
    `],
    providers: [TweetService],
    directives: [LikesComponent]
})
export class TweetsComponent {
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}
