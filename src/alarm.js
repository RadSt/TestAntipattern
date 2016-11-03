'use strict';

export function FireAlarm(name, temperatureCondition, smokeCondition, battary) {
    this.battary = battary;
    this.isSignalOn = function (room) {
        var state = room.getRoomState();
        return this.battary !=0 && state.smoke == smokeCondition && state.temperature >= temperatureCondition;
    }
};
