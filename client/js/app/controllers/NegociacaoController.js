class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    //this._campos = [inputData, inputQuantidade, inputValor];
  }

  get inputData() {
    return this.inputData;
  }

  adiciona(event) {
    event.preventDefault();
    //let data = new Date(this._inputData.value.split("-"));
    let data = new Date(this._inputData.value.replace(/-/g, ",")); //com expressão regular
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade,
      this._inputValor
    );
    console.log(negociacao);
  }
}
