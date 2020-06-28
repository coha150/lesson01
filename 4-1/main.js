const argv = process.argv
const array = []
// 配列に入れる
for (i = 2; i < argv.length; i++) {
  array.push(argv[i])
}
// console.log(array)
// 大きい順に並べる
array.sort(
  function (a, b) {
    return (a - b)
  }
);
// console.log(array);
// [2]を表示
console.log(array[2])
