document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let cat = coDesConnect('https://comp1mec-80273.firebaseio.com/')

  cat.download('/', function(data) {
    context = data['portfolio'][value]
    coDesReplace('title', context)
    context = data
    coDesReplace('.main-menu', context)
    context = data['portfolio'][value]
    coDesReplace('.software-sections', context)
    context = data['portfolio'][value]
    coDesReplace('.software-menu-item-image', context)
    context = data
    coDesReplace('.section-title', context)
  })
})