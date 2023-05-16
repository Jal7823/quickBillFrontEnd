import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);

  const dataApi = async () => {
    const response = await fetch('');
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    dataApi();
  }, []);

  console.log(data);

  return (
    <div className="content-wrapper">
      {data.length === 0 ? (
        <h1>No hay nada que mostrar</h1>
      ) : (
        data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))
      )}
    </div>
  );
}

export default Products;
