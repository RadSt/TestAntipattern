import assert from 'assert'
import { FakeFireRoom as FakeFireRoom} from '../test/FakeRoom'
import { NewFireAlarm } from '../src/NewAlarm'

//Тесты это часть вашего продукта и они должны нести бизнес ценность

//Пример тестового класса с антипаттернами:
//1. Тестирование фейков
//2. Вычисляем в тесте
suite('when alarm with full battery', function () {
    var alarm;

    setup(function() {
        alarm = new NewFireAlarm()
            .withName("Kitchen Fire Alarm")
            .withMaxTemperatureCondition(35)
            .withSmokeReaction(true)
            .build();
    });

    //антипаттерн - тестирование фейка
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new FakeFireRoom();

        room.startFire();

        //этот assert на самом деле на фейк, а не на тестируемый объект
        var roomState = room.getRoomState();
        assert.equal(true, roomState.smoke && roomState.temperature === 40);
        //Вычислений roomState.smoke && roomState.temperature === 40 в тестах  не должно быть.
        //Если в тесте происходят подобные вычисления, то скорее всего это два теста

        assert.equal(true, alarm.isSignalOn(room));
    });

    //антипаттерн тестирование фейка
    test('Fire alarm is not signaling when no fire in the room', function () {
        var room = new FakeFireRoom();

        var roomState = room.getRoomState();
        //этот assert на самом деле на фейк, а не на тестируемый объект
        assert.equal(true, !roomState.smoke && roomState.temperature === 23);

        assert.equal(false, alarm.isSignalOn(room));
    });
});