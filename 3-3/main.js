const max = process.argv[2]
const array = []
// 星の数の配列を作る
for (i = 1; i <= max; i++) {
    array.push(i)
}
for (k = max - 1; k > 0; k--) {
    array.push(k)
}
console.log(array)

// 星の数によって星を表示していく
for (a = 0; a < max; a++) {
    const c = []
    for (b = 0; b < array.length; b++) {
        if (array[b] >= (max - a)) {
            c.push("*")
        } else {
            c.push(" ")
        }
    }
    console.log(c.join(" "))
}

