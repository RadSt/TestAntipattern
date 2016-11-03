import assert from 'assert'
import { FakeRoomWithSetState as Room} from '../test/FakeRoomWithSetState'
import { NewFireAlarm } from '../src/NewAlarm'

//Пример тестового класса с антипаттернами:
//логика в тестах (for, if, switch и т.п.)

suite('when alarm working normal', function () {
    var alarm;

    setup(function() {
        alarm = new NewFireAlarm()
            .withName("Kitchen Fire Alarm")
            .withMaxTemperatureCondition(40)
            .withSmokeReaction(true)
            .build();
    });

    //антипаттерн цикл - логики в тестах быть не должно
    //иначе Вы начинаете тестировать не логику метода, а то что логика в тесте работает корректно
    test('Fire alarm is signaling when fire in the room', function () {
        var room = new Room();
        for (var i = 35; i< 50; i = i + 10){
            room.setState(i, true);

            if(i <= 40){
                assert.equal(false, alarm.isSignalOn(room));
            } else {
                assert.equal(true, alarm.isSignalOn(room));
            }
        }
    });

});