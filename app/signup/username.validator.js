"use strict";
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidator.prototype.shouldBeUnique = function (control) {
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
//# sourceMappingURL=username.validator.js.map