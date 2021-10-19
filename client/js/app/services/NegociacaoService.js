class NegociacaoServices {
  obterNegociacoesSemana(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/negociacoes/semana/");
    xhr.onreadystatechange = () => {
      /*  0- requisição ainda não iniciada
      1- conexão com o servidor estabelecida
      2- requisição recebida
      3- processando requisição
      4- requsição concluida e a resposta está pronta 
      200 - confirma que está tudo bem*/

      // na funação de retorno cchamada callback, a primeiro é o error e a segunda o resultao (err, result)
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          callback(
            null,
            JSON.parse(xhr.responseText).map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        } else {
          console.log(xhr.responseText);
          callback("Não foi possivel obter as informações do servidor", null);
        }
      }
    };
    xhr.send();
  }
}
