import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {data.map((item) => (
            <div key={item.div} className="col mt-4">
              <div className="card h-100">
                <img
                  src={item.image}
                  style={{ width: "200px", height: "200px" }}
                  className="card-img-top mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-bold fs-2">{item.name}</h5>
                  <p className="card-text text-bold fs-2">{item.price}</p>
                  <p className="card-text">{item.description}</p>
                  <div className="d-flex justify-content-around ">
                    {/* you need configurate the detail view and detail delete */}
                    <Link className="btn btn-primary" to="/">
                      Editar
                    </Link>
                    {/* you need configurate the detail view and detail delete */}
                    <Link className="btn btn-danger" to="/">
                      Eliminar
                    </Link>
                  </div>
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
