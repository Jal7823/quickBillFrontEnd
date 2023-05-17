import { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);

  const dataApi = async () => {
    const response = await fetch("http://127.0.0.1:8000/products/");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    dataApi();
  }, []);

  return (
    <div className="content-wrapper p-3">
      {data.length === 0 ? (
        <h1 className="text-center fs-2">Cargando...</h1>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {data.map((item) => (
            <div key={item.div} className="col mt-4">
              <div className="card h-100">
                <img src={item.image} style={{ width: '200px', height: '200px' }} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-bold fs-2">{item.name}</h5>
                  <p className="card-text text-bold fs-2">{item.price}</p>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{item.provider}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
