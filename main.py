def on_forever():
    if zoombit.is_line_detected_on(LinePosition.CENTER):
        zoombit.move(MotorDirection.FORWARD, 128)
        stop_onUltrasonic()
    elif zoombit.is_line_detected_on(LinePosition.LEFT1):
        zoombit.set_motors_speed(50, 100)
        stop_onUltrasonic()
    elif zoombit.is_line_detected_on(LinePosition.RIGHT1):
        zoombit.set_motors_speed(100, 50)
        stop_onUltrasonic()
    elif zoombit.is_line_detected_on(LinePosition.LEFT2):
        zoombit.set_motors_speed(0, 100)
        stop_onUltrasonic()
    elif zoombit.is_line_detected_on(LinePosition.RIGHT2):
        zoombit.set_motors_speed(100, 0)
        stop_onUltrasonic()
    else:
        zoombit.brake()

def stop_onUltrasonic():
    if zoombit.read_ultrasonic() < 10:
        zoombit.brake()
basic.show_icon(IconNames.SQUARE)
music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
music.PlaybackMode.IN_BACKGROUND)

basic.forever(on_forever)
