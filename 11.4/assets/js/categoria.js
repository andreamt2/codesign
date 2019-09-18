document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let strlink = "projeto.html?id=" + value +"&key={{@key}}"
  let link = document.querySelector(".link2")
  link.href = strlink

  let db = coDesConnect('https://quaruq.firebaseio.com/')

  db.download('/', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */

    context = data
    coDesReplace('.menu-list', context)
    
    context = data['portifolio'][value]
    coDesReplace('.title-categoria', context)
    coDesReplace('.projetos', context)
    coDesReplace('.menu-title', context)

  })
})
