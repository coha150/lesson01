// データ読込
let json = require('./playdata.json');
let data = json.data

let json2 = require('./songs.json');
let songs = json2.songs

// ソートする
data.sort(function (a, b) {
  return b.count - a.count
})
// console.log(data)


for (i = 0; i < data.length; i++) {
  const count = data[i].count
  // console.log(count)
  const title = songs[i].title
  // console.log(title)
  console.log(`${i + 1}:${title}\t${count}`)
}