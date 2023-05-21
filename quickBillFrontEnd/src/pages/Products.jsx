import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";

const Products = () => {
  const columns = [
    "code",
    "name",
    "description",
    "provider",
    "brand",
    "category",
    "price",
    "wPrice",
    "stock",
  ];

  const options = {
    filterType: "checkbox",
  };

  const [productsAPI, setProductsAPI] = useState([]);

  const reqData = async () => {
    try {
      const dataProducts = await fetch("http://127.0.0.1:8000/products/");
      const tojson = await dataProducts.json();
      setProductsAPI(tojson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    reqData();
  }, []);

  return (
    <div className="content-wrapper">
      <MUIDataTable
        title={"Lista de productos"}
        data={Array.from(productsAPI)}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Products;