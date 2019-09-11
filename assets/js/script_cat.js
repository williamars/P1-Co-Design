/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
/* document.addEventListener('DOMContentLoaded', function() {

  /*
    Neste exemplo, por simplicidade, vamos usar um dicionário
    hardcoded. No projeto, os dados devem ser construídos a
    partir dos dados baixados do Firebase, como vimos antes.
  */
/*  let cat = coDesConnect('https://comp1mec-80273.firebaseio.com/')

  /*
    A função coDesReplace recebe dois parâmetros. O primeiro
    é um seletor para localizar algum elemento da página. No
    exemplo abaixo, usamos ".list" para localizar o elemento
    cuja classe é "list". Não esqueça que é como no CSS: os
    nomes de classes devem começar com ponto.

    O segundo é um dicionário cujas chaves são palavras que
    estão entre {{ e }} nesse elemento e cujos valores são os
    textos que devem substituir essas ocorrências de {{}}.
  */
/*  coDesReplace('.list', cat)
}) */

document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let cat = coDesConnect('https://comp1mec-80273.firebaseio.com/')

  cat.download('/', function(data) {

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
    coDesReplace('.menu-list', context)

    context = data['biblioteca'][value]
    coDesReplace('.call', context)

    context = data['biblioteca'][value]
    coDesReplace('.book-list', context)
  })
})