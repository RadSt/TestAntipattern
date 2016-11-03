'use strict';

module.exports = {
    FakeRoomWithSetState: function() {
        var state = {
            temperature: 23,
            smoke: false
        };
        this.setState = function(temperature, isSmoke) {
            state = {temperature: temperature, smoke: isSmoke};
        };

        this.getRoomState = function() {
            return state;
        };
    }}