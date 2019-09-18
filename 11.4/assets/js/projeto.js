document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let categoria = params['id']
  let projeto = params['key']

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

    dados_projeto = data['portifolio'][categoria]['projetos'][projeto]


    coDesReplace('.menu-title', projeto)
    coDesReplace('.menu-list', data)
    coDesReplace('.trabalho-nome', titulo)
    context = data['portifolio'][value]
    coDesReplace('.main', context)
  })
})
