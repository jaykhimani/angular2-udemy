import {FormControl} from '@angular/forms';

export class UsernameValidator {
    static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }

        return null;
    }

    static shouldBeUnique(control: FormControl) {
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
