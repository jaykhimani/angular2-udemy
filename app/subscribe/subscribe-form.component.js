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
var subscribe_form_service_1 = require('./subscribe-form.service');
var SubscribeFormComponent = (function () {
    function SubscribeFormComponent(subscribeFormService) {
        this.subscribeFormService = subscribeFormService;
        this.emailFrequencyOptions = subscribeFormService.getEmailFrequencyOptions();
    }
    SubscribeFormComponent.prototype.onSubmit = function (form) {
        this.subscribeFormService.submitForm(form);
    };
    SubscribeFormComponent = __decorate([
        core_1.Component({
            selector: 'subscribe-form',
            templateUrl: 'app/subscribe/subscribe-form.template.html',
            providers: [subscribe_form_service_1.SubscribeFormService]
        }), 
        __metadata('design:paramtypes', [subscribe_form_service_1.SubscribeFormService])
    ], SubscribeFormComponent);
    return SubscribeFormComponent;
}());
exports.SubscribeFormComponent = SubscribeFormComponent;
//# sourceMappingURL=subscribe-form.component.js.map