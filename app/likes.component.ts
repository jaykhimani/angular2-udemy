import {Component} from 'angular2/core';

@Component({
    selector: 'likes',
    template: `
        <i class='glyphicon glyphicon-heart heartcolor' (mouseover)="over=true" (mouseout)="over=false" (click)="onClick()" [style.cursor]="over ? 'pointer' : 'normal'" [style.color]="liked ? 'deeppink' : '#ccc'"></i>
        {{noOfLikes}}
    `
})
export class LikesComponent {
    noOfLikes = 10;
    liked = false;
    over = false;

    onClick() {
        this.liked = !this.liked;
        if (this.liked) {
            this.noOfLikes++;
        } else {
            this.noOfLikes--;
        }
    }
}
