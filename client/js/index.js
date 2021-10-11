const campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];
let btEnviarform = document.querySelector(".form");
btEnviarform = document.addEventListener("submit", function (event) {
  event.preventDefault();

  let tr = document.createElement("tr");

  for (let i = 0; i < campos.length; i++) {
    const camposvalue = campos[i];

    criaTabela(camposvalue.value);
    inserirNaTabela(camposvalue.value);

    //console.log(inserirNaTabela(camposvalue.value));
  }

  tr.textContent = function () {};
});

function criaTabela(arg) {
  let td = document.createElement("td");
  let conteudo = arg;
  td.innerText = conteudo;
  return td;
}

//console.log(inserirNaTabela(arg));
function inserirNaTabela(arg) {
  let tabela = document.querySelector(".table thead");
  let tr = criaTabela(arg);
  tabela.appendChild(tr);
  return tabela;
}
