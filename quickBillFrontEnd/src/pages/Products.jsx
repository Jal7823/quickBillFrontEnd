import { useEffect, useState } from "react";

const Products = () => {
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

  console.log(productsAPI);

  useEffect(() => {
    reqData();
  }, []);

  return (
    <div className="content-wrapper p-4">
      <table id="dataTable">
        <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>description</th>
            <th>provider</th>
            <th>brand</th>
            <th>category</th>
            <th>price</th>
            <th>wPrice</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          {productsAPI}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
