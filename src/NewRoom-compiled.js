/**
 * Created by anna on 31.10.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewFireAlarm = NewFireAlarm;

var _room = require('./room');

function NewFireAlarm() {
    var state = {
        name: "kitchen",
        temperature: 23,
        isSmoke: false
    };
    //    New Room with Name "kitchen" with no smoke and temperature 24
    this.withName = function (name) {
        state.name = name;
        return this;
    };

    this.withTemperature = function (temperature) {
        state.temperature = temperature;
        return this;
    };

    this.withSmoke = function (isSmoke) {
        state.isSmoke = isSmoke;
        return this;
    };

    this.build = function () {
        console.log(state);
        return new _room.Room(state.name, state.isSmoke, state.temperature);
    };
};

//# sourceMappingURL=NewRoom-compiled.js.map