import React from "react";

class RejectComponent extends React.Component {
  render() {
    const collection = [1, 2, 3, 4];

    const filtered = collection.filter((value) => {
      return value <= 2;
    });

    return (
      <div className="overflow-x-auto">
        <p>
          O método reject() filtra a coleção, removendo os itens que atendem a
          uma determinada condição especificada.
        </p>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs bg-gray-50 uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Coleção Original</th>
              <th className="px-6 py-3">Coleção Filtrada</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(collection)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(filtered)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RejectComponent;
