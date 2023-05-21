import { useEffect, useState } from "react";

const Clientes = () => {
  const [Users, setUsers] = useState([]);

  const reqData = async () => {
    try {
      const dataUsers = await fetch("http://127.0.0.1:8000/users/");
      const tojson = await dataUsers.json();
      setUsers(tojson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    reqData();
  }, []);

  return (
    <div className="content-wrapper p-4">

    {Users.length === 0 ? (
        <p>No hay datos disponibles</p>
      ) : (
        <table id="dataTable">

        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>is_staff</th>
            <th>is_employe</th>
            <th>is_boss</th>
            <th>address</th>
            <th>location</th>
            <th>province</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((el) => (
            <tr key={el.username}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.is_staff}</td>
              <td>{el.is_employe}</td>
              <td>{el.is_boss}</td>
              <td>{el.address}</td>
              <td>{el.location}</td>
              <td>{el.province}</td>
              <td>{el.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>


      )}


            


    </div>


  );
};

export default Clientes;
