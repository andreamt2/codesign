document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://quaruq.firebaseio.com/')


  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.menu-list', context)
    coDesReplace('.sidebar-list', context)
    coDesReplace('.categorias', context)
  })
})
