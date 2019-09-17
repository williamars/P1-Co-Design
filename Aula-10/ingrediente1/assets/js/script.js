/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    Uma query string é um dicionário armazenado no próprio
    endereço da página. O início dela é marcado por um "?"
    e ela consiste em um número indeterminado de pares da
    forma "chave=valor", separados por "&". Isso acabou de
    ser explicado nos slides.

    A função coDesExtract extrai a query string da página
    atual e a transforma em um dicionário JavaScript comum.
  */
  let params = coDesExtract()

  /*
    O resultado da linha abaixo pode ser visto no console.
  */
  console.log(params)
})
