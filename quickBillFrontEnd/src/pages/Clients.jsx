import MUIDataTable from "mui-datatables";
//icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
//
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Clients = () => {
  const [Users, setUsers] = useState([]);
  const columns = [
    {
      name:'username',
      label:'Nombre de usuario',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'name',
      label:'Nombre',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'email',
      label:'Email',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'is_staff',
      label:'Super usuario',
      options:{
        filter:true,
        sort:true,
        customBodyRender: (value, tableMeta) => {
          const is_staff = value; // Obtener el valor de is_boss desde los parámetros de renderizado
          return (
            is_staff ? <CheckIcon className="mx-auto" /> : <CloseIcon />
          );
        }
      },
    },
    {
      name:'is_employe',
      label:'Empleado',
      options:{
        filter:true,
        sort:true,
        customBodyRender: (value, tableMeta) => {
          const is_employe = value; // Obtener el valor de is_boss desde los parámetros de renderizado
          return (
            is_employe ? <CheckIcon className="mx-auto" /> : <CloseIcon />
          );
        }
      },
      
    },
    {
      name: 'is_boss',
      label: 'Jefe',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          const is_boss = value; // Obtener el valor de is_boss desde los parámetros de renderizado
          return (
            is_boss ? <CheckIcon className="mx-auto" /> : <CloseIcon />
          );
        }
      },
    },
    
    {
      name:'address',
      label:'Direccion',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'location',
      label:'Localidad',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'province',
      label:'Provincia',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name:'phone',
      label:'Telefono',
      options:{
        filter:true,
        sort:true
      },
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          return (
            <div className="d-flex ">
              <Button
                variant="contained"
                color="error"
                onClick={() => handleButtonClick(tableMeta.rowIndex)}
              >
                <DeleteIcon></DeleteIcon>
              </Button>

              <Button
                className="ml-2"
                variant="contained"
                color="secondary"
                onClick={() => handleButtonClick(tableMeta.rowIndex)}
              >
                <EditIcon></EditIcon>
              </Button>

              <Button
                className="ml-2"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(tableMeta.rowIndex)}
              >
                <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </Button>
            </div>
          );
        },
      },
    },
  ]
  const options = {
    filterType: "checkbox",
  };

  useEffect(() => {
    const reqData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/users");
        if (response.ok) {
          const json = await response.json();
          setUsers(json);
        } else {
          console.error("Error en la respuesta de la API:", response.status);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };
    reqData();
  }, []);
  return (
    <div className="content-wrapper p-3">
      {Users.length === 0 ? (
        <p>No hay nada para mostrar</p>
      ) : (
        <div className="content-wrapper p-3">
          <MUIDataTable
            title={"Users List"}
            data={Users}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </div>


  );
};

export default Clients;
