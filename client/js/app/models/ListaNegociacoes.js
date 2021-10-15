class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get mostraNegociacoes() {
    return [].concat(this._negociacoes);
  }
}
