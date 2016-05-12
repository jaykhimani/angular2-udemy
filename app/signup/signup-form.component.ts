import {Component} from '@angular/core';
import {Control, ControlGroup, Validators, FormBuilder} from '@angular/common';
import {UsernameValidator} from './username.validator';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup/signup-form.template.html'
})
export class SignupFormComponent {
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required, UsernameValidator.cannotContainSpace])],
            password: ['', Validators.required]
        })

    }

    signup() {
        console.log(this.form.value);
    }
}
