import { Component } from '@angular/core';
import { FavoritesComponent } from './favorites/favorites.component';
import { ContactFormComponent } from './contact/contact-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FavoritesComponent, ContactFormComponent]
})
export class AppComponent {
  title = 'app sucks!';
}
