let Humitat_Terra = 0
basic.showString("Hi")
basic.forever(function () {
	
})
basic.forever(function () {
    Humitat_Terra = pins.analogReadPin(AnalogReadWritePin.P2)
    basic.pause(300)
    music.ringTone(262)
    basic.pause(200)
    music.stopAllSounds()
    basic.showNumber(Humitat_Terra)
    if (Humitat_Terra > 600) {
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.showIcon(IconNames.Sad)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 128)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(10000)
        rekabit.brakeMotor(MotorChannel.M2)
        rekabit.clearAllRgbPixels()
    } else {
        rekabit.clearAllRgbPixels()
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.pause(28800000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Humitat_Terra)
    }
})
basic.forever(function () {
    basic.pause(10000)
    music.ringTone(262)
    basic.pause(200)
    music.stopAllSounds()
})
