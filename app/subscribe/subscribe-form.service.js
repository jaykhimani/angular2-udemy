System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscribeFormService;
    return {
        setters:[],
        execute: function() {
            SubscribeFormService = (function () {
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
            exports_1("SubscribeFormService", SubscribeFormService);
        }
    }
});
//# sourceMappingURL=subscribe-form.service.js.map