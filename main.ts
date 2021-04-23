let value = 0
basic.forever(function () {
    value = pins.digitalReadPin(DigitalPin.P1)
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    if (pins.digitalReadPin(DigitalPin.P1) < 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(300)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
