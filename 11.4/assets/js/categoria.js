document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let strlink = "projeto.html?id=" + value +"&key={{@key}}"
  let link = document.querySelector(".link2")
  link.href = strlink

  let db = coDesConnect('https://quaruq.firebaseio.com/')

  db.download('/', function(data) {

    context = data
    coDesReplace('.menu-list', context)
    coDesReplace('.sidebar-list', context)
    
    context = data['portifolio'][value]
    coDesReplace('.title-categoria', context)
    coDesReplace('.projetos', context)
    coDesReplace('.menu-title', context)

  })
})
