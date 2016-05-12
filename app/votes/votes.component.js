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
var VotesComponent = (function () {
    function VotesComponent() {
        this.voteCount = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VotesComponent.prototype.onClick = function (isUp) {
        if (isUp && this.myVote !== 1) {
            this.myVote++;
            this.voteCount++;
            this.vote.emit({ myVote: this.myVote });
        }
        else if (!isUp && this.myVote !== -1) {
            this.myVote--;
            this.voteCount--;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VotesComponent.prototype, "voteCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VotesComponent.prototype, "myVote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VotesComponent.prototype, "vote", void 0);
    VotesComponent = __decorate([
        core_1.Component({
            selector: 'votes',
            template: "\n        <div class='votes-container'>\n            <i class='glyphicon glyphicon-menu-up glyphicon-menu-icon' (click)='onClick(1)' [class.highlighted]='myVote === 1'></i>\n            <span>{{voteCount}}</span>\n            <i class='glyphicon glyphicon-menu-down glyphicon-menu-icon' (click)='onClick(0)' [class.highlighted]='myVote === -1'></i>\n        </div>\n    ",
            styles: ["\n        .votes-container {\n            width: 20px;\n            color: #999\n        }\n\n        .glyphicon-menu-icon {\n            cursor: pointer;\n            color: #ccc;\n        }\n\n        .highlighted {\n            color: orange;\n            cursor: default;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VotesComponent);
    return VotesComponent;
}());
exports.VotesComponent = VotesComponent;
//# sourceMappingURL=votes.component.js.map