import React from "react";

class UnwrapComponent extends React.Component {
  render() {
    const unwrap = (value) => {
      if (Array.isArray(value)) {
        return value;
      } else if (value instanceof Object && !Array.isArray(value)) {
        return Object.values(value);
      } else {
        return value;
      }
    };

    const getType = (value) => {
      if (Array.isArray(value)) {
        return "Array";
      } else if (value instanceof Object && !Array.isArray(value)) {
        return "Object";
      } else {
        return "String";
      }
    };

    const collection1 = "John Doe";
    const unwrapped1 = unwrap(collection1);
    const type1 = getType(collection1);

    const collection2 = ["John Doe"];
    const unwrapped2 = unwrap(collection2);
    const type2 = getType(collection2);

    const collection3 = { name: "John Doe" };
    const unwrapped3 = unwrap(collection3);
    const type3 = getType(collection3);

    return (
      <div className="overflow-x-auto">
        <p>
          O método unwrap() pega uma coleção de dados e retorna os valores
          dentro dela, preservando sua estrutura original.
        </p>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs bg-gray-50 uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Coleção</th>
              <th className="px-6 py-3">Desenvolvido para</th>
              <th className="px-6 py-3">Tipo de Dado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">{collection1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{unwrapped1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{type1}</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(collection2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(unwrapped2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{type2}</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(collection3)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {JSON.stringify(unwrapped3)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{type3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UnwrapComponent;
