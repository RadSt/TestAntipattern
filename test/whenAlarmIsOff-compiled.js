'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _NewAlarm = require('../src/NewAlarm');

var _FakeRoom = require('../test/FakeRoom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('when alarm with empty battery', function () {
    var alarm;
    setup(function () {
        alarm = new _NewAlarm.NewFireAlarm().withMaxTemperatureCondition(40).withSmokeReaction(true).withEmptyBattery().build();
    });

    //хороший тест: AAA (arrange act assert)
    test('If Fire Alarm is not signaling when fire is in the room', function () {
        //arrange
        //использование фейковой комнаты и  dsl
        var room = new _FakeRoom.FakeFireRoom().withFire();
        //act

        //
        _assert2.default.equal(false, alarm.isSignalOn(room));
    });

    test('alarm is not signaling when there is no fire in the room', function () {
        var room = new _FakeRoom.FakeFireRoom();

        _assert2.default.equal(false, alarm.isSignalOn(room));
    });
});

//# sourceMappingURL=whenAlarmIsOff-compiled.js.map