import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorites',
    templateUrl: 'app/favorites/favorites.template.html',
    styles: [`
            .glyphicon-star {
                color: orange;
            }
    `]
})
export class FavoritesComponent {
    @Input() isFavorite = true;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
