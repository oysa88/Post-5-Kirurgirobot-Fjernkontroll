input.onGesture(Gesture.Shake, function () {
    radio.sendString("3333333366K66I")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(5)
