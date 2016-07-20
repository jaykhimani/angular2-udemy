import {Component} from "@angular/core";
import {SubscribeFormService} from "./subscribe-form.service";
import {Subscribe} from "./subscribe.model";

@Component({
    selector:'subscribe-form',
    templateUrl: 'app/subscribe/subscribe-form.template.html',
    providers: [SubscribeFormService]
})
export class SubscribeFormComponent {
    emailFrequencyOptions;
    subscribeFormService;
    model = new Subscribe("", "", "");
    constructor(subscribeFormService: SubscribeFormService) {
        this.subscribeFormService = subscribeFormService;
        this.emailFrequencyOptions = subscribeFormService.getEmailFrequencyOptions();
    }

    onSubmit(form) {
        this.subscribeFormService.submitForm(form);
    }
 }
