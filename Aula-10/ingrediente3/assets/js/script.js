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
    'paragrafo': 'Uso de Templates',
  }

  /*
    A função coDesReplace recebe dois parâmetros. O primeiro
    é um seletor para localizar algum elemento da página. No
    exemplo abaixo, usamos ".main" para localizar o elemento
    cuja classe é "main". Não esqueça que é como no CSS: os
    nomes de classes devem começar com ponto.

    O segundo é um dicionário cujas chaves são palavras que
    estão entre {{ e }} nesse elemento e cujos valores são os
    textos que devem substituir essas ocorrências de {{}}.
  */
  coDesReplace('.main', context)
})
