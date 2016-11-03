'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _NewAlarm = require('../src/NewAlarm');

var _FakeRoom = require('../test/FakeRoom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//пример хороших тестов
//одна причина для падения в каждом тесте
//независимые
//не хрупкие
//быстрые
//говорящие названия

suite('when alarm with empty battery', function () {
    var alarm;
    // тесты правильно писать до реализации по циклу Red Green Refactor
    // Причем Red так же является обязательной стадией
    // Во время Red Вы убеждаетесь, что тест и правда падает, если функциональность еще не реализована
    setup(function () {
        alarm = new _NewAlarm.NewFireAlarm().withEmptyBattery().build();
    });

    //хороший
    //по шаблону AAA (arrange act assert)
    test('Fire Alarm is not signaling when fire is in the room', function () {
        //arrange
        //использование фейковой комнаты и  dsl
        //создание alarm вынесено в setup
        var room = new _FakeRoom.FakeFireRoom().withFire();
        //act
        var isSignalOn = alarm.isSignalOn(room);

        //assert
        _assert2.default.equal(false, isSignalOn);
    });

    //хороший тест: AAA (arrange act assert)
    test('Fire Alarm is not signaling when no fire is in the room', function () {
        //arrange
        //использование фейковой комнаты и  dsl
        //создание alarm вынесено в setup
        var room = new _FakeRoom.FakeFireRoom();

        //act
        var isSignalOn = alarm.isSignalOn(room);

        //assert
        _assert2.default.equal(false, isSignalOn);
    });
});

//# sourceMappingURL=whenAlarmWithEmptyBattery-compiled.js.map