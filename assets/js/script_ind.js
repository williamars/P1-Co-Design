document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://comp1mec-80273.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.index-sections', context)
    context = data
    coDesReplace('.main-menu', context)
    context = data['portfolio']
    coDesReplace('.index-header', context)
  })
})
