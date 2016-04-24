System.register(['angular2/core', './courses/courses.component', './authors/authors.component', './favorites/favorites.component', './likes/likes.component', './votes/votes.component', './tweet/tweets.component', './ngswitch/ngswitch.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorites_component_1, likes_component_1, votes_component_1, tweets_component_1, ngswitch_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            },
            function (likes_component_1_1) {
                likes_component_1 = likes_component_1_1;
            },
            function (votes_component_1_1) {
                votes_component_1 = votes_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (ngswitch_component_1_1) {
                ngswitch_component_1 = ngswitch_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: 'Title',
                        isFavorite: true
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
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorites_component_1.FavoritesComponent, likes_component_1.LikesComponent, votes_component_1.VotesComponent, tweets_component_1.TweetsComponent, ngswitch_component_1.NgSwitchComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map