'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _room = require('../src/room');

var _NewAlarm = require('../src/NewAlarm');

var _NewRoom = require('../src/NewRoom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('when alarm working normal', function () {
    var alarm = new _NewAlarm.NewFireAlarm().withName("Kitchen Fire Alarm").withMaxTemperatureCondition(40).withSmokeReaction(true).build();

    test('Fire Alarm is signaling when fire is in the room', function () {
        var room = new _NewRoom.NewRoom().build();

        room.startFire();

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    test('Fire Alarm is signaling when fire is in the room', function () {
        var room = new _NewRoom.NewRoom().withName("kitchen").withTemperature(45).withSmoke(true).build();

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    test('alarm is not signaling when is no fire in the room', function () {
        var room = new _room.Room("kitchen", false, 24);

        _assert2.default.equal(false, alarm.isSignalOn(room));
    });
});

//# sourceMappingURL=whenAlarmWorkingNormalDSL-compiled.js.map