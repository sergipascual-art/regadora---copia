Humitat_Terra = 0
basic.show_string("Hi")

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global Humitat_Terra
    Humitat_Terra = pins.analog_read_pin(AnalogReadWritePin.P2)
    basic.pause(300)
    music.ring_tone(262)
    basic.pause(200)
    music.stop_all_sounds()
    basic.show_number(Humitat_Terra)
    if Humitat_Terra > 450:
        rekabit.set_all_rgb_pixels_color(0xff0000)
        basic.show_icon(IconNames.SAD)
        rekabit.run_motor(MotorChannel.M2, MotorDirection.FORWARD, 128)
        basic.pause(10000)
        rekabit.brake_motor(MotorChannel.M2)
    else:
        rekabit.set_all_rgb_pixels_color(0x00ff00)
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
        basic.clear_screen()
    basic.pause(10000)
basic.forever(on_forever2)

def on_forever3():
    if input.button_is_pressed(Button.A):
        basic.show_number(Humitat_Terra)
basic.forever(on_forever3)
