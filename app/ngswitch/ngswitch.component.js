"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NgSwitchComponent = (function () {
    function NgSwitchComponent() {
        this.viewMode = 'map';
    }
    NgSwitchComponent = __decorate([
        core_1.Component({
            selector: 'switch-demo',
            template: "\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode === 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode === 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" nsSwitchDefault>Map View Content</template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NgSwitchComponent);
    return NgSwitchComponent;
}());
exports.NgSwitchComponent = NgSwitchComponent;
//# sourceMappingURL=ngswitch.component.js.map