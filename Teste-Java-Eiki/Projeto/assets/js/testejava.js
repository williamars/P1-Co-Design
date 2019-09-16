document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://comp1mec-80273.firebaseio.com/')
  db.download('/', function(data) {
  	let context = data
  	console.log(data.portfolio.software.projetos.game.titulo)
    coDesReplace('.proj-title', data)
    coDesReplace('.equipe-text1', data)
    coDesReplace('.material-text1', data)
    coDesReplace('.proj-subtitle', data)
  })
})
