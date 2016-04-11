import {Component} from 'angular2/core';

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
    isFavorite = true;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}
