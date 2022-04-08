microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    microIoT.showUserText(0, message)
    radio.sendValue("left", 105)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("left", 105)
})
microIoT.initDisplay()
basic.showIcon(IconNames.SmallSquare)
microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
microIoT.microIoT_MQTT(
"hYn5IyqJh7U9lfVdiSvSyJb1",
"ExMVG1hBAbrE0MFpyEwJJGJXAlT6zYwr",
"Motor/Command",
microIoT.SERVERS.Global
)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "microbit/leftcurrent")
radio.setGroup(1)
