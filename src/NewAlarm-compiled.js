'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewFireAlarm = NewFireAlarm;

var _alarm = require('./alarm');

function NewFireAlarm() {
    var state = {
        name: "fire Alarm",
        temperatureCondition: 100,
        isSmoke: true
    };

    this.withName = function (name) {
        state.name = name;
        return this;
    };

    this.withMaxTemperatureCondition = function (maxTemperature) {
        state.maxTemperature = maxTemperature;
        return this;
    };

    this.withSmokeReaction = function (isSmoke) {
        state.isSmoke = isSmoke;
        return this;
    };

    this.build = function () {
        return new _alarm.FireAlarm(state.name, state.temperatureCondition, state.isSmoke);
    };
};

//# sourceMappingURL=NewAlarm-compiled.js.map