const a = Number(process.argv[2])
const b = Number(process.argv[3])

for (i = 0; i < a; i++) {
    const array = []
    for (k = 0; k < b / 2 - 1; k++) {
        // 偶数の時
        if (i % 2 === 0) {
            array.push("\*" + "-")
        } else {
            array.push("-" + "*")
        }
        // 奇数の時
        if (i % 2 === 0 && k / 2 % 2 === 1) {
            array.push("*")
        } else if (i % 2 === 1 && k / 2 % 2 === 1) {
            array.push("-")
        }
    }
    console.log(String(array.join("")))
}
