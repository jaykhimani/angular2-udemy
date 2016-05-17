"use strict";
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { annotContainSpace: true };
        }
        return null;
    };
    UsernameValidator.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'jay') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
//# sourceMappingURL=username.validator.js.map