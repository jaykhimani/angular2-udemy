import {Component, Input} from 'angular2/core';

@Component({
    selector: 'likes',
    template: `
        <i class='glyphicon glyphicon-heart' (click)="onClick()" [class.highlighted]="liked"></i>
        <span>{{noOfLikes}}</span>
    `,
    styles: [`
        .glyphicon-heart {
            cursor: pointer;
            color: #ccc;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikesComponent {
    @Input() noOfLikes = 10;
    @Input() liked = false;

    onClick() {
        this.liked = !this.liked;
        if (this.liked) {
            this.noOfLikes++;
        } else {
            this.noOfLikes--;
        }
    }
}
