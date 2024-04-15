import React from "react";

class FlippedCollection extends React.Component {
  render() {
    // Coleção original
    const collection = {
      name: "taylor",
      framework: "laravel",
    };

    // Método flip() para inverter as chaves e valores
    const flipped = Object.fromEntries(
      Object.entries(collection).map(([key, value]) => [value, key])
    );

    return (
      <div className="overflow-x-auto">
        <p>
          O método flip() inverte as chaves e valores em uma coleção no Laravel,
          facilitando a manipulação de dados.
        </p>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs bg-gray-50 uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Chave</th>
              <th className="px-6 py-3">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(collection).map(([key, value]) => (
              <tr key={key} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">{key}</td>
                <td className="px-6 py-4 whitespace-nowrap">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="w-full mt-4 text-sm text-left text-gray-500">
          <thead className="text-xs bg-gray-50 uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Chave</th>
              <th className="px-6 py-3">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(flipped).map(([key, value]) => (
              <tr key={key} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">{key}</td>
                <td className="px-6 py-4 whitespace-nowrap">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlippedCollection;
