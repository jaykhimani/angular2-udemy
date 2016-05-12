"use strict";
var SubscribeFormService = (function () {
    function SubscribeFormService() {
    }
    SubscribeFormService.prototype.getEmailFrequencyOptions = function () {
        return ["Daily", "Weekly", "Monthly"];
    };
    SubscribeFormService.prototype.submitForm = function (forme) {
        console.log(forme);
    };
    return SubscribeFormService;
}());
exports.SubscribeFormService = SubscribeFormService;
//# sourceMappingURL=subscribe-form.service.js.map