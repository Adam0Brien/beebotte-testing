microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (feature) {
    microIoT.showUserText(1, feature.substr(9, 5))
    microIoT.microIoT_SendMessage(feature.substr(9, 5), microIoT.TOPIC.topic_1)
})
let randomValue = 0
microIoT.initDisplay()
basic.showNumber(1)
microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
basic.showString("WIFI")
microIoT.microIoT_MQTT(
"hYn5IyqJh7U9lfVdiSvSyJb1",
"ExMVG1hBAbrE0MFpyEwJJGJXAlT6zYwr",
"Motor/Command",
microIoT.SERVERS.Global
)
microIoT.microIoT_http_IFTTT("Motor/Command", "token_RBy8IAe7v1KvOkO7")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "Motor/microbitToCloud")
basic.showString("MQTT")
basic.forever(function () {
    randomValue = randint(0, 10)
    microIoT.showUserText(0, convertToText(randomValue))
    microIoT.microIoT_SendMessage(convertToText(randomValue), microIoT.TOPIC.topic_1)
    basic.pause(1000)
})
