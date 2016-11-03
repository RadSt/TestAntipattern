'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _room = require('../src/room');

var _NewAlarm = require('../src/NewAlarm');

var _NewRoom = require('../src/NewRoom');

var _alarm = require('../src/alarm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Пример тестового класса с антипаттернами:
//1. Не соответствующее название
//2. Дублирование кода иницализации
//3. Зависимые
//4. Несколько причин для падения
suite('when alarm working normal', function () {

    // 1. Не соответствующее название
    // в этом тесте в действительности происходит "alarm is not signal on when is no fire in the room"
    test('alarm is working normal', function () {
        var room = new _room.Room("kitchen", false, 24);
        //2. Дублирование инициализации 1
        var alarm = new _alarm.FireAlarm("kitchen", 40, true, 100);

        _assert2.default.equal(false, alarm.isSignalOn(room));
    });

    // 1.Не соответствующее название
    // в этом тесте в действительности происходит "alarm is not signal on when is no fire in the room"
    test('alarm is working normal', function () {
        var room = new _room.Room("kitchen", true, 40);
        //2. Дублирование инициализации 2
        var alarm = new _alarm.FireAlarm("kitchen", 40, true, 100);

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    // 1.Не соответствующее название
    test('alarm is working normal', function () {
        var room = new _room.Room("kitchen", false, 40);

        //2. Дублирование инициализации 3
        var alarm = new _alarm.FireAlarm("kitchen", 40, true, 100);

        _assert2.default.equal(false, alarm.isSignalOn(room));
    });

    //Что бы не было дублирования инициализации нужно выностиь в setup
    //При этом room в сетап выносить не нужно, так как она в тестах может изменяться

    //3. Зависимые тесты
    var alarm = new _NewAlarm.NewFireAlarm().withName("Kitchen Fire Alarm").withMaxTemperatureCondition(40).withSmokeReaction(true).build();

    var room = new _NewRoom.NewRoom().withName("kitchen").build();

    //Если удалить этот тест, следующий упадет
    test('Fire alarm is signaling when fire in the room', function () {
        room.startFire();
        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    test('Fire alarm is working', function () {
        _assert2.default.equal(true, alarm.isSignalOn(room));
    });

    //4. Несколко причин для падения - несколько assert-ов
    // act assert, act assert
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new _NewRoom.NewRoom().withName("kitchen").build();

        _assert2.default.equal(false, alarm.isSignalOn(room));

        room.startFire();

        _assert2.default.equal(true, alarm.isSignalOn(room));
    });
});
// еще два антипаттерна:
// медленные тесты и хрупкие тесты

//# sourceMappingURL=whenAlarmWorkingNormal-compiled.js.map