input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 40)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
    basic.pause(1100)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 40)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
    basic.pause(1100)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
    basic.pause(1500)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(1500)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 75)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
    basic.pause(550)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(1500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
    basic.pause(1500)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(1500)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 75)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
    basic.pause(550)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(1500)
})
basic.forever(function () {
    DFRobotMaqueenPlus.I2CInit()
})
