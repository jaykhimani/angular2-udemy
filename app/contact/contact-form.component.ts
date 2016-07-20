import {Component} from "@angular/core";
import {Contact} from "./Contact";

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact-form.template.html'
})
export class ContactFormComponent {
    model = new Contact("", "");
    onSuibmit(form) {
        console.log(form);
    }
}
