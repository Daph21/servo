input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 180; index++) {
        servos.P1.setAngle(index)
        basic.pause(20)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 180; index++) {
        servos.P1.setAngle(180 - index)
        basic.pause(20)
    }
})
let servopos = 0
let lumiere = 0
servos.P1.setAngle(0)
basic.forever(function () {
    lumiere = input.lightLevel()
    servopos = pins.map(
    lumiere,
    0,
    255,
    0,
    180
    )
    servos.P1.setAngle(servopos)
    basic.pause(1000)
})
