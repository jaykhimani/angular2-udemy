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
var common_1 = require('@angular/common');
var username_validator_1 = require('./username.validator');
var SignupFormComponent = (function () {
    function SignupFormComponent(fb) {
        this.form = fb.group({
            username: ['', common_1.Validators.compose([common_1.Validators.required, username_validator_1.UsernameValidator.cannotContainSpace]), username_validator_1.UsernameValidator.shouldBeUnique],
            password: ['', common_1.Validators.required]
        });
    }
    SignupFormComponent.prototype.signup = function () {
        console.log(this.form.value);
    };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/signup/signup-form.template.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup-form.component.js.map