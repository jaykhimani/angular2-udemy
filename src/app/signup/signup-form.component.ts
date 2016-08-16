import {Component, ViewEncapsulation} from "@angular/core";
import {FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {UsernameValidator} from "./username.validator";

@Component({
  selector: 'signup-form',
  templateUrl: 'app/signup/signup-form.template.html',
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None
})
export class SignupFormComponent {

  // form = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      username: ['', Validators.compose([Validators.required]), UsernameValidator.shouldBeUnique],
      password: ['', Validators.required]
    });
  }

  //
  // signup() {
  //     this.form.find('username').setErrors({
  //         invalidLogin: true
  //     });
  //     console.log(this.form.value);
  // }
}
