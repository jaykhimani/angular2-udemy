System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LikesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikesComponent = (function () {
                function LikesComponent() {
                    this.noOfLikes = 10;
                    this.liked = false;
                }
                LikesComponent.prototype.onClick = function () {
                    this.liked = !this.liked;
                    if (this.liked) {
                        this.noOfLikes++;
                    }
                    else {
                        this.noOfLikes--;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikesComponent.prototype, "noOfLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikesComponent.prototype, "liked", void 0);
                LikesComponent = __decorate([
                    core_1.Component({
                        selector: 'likes',
                        template: "\n        <i class='glyphicon glyphicon-heart' (click)=\"onClick()\" [class.highlighted]=\"liked\"></i>\n        <span>{{noOfLikes}}</span>\n    ",
                        styles: ["\n        .glyphicon-heart {\n            cursor: pointer;\n            color: #ccc;\n        }\n\n        .highlighted {\n            color: deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikesComponent);
                return LikesComponent;
            }());
            exports_1("LikesComponent", LikesComponent);
        }
    }
});
//# sourceMappingURL=likes.component.js.map