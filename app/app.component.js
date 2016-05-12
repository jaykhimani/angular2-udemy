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
var courses_component_1 = require('./courses/courses.component');
var authors_component_1 = require('./authors/authors.component');
var favorites_component_1 = require('./favorites/favorites.component');
var likes_component_1 = require('./likes/likes.component');
var votes_component_1 = require('./votes/votes.component');
var tweets_component_1 = require('./tweet/tweets.component');
var ngswitch_component_1 = require('./ngswitch/ngswitch.component');
var summary_pipe_1 = require('./pipes/summary.pipe');
var zippy_component_1 = require('./zippy/zippy.component');
var contact_form_component_1 = require('./contact/contact-form.component');
var subscribe_form_component_1 = require('./subscribe/subscribe-form.component');
var signup_form_component_1 = require('./signup/signup-form.component');
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: 'Title',
            isFavorite: true,
            body: "\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam egestas nibh sed convallis. Donec vestibulum vehicula augue. Aenean id augue malesuada ipsum faucibus facilisis. Proin hendrerit lorem ultrices, finibus quam ut, luctus libero. Cras luctus mauris ut varius vehicula. Morbi condimentum nulla porta lobortis gravida. Nam metus nisl, porttitor non tortor imperdiet, ornare finibus nunc. Pellentesque quis mauris a turpis aliquet tincidunt rhoncus quis ipsum. Suspendisse semper quam in odio imperdiet, molestie aliquet neque ultricies. Ut ut gravida tortor. Nunc elementum gravida mauris.\n        "
        };
        this.tweets = {
            totalLikes: 12,
            tweetLiked: false
        };
    }
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.template.html',
            directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorites_component_1.FavoritesComponent, likes_component_1.LikesComponent, votes_component_1.VotesComponent, tweets_component_1.TweetsComponent, ngswitch_component_1.NgSwitchComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, subscribe_form_component_1.SubscribeFormComponent, signup_form_component_1.SignupFormComponent],
            pipes: [summary_pipe_1.SummaryPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map