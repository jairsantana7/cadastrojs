class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    //this._campos = [inputData, inputQuantidade, inputValor];
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();
    //let negociacao = _criaNegociacao();
    // let negociacao = new Negociacao(
    //   DateHelper.textoParaData(this._inputData.value),
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // );

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.mostraNegociacoes);

    //let tste = [1, 2, 3, 4, 5, 6];
    //this._listaNegociacoes.adiciona(tste);

    //console.log(this.ListaNegociacoes.negociacoes());
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
