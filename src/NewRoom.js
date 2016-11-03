'use strict';
import { Room} from './room'
export function NewRoom () {
    var state = {
        name: "kitchen",
        temperature: 23,
        isSmoke: false
    };
//    New Room with Name "kitchen" with no smoke and temperature 24
    this.withName = function (name) {
        state.name = name;
        return this;
    }

    this.withTemperature = function (temperature){
        state.temperature = temperature;
        return this;
    }

    this.withSmoke = function (isSmoke){
        state.isSmoke = isSmoke;
        return this;
    }

    this.withouthSmoke = function (){
        state.isSmoke = false;
        return this;
    }


    this.build = function () {
        return new Room(state.name, state.isSmoke, state.temperature);
    }
};