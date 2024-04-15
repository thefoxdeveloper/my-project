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
        <h3>
          O método where() filtra dados no Laravel com base em condições
          específicas de consulta.
        </h3>
        <div className="relative overflow-x-auto">
          <h2>Coleção Original:</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.produto}
                  </td>
                  <td className="px-6 py-4">R${item.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative overflow-x-auto">
          <h2>Coleção Filtrada: Menor ou Igual a R$100</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
