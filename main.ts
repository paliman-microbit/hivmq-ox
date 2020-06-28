input.onButtonPressed(Button.A, function () {
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "0")
})
input.onButtonPressed(Button.B, function () {
    KSRobot_IOT.MQTTPublish1(KSRobot_IOT.TOPIC.Topic0, "1")
})
KSRobot_IOT.MQTT_Data1(KSRobot_IOT.TOPIC.Topic0, function (message) {
    if (message == "1") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Square)
    } else if (message == "0") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
})
pins.digitalWritePin(DigitalPin.P0, 0)
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"my_home",
"888",
KSRobot_IOT.IOT_Config.STATION
)
basic.showString(KSRobot_IOT.Get_IP())
KSRobot_IOT.MQTT_set(
"broker.hivemq.com",
1883,
"client888",
"",
""
)
KSRobot_IOT.MQTTSubscribe1(KSRobot_IOT.TOPIC.Topic0, "iot1")
