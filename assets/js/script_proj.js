document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let categ = params['categ']


  let db = coDesConnect('https://comp1mec-80273.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.main-menu', context)

    context = data['portfolio'][categ]['projetos'][value]
    coDesReplace('.blabla', context)

    context = data['portfolio'][categ]['projetos'][value]
    coDesReplace('.proj-title', context)

    context = data['portfolio'][categ]['projetos'][value]
    coDesReplace('.proj-eq-mat', context)

    context = data['portfolio'][categ]['projetos'][value]
    coDesReplace('.blabla2', context)

    context = data['portfolio'][categ]['projetos'][value]
    coDesReplace('.proj-subtitle', context)

  })
})
