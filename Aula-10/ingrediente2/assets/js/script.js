/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    A função coDesConnect cria uma conexão com o Firebase.
  */
  let db = coDesConnect('https://codesigndeaplicativos.firebaseio.com/')

  /*
    O método download recebe dois parâmetros. O primeiro é
    o caminho até o dado específico que vocề deseja baixar.
    Reveja os slides para entender como caminhos funcionam.

    O segundo é uma função que deve ser chamada quando o
    dado terminar de ser baixado. Essa função recebe um
    parâmetro que é justamente o dado.

    ATENÇÃO: NÃO CHAME ESSE MÉTODO MAIS QUE UMA VEZ. NÃO
    É NECESSÁRIO E PODE CAUSAR PROBLEMAS DE SINCRONIZAÇÃO.
  */
  db.download('/', function(data) {

    /*
      Sim, abaixo estamos usando "in" em vez de "of", pois
      "of" você usa para iterar em listas. Para iterar nas
      chaves de um dicionário, usamos "in", como em Python.
      Sim, é confuso. Sinto muito.
    */
    for(let key in data) {

      /*
        O resultado deste loop pode ser visto no console.
      */
      console.log(data[key])
    }
  })
})
