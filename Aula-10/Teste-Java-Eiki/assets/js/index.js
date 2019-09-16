document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codesigndeaplicativos.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.menu-list', context)
    coDesReplace('.section-list', context)
  })
})
