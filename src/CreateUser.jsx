import { useState } from "react";

// Estilo padrão
const tableStyle = "w-full text-sm text-left text-gray-500";
const headerStyle = "text-xs bg-gray-50 uppercase text-gray-700";
const rowStyle = "bg-white border-b";
const cellStyle = "px-6 py-4 whitespace-nowrap";

function CreateUser() {
  const [numberOfUsers, setNumberOfUsers] = useState("");
  const [usersCreated, setUsersCreated] = useState([]);

  const handleNumberOfUsersChange = (event) => {
    setNumberOfUsers(event.target.value);
  };

  const createUsers = () => {
    const newUsers = [];
    for (let i = 0; i < parseInt(numberOfUsers, 10); i++) {
      const newUser = {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: "password", // Você pode usar o hash do bcrypt para senhas seguras
      };
      newUsers.push(newUser);
    }
    setUsersCreated(newUsers);
  };

  return (
    <div className="max-w-md mx-auto">
      <p className="mb-4">
        Você pode usar o método <strong>times()</strong> em combinação com o
        recurso de criação de registros de modelo do Laravel para gerar usuários
        fictícios. Aqui está um exemplo de como você poderia fazer isso:
      </p>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Número de Usuários:
        <input
          type="number"
          value={numberOfUsers}
          onChange={handleNumberOfUsersChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </label>
      <button
        onClick={createUsers}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Criar Usuários
      </button>
      {usersCreated.length > 0 && (
        <div>
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-2">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Usuarios Criados
              </h5>
            </div>
            <div className="flow-root">
              <table className={tableStyle}>
                <thead className={headerStyle}>
                  <tr>
                    <th className={cellStyle}>Nome</th>
                    <th className={cellStyle}>E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {usersCreated.map((user, index) => (
                    <tr key={index} className={rowStyle}>
                      <td className={cellStyle}>{user.name}</td>
                      <td className={cellStyle}>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateUser;
