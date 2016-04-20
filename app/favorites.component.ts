import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorites',
    template: `
        <i class="glyphicon"
           [class.glyphicon-star]="isFavorite"
           [class.glyphicon-star-empty]="!isFavorite"
           (click)="onClick()">
       </i>
    `
})
export class FavoritesComponent {
    @Input() isFavorite = true;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
