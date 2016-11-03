'use strict';

module.exports = {
    FakeFireRoom: function() {
        var isFireInTheRoom = false;

        this.startFire = function() {
            isFireInTheRoom = true;
        };

        this.withFire = function(){
            isFireInTheRoom = true;
          return this;
        };

        this.getRoomState = function() {
            return isFireInTheRoom ? {smoke: true, temperature: 40 } : {smoke: false, temperature: 23 };
        };
    }}