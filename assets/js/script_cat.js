/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    Neste exemplo, por simplicidade, vamos usar um dicionário
    hardcoded. No projeto, os dados devem ser construídos a
    partir dos dados baixados do Firebase, como vimos antes.
  */
  let context = {
    'bigfour': {
      'fed': {
        'nome': 'Roger Federer',
        'numSlams': 20,
        'lesionado': false,
      },
      'nad': {
        'nome': 'Rafael Nadal',
        'numSlams': 19,
        'lesionado': false,
      },
      'djo': {
        'nome': 'Novak Djokovic',
        'numSlams': 16,
        'lesionado': true,
      },
      'mur': {
        'nome': 'Andy Murray',
        'numSlams': 3,
        'lesionado': true,
      },
    },
  }

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
  coDesReplace('.list', context)
})
