import {Component} from 'angular2/core'

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact-form.template.html'
})
export class ContactFormComponent {
    log(name) {
        console.log(name);
    }
}
