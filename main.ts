let degrees = 0
basic.forever(function () {
    degrees = randint(80, 100)
    if (degrees >= 90) {
        basic.showString("A+")
    } else if (degrees >= 85) {
        basic.showString("A")
    } else if (degrees >= 80) {
        basic.showString("A-")
    }
})
