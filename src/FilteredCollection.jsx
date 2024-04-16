import React from "react";

class FilteredCollection extends React.Component {
  render() {
    const collection = [
      { produto: "Mesa", preco: 200 },
      { produto: "Cadeira", preco: 100 },
      { produto: "Estante", preco: 150 },
      { produto: "Porta", preco: 100 },
    ];

    const where = (colecao, chave, valor) => {
      return colecao.filter((item) => item[chave] === valor);
    };

    const filtrado = where(collection, "preco", 100);

    return (
      <div>
        <p className="mb-4">
          O método where() filtra dados no Laravel com base em condições
          específicas de consulta.
        </p>
        <div className="relative overflow-x-auto mb-4">
          <h2 className="mb-4">Coleção Original:</h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs bg-gray-50 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome do Produto
                </th>
                <th scope="col" className="px-6 py-3">
                  Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {collection.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.produto}
                  </td>
                  <td className="px-6 py-4">R${item.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative overflow-x-auto">
          <h2 className="mb-4">Coleção Filtrada: Menor ou Igual a R$100</h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs bg-gray-50 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome do Produto
                </th>
                <th scope="col" className="px-6 py-3">
                  Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {filtrado.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.produto}
                  </td>
                  <td className="px-6 py-4">R${item.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FilteredCollection;
