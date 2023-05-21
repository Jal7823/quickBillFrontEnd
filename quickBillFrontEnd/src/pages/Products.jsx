import MUIDataTable from "mui-datatables";
//icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

//
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "code",
      label: "code",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "stock",
      label: "Stock",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "brand",
      label: "Marca",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Precio",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "wPrice",
      label: "X mayor",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category",
      label: "Categoria",
      options: {
        filter: true,
        sort: true,
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
  ];

  const options = {
    filterType: "checkbox",
  };
  useEffect(() => {
    const reqData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/products");
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        } else {
          console.error("Error en la respuesta de la API:", response.status);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    reqData();
  }, []);

  const formattedProducts = products.map((product) => ({
    ...product,
    category: product.category.map((category) => category.name).join(", "),
  }));

  return (
    <>
      {products.length === 0 ? (
        <p>No hay nada para mostrar</p>
      ) : (
        <div className="content-wrapper p-3">
          <MUIDataTable
            title={"Products List"}
            data={formattedProducts}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </>
  );
}

export default Products;
