'use strict';

module.exports = {
    FakeRoomWithSetState: function FakeRoomWithSetState() {
        var state = {
            temperature: 23,
            isSmoke: false
        };
        this.setState = function (temperature, isSmoke) {
            state = { temperature: temperature, isSmoke: isSmoke };
        };

        this.getRoomState = function () {
            return state;
        };
    } };

//# sourceMappingURL=FakeRoomWithSetState-compiled.js.map