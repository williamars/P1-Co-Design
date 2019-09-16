document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://codesigndeaplicativos.firebaseio.com/')

  db.download('/', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */
    
    context = data['biblioteca'][value]
    coDesReplace('title', context)

    context = data
    console.log(data)
    console.log(data['biblioteca'][value])
   
    coDesReplace('.menu-list', context)

    context = data['biblioteca'][value]
    coDesReplace('.call', context)

    context = data['biblioteca'][value]
    coDesReplace('.book-list', context)
  })
})


/*
biblioteca: [
    analise....:
      nome
      desc
]

*/