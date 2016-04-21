import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'votes',
    template: `
        <div class='votes-container'>
            <i class='glyphicon glyphicon-menu-up glyphicon-menu-icon' (click)='onClick(1)' [class.highlighted]='myVote === 1'></i>
            <span>{{voteCount}}</span>
            <i class='glyphicon glyphicon-menu-down glyphicon-menu-icon' (click)='onClick(0)' [class.highlighted]='myVote === -1'></i>
        </div>
    `,
    styles: [`
        .votes-container {
            width: 20px;
            color: #999
        }

        .glyphicon-menu-icon {
            cursor: pointer;
            color: #ccc;
        }

        .highlighted {
            color: orange;
            cursor: default;
        }
    `]
})
export class VotesComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    onClick(isUp) {
        if (isUp && this.myVote !== 1) {
            this.myVote++;
            this.voteCount++;
            this.vote.emit({myVote: this.myVote});
        } else if (!isUp && this.myVote !== -1) {
            this.myVote--;
            this.voteCount--;
            this.vote.emit({myVote: this.myVote});
        }

    }
}
