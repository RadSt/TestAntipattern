'use strict';

module.exports = {
    FakeFireRoom: function FakeFireRoom() {
        var isFireInTheRoom = false;

        this.startFire = function () {
            isFireInTheRoom = true;
        };

        this.stopFire = function () {
            isFireInTheRoom = false;
        };

        this.getRoomState = function () {
            return isFireInTheRoom ? { smoke: true, temperature: 40 } : { smoke: false, temperature: 23 };
        };
    } };

//# sourceMappingURL=FakeRoom-compiled.js.map