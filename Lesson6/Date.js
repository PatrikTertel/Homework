let startDate = new Date((2000, 01, 01))
let finishDate = new Date()
let count = 0
for (let  date = startDate; date <= finishDate; date.setDate(date.getDate() +1)) {
    if (date.getDate() === 13 && date.getDay() === 5) {
        count++
    }
}

console.log(count)