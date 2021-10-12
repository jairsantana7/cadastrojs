const campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];
let btEnviarform = document.querySelector(".form");
let tr = document.createElement("tr");
let tabela = document.querySelector("table tbody");

btEnviarform = document.addEventListener("submit", function (event) {
  event.preventDefault();

  inserirDados(campos);
  inserirDadosVolume();

  campos[0].value = "";
  campos[1].value = "";
  campos[2].value = "";
});

function inserirDadosVolume() {
  tdVolume = document.createElement("td");
  tdVolume.innerText = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);
  tabela.appendChild(tr);
}

function inserirDados(campos) {
  tr = document.createElement("tr");
  campos.forEach(camposvalue => {
    let td = document.createElement("td");
    td.innerText = camposvalue.value;
    tr.appendChild(td);
    tabela.appendChild(tr);
  });
}

function limparDados() {
  tabela = document.querySelector("table tbody");
}
