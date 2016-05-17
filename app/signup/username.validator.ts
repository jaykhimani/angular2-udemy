import {Control} from '@angular/common';

export class UsernameValidator {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0) {
            return { annotContainSpace: true };
        }

        return null;
    }

    static shouldBeUnique(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(function()  {
                if (control.value === 'jay') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}
