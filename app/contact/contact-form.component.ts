import {Component} from "@angular/core";
import {Contact} from "./contact.model";

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact-form.template.html'
})
export class ContactFormComponent {
    model = new Contact("", "");

    onSubmit(form) {
        console.log(form);
    }
}
