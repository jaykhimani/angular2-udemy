"use strict";
var TweetService = (function () {
    function TweetService() {
    }
    TweetService.prototype.getTweets = function () {
        return [
            {
                imageUrl: 'http://lorempixel.com/100/100?1',
                userName: '@abc',
                userFirstName: 'Abc',
                tweet: 'Some tweet content',
                likes: 12
            }, {
                imageUrl: 'http://lorempixel.com/100/100?2',
                userName: '@xyz',
                userFirstName: 'Xyz',
                tweet: 'Some tweet content Xyz',
                likes: 4
            }, {
                imageUrl: 'http://lorempixel.com/100/100/people?3',
                userName: '@pqr',
                userFirstName: 'Pqr',
                tweet: 'Some tweet content Pqr',
                likes: 17
            },
        ];
    };
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map