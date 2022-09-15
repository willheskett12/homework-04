let interval = 150
basic.forever(function () {
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(c, r)
            basic.pause(interval)
        }
    }
    basic.clearScreen()
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(r, c)
            basic.pause(interval)
        }
    }
    basic.clearScreen()
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(c, r)
            basic.pause(100)
            led.unplot(c, r)
        }
    }
    basic.clearScreen()
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(r, c)
            basic.pause(100)
            led.unplot(r, c)
        }
    }
    basic.clearScreen()
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(c, r)
            basic.pause(interval)
            c += 1
        }
    }
    basic.clearScreen()
    for (let r = 0; r <= 4; r++) {
        for (let c = 0; c <= 4; c++) {
            led.plot(c, r)
            basic.pause(interval)
        }
        r += 1
    }
    basic.clearScreen()
    for (let c = 0; c <= 4; c++) {
        for (let r = 0; r <= 4; r++) {
            led.plot(c, r)
            basic.pause(interval)
            c += 1
        }
    }
    basic.clearScreen()
})
