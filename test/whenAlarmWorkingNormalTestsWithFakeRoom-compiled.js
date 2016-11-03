'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _FakeRoom = require('../test/FakeRoom');

var _NewAlarm = require('../src/NewAlarm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Тесты это часть вашего продукта и они должны нести бизнес ценность

//Пример тестового класса с антипаттернами:
//1. Тестирование фейков
//2. Вычисляем в тесте
suite('when alarm with full battery', function () {
    var alarm;

    setup(function () {
        alarm = new _NewAlarm.NewFireAlarm().withName("Kitchen Fire Alarm").withMaxTemperatureCondition(35).withSmokeReaction(true).build();
    });

    //антипаттерн - тестирование фейка
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new _FakeRoom.FakeFireRoom();

        room.startFire();

        //этот assert на самом деле на фейк, а не на тестируемый объект
        var roomState = room.getRoomState();
        _assert2.default.equal(true, roomState.smoke && roomState.temperature === 40);
        //Вычислений roomState.smoke && roomState.temperature === 40 в тестах  не должно быть.
        //Если в тесте происходят подобные вычисления, то скорее всего это два теста

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    //антипаттерн тестирование фейка
    test('Fire alarm is not signaling when no fire in the room', function () {
        var room = new _FakeRoom.FakeFireRoom();

        var roomState = room.getRoomState();
        //этот assert на самом деле на фейк, а не на тестируемый объект
        _assert2.default.equal(true, !roomState.smoke && roomState.temperature === 23);

        _assert2.default.equal(false, alarm.isSignalOn(room));
    });
});

//# sourceMappingURL=whenAlarmWorkingNormalTestsWithFakeRoom-compiled.js.map