document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://comp1mec-80273.firebaseio.com/')
  db.download('/', function(data) {
    for(let key in data) {
      console.log(data[key])
    }
  })
  let context = data
    coDesReplace('.list', context)
})
