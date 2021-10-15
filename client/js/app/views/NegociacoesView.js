class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return `
                    <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                      </tr>
                    </thead>

                    <tbody>
                    ${model.mostraNegociacoes
                      .map(
                        n =>
                          `
                      <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                      </tr>

                      `
                      )
                      .join("")}
                    
                    </tbody>

                    <tfoot>
                    
                    <td colspan="3">Total</td>
                    <td colspan="1">${model.mostraNegociacoes.reduce(
                      (total, n) => total + n.volume,
                      0,
                      0
                    )}</td>
                    
                    </tfoot>
                  </table>
              
              `;
  }
}

// <table class="table table-hover table-bordered">
//       <thead>
//         <tr>
//           <th>DATA</th>
//           <th>QUANTIDADE</th>
//           <th>VALOR</th>
//           <th>VOLUME</th>
//         </tr>
//       </thead>

//       <tbody></tbody>

//       <tfoot></tfoot>
//     </table>
