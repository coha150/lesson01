const arg2 = process.argv[2]
// console.log(arg2)
let min = Number(arg2.substr(3))
let hour = Number(arg2.substr(0, 2))
let min_plus = min + 45
if (min_plus > 60) {
    const hour2 = hour + 1
    if (hour2 >= 24) {
        console.log(hour2 - 24)
    } else {
        console.log(hour2)
    }
    console.log(min_plus - 60)
} else {
    console.log(hour)
    console.log(min_plus)
}

