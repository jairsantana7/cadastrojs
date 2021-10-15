let n1 = new Proxy(new ListaNegociacoes(), {
  get(target, prop, reciver) {
    if (
      ["adiciona", "esvazia"].includes(prop) &&
      typeof target[prop] == typeof Function
    ) {
      return function () {
        console.log(`Interceptando ${prop}`);
        Reflect.apply(target[prop], target, arguments);
      };
    }

    return Reflect.get(target, prop, reciver);
  }
});

//n1.adiciona(new Megociacao(new Date(), 100, 50));
//n1._mostraNegociacoes;
