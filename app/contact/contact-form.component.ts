import {Component} from '@angular/core'

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact-form.template.html'
})
export class ContactFormComponent {
    onSuibmit(form) {
        console.log(form);
    }
}
