// 0から9までの数字が入った箱
const array = []
//arrayからランダムに選ばれた数字が入る箱
const randomNumber = []
for (i = 0; i < 10; i++) {
    array.push(i)
}

// 箱の中からランダムに選ぶ
// ダブらないように入れていく
for (i = 0; i < 50; i++) {
    const a = String((array[Math.floor(Math.random() * array.length)]))
    if (!randomNumber.includes(a)) {
        randomNumber.push(a)
    }
}
console.log(randomNumber)
