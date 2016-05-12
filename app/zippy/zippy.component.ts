import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
                <div class="panel-heading" style="cursor: pointer" (click)="toggle()">
                    {{ title }}
                    <i class="pull-right glyphicon" [ngClass]="{
                        'glyphicon-chevron-down': !isExpanded,
                        'glyphicon-chevron-up': isExpanded
                    }"></i>
                </div>
            <div class="panel-body" [style.display]="isExpanded ? 'block' : 'none'">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent {
    @Input() title;

    isExpanded = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
