'use strict';

module.exports = {
    Room: function(name, smoke, temperature) {
        this.name = name;
        this.roomState = {
            smoke: smoke,
            temperature: temperature
        };

        this.startFire = function() {
            this.roomState.smoke = true;
            this.roomState.temperature = 40;
        };

        this.getRoomState = function() {
            return this.roomState;
        };
    }}