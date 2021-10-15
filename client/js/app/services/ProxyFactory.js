class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop, reciver) {
        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
          return function () {
            //console.log(`Interceptando ${prop}`);
            Reflect.apply(target[prop], target, arguments);
            return acao(target);
          };
        }

        return Reflect.get(target, prop, reciver);
      },
      set(target, prop, value, reciver) {
        if (props.includes(prop)) {
          acao(target);
        }

        return Reflect.set(target, prop, value, reciver);
      }
    });
  }

  static _ehFuncao(func) {
    return typeof func == typeof Function;
  }
}
