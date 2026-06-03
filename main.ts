function stop_onUltrasonic() {
    if (zoombit.readUltrasonic() < 10) {
        zoombit.brake()
    }
    
}

basic.showIcon(IconNames.Square)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
basic.forever(function on_forever() {
    if (zoombit.isLineDetectedOn(LinePosition.Center)) {
        zoombit.move(MotorDirection.Forward, 128)
        stop_onUltrasonic()
    } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
        zoombit.setMotorsSpeed(50, 100)
        stop_onUltrasonic()
    } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
        zoombit.setMotorsSpeed(100, 50)
        stop_onUltrasonic()
    } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
        zoombit.setMotorsSpeed(0, 100)
        stop_onUltrasonic()
    } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
        zoombit.setMotorsSpeed(100, 0)
        stop_onUltrasonic()
    } else {
        zoombit.brake()
    }
    
})
