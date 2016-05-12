import {Component} from '@angular/core';
import {SubscribeFormService} from './subscribe-form.service';

@Component({
    selector:'subscribe-form',
    templateUrl: 'app/subscribe/subscribe-form.template.html',
    providers: [SubscribeFormService]
})
export class SubscribeFormComponent {
    emailFrequencyOptions;
    subscribeFormService;
    constructor(subscribeFormService: SubscribeFormService) {
        this.subscribeFormService = subscribeFormService;
        this.emailFrequencyOptions = subscribeFormService.getEmailFrequencyOptions();
    }

    onSubmit(form) {
        this.subscribeFormService.submitForm(form);
    }
 }
