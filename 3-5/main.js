// 点数
const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60]
// 何点代に何人いるかの配列を作る
// その配列で3以上なら星、2以上なら星、1以上なら星。。みたいにしていく
let point = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (i = 0; i < students.length; i++) {
    const student = students[i]
    if (student >= 0 && student < 10) {
        point[0]++
    } else if (student >= 10 && student < 20) {
        point[1]++
    } else if (student >= 20 && student < 30) {
        point[2]++
    } else if (student >= 30 && student < 40) {
        point[3]++
    } else if (student >= 40 && student < 50) {
        point[4]++
    } else if (student >= 50 && student < 60) {
        point[5]++
    } else if (student >= 60 && student < 70) {
        point[6]++
    } else if (student >= 70 && student < 80) {
        point[7]++
    } else if (student >= 80 && student < 90) {
        point[8]++
    } else if (student >= 90 && student < 100) {
        point[9]++
    } else if (student >= 100) {
        point[10]++
    }
}
// console.log(point)
// point[0, 1, 1, 2, 2,1, 3,1,2,1,1]星の数

// 掛け算のやつみたいにする
const max = 3
for (i = 0; i < max; i++) {
    const array = []
    for (j = 0; j < point.length; j++) {
        if (point[j] >= max - i) {
            array.push("*")
        } else {
            array.push(" ")
        }
    }
    console.log(array.join("　"))
}
console.log("----------------------------------")
console.log("0 " + "10 " + "20 " + "30 " + "40 " + "50 " + "60 " + "70 " + "80 " + "90 " + "100 ")
