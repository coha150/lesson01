const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let countCo = 0
let countHa = 0
for (i = 0; i < str.length; i++) {
    if (str[i] === "こ" && str[i + 1] === "は" && str[i + 2] === "る") {
        countCo++
    } else if (str[i] === "は" && str[i + 1] === "る" && str[i + 2] === "こ") {
        countHa++
    }
}
console.log(`こはる：${countCo}`)
console.log(`はるこ：${countHa}`)