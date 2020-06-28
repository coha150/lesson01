let json = require('./users.json');
let user = json.users
// console.log(user[1])

for (i = 0; i < user.length; i++) {
    // 後々ソートしたいからサラリーのキーとバリューを追加
    let name = user[i].name
    let rank = user[i].rank
    let years = user[i].years
    if (rank === "A" && years < 5) {
        user[i].salary = 3000 * years + 100000
    } else if (rank === "A" && years >= 5) {
        user[i].salary = 3000 * years + 120000
    } else if (rank === "B") {
        user[i].salary = 4000 * years + 140000
    } else {
        user[i].salary = 5000 * years + 160000
    }
    json.users.sort(function (a, b) {
        return b.salary - a.salary;
    });
}

for (i = 0; i < json.users.length; i++) {
    console.log(json.users[i].name + ":" + json.users[i].salary)
}
