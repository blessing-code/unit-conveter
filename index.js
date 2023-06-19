
const input = document.getElementById("input-field")

const meterToFeet = document.getElementById("meters-feets")

const literToGallons = document.getElementById("liters-gallons")

const kilosToPounds = document.getElementById("kilos-pounds")

function convertBtn() {
    calculateMeterToFeet()
    calculateLiterToGallons()
    calculateKilosToPoundss()
}

function calculateMeterToFeet() {
    let meterAns = input.value * 3.281;
    let feetAns = input.value * 0.3048;
    meterToFeet.innerText = `
                ${input.value} meters = ${(meterAns.toFixed(2))} feets | ${input.value} feets = ${(feetAns.toFixed(2))} meters
    `
}

function calculateLiterToGallons() {
    let literAns = input.value * 0.264;
    let gallonAns = input.value * 37854;
    literToGallons.innerText = `
                ${input.value} liters = ${literAns.toFixed(2)} gallons | ${input.value} gallon = ${gallonAns.toFixed(2)} liters
    `
}

function calculateKilosToPoundss() {
    let kiloAns = input.value * 2.204;
    let poundAns = input.value * 0.4536;
    kilosToPounds.innerText = `
                ${input.value} kilos = ${kiloAns.toFixed(2)} pounds | ${input.value} pounds = ${poundAns.toFixed(2)} kilos
    `
}