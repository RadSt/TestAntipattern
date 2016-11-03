import assert from 'assert'
import { NewFireAlarm } from '../src/NewAlarm'
import { FakeFireRoom as Room } from '../test/FakeRoom'

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
    setup(function() {
        alarm = new NewFireAlarm()
            .withEmptyBattery()
            .build();
    });

    //хороший
    //по шаблону AAA (arrange act assert)
    test('Fire Alarm is not signaling when fire is in the room', function () {
        //arrange
        //использование фейковой комнаты и  dsl
        //создание alarm вынесено в setup
        var room = new Room()
                        .withFire();
        //act
        var isSignalOn = alarm.isSignalOn(room);

        //assert
        assert.equal(false, isSignalOn);
    });

    //хороший тест: AAA (arrange act assert)
    test('Fire Alarm is not signaling when no fire is in the room', function () {
        //arrange
        //использование фейковой комнаты и  dsl
        //создание alarm вынесено в setup
        var room = new Room();

        //act
        var isSignalOn = alarm.isSignalOn(room);

        //assert
        assert.equal(false, isSignalOn);
    });
});