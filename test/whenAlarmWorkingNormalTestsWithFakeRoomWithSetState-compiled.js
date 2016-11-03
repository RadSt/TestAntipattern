'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _FakeRoom = require('../test/FakeRoom');

var _NewAlarm = require('../src/NewAlarm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('when alarm working normal', function () {
    var alarm;

    setup(function () {
        alarm = new _NewAlarm.NewFireAlarm().withName("Kitchen Fire Alarm").withMaxTemperatureCondition(35).withSmokeReaction(true).build();
    });

    //тестирование фейка
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new _FakeRoom.FakeFireRoom();

        room.startFire();

        var roomState = room.getRoomState();
        _assert2.default.equal(true, roomState.smoke && roomState.temperature === 40);

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    //тестирование фейка
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new _FakeRoom.FakeFireRoom();

        room.startFire();

        var roomState = room.getRoomState();
        _assert2.default.equal(true, roomState.smoke && roomState.temperature === 40);

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });
});

//# sourceMappingURL=whenAlarmWorkingNormalTestsWithFakeRoomWithSetState-compiled.js.map