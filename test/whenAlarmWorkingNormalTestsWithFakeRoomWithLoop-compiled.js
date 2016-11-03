'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _FakeRoomWithSetState = require('../test/FakeRoomWithSetState');

var _NewAlarm = require('../src/NewAlarm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Пример тестового класса с антипаттернами:
//логика в тестах (for, if, switch и т.п.)

suite('when alarm working normal', function () {
    var alarm;

    setup(function () {
        alarm = new _NewAlarm.NewFireAlarm().withName("Kitchen Fire Alarm").withMaxTemperatureCondition(40).withSmokeReaction(true).build();
    });

    //антипаттерн цикл - логики в тестах быть не должно
    //иначе Вы начинаете тестировать не логику метода, а то что логика в тесте работает корректно
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new _FakeRoomWithSetState.FakeRoomWithSetState();
        for (var i = 35; i < 50; i = i + 10) {
            room.setState(i, true);

            if (i <= 40) {
                _assert2.default.equal(false, alarm.isSignalOn(room));
            } else {
                _assert2.default.equal(true, alarm.isSignalOn(room));
            }
        }
    });
});

//# sourceMappingURL=whenAlarmWorkingNormalTestsWithFakeRoomWithLoop-compiled.js.map