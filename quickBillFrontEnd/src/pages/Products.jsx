import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";



function Products() {
  const columns = [
    {
      name: "code",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Descripcion",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "privider",
      label: "Proveedor",
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
      name: "category",
      label: "Categoria",
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
      name: "stock",
      label: "Stock",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  
  const options = {
    filterType: "checkbox",
  };
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const reqData = async () => {
      try {
        const response = await fetch("http://localhost:8000/products/");
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
  console.log(products);

  return (
    <div className="content-wrapper p-3">
      <MUIDataTable
        title={"Employee List"}
        data={products.map((product) => ({
          id: product.id,
          code: product.code,
          name: product.name,
          description: product.description,
          provider: product.provider,
          brand: product.brand,
          category: product.category,
          price: product.price,
          stock: product.stock,
        }))}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default Products;