class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }
  adiciona(negociacao) {
    //this._negociacoes = [].concat(this._negociacoes.negociacao);
    this._negociacoes.push(negociacao);
    //Reflect.apply(this._armadilha, this._contexto, [this]);
    //this._armadilha(this);
  }

  get mostraNegociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    //this._armadilha(this);

    //Reflect.apply(this._armadilha, this._contexto, [this]);
  }
}
