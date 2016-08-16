import { Component } from '@angular/core';
import { FavoritesComponent } from './favorites/favorites.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { SignupFormComponent } from './signup/signup-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FavoritesComponent, ContactFormComponent, SignupFormComponent]
})
export class AppComponent {
  title = 'app sucks!';
}
