import { useState, useEffect } from "react";

function Company() {
  const [company, setCompany] = useState([]);

  const dataApi = async () => {
    const response = await fetch("http://127.0.0.1:8000/company/");
    const jsonData = await response.json();
    setCompany(jsonData);
  };

  useEffect(() => {
    dataApi();
    return () => {};
  }, []);

  return (
    <div className="content-wrapper p-2">
      {company.length === 0 ? (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        company.map((item) => (
          <div className="card mb-3 " key={item.id}>
            <img
              style={{ width: "300px", height: "300px" }}
              src={item.image}
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nombre de la empresa
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="name of company"
                  value={item.name}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Direccion
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="name of company"
                  value={item.address}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  C.U.I.L.
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="name of company"
                  value={item.cuil}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  C.U.I.T.
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="name of company"
                  value={item.cuit}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Telefono
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="name of company"
                  value={item.phone}
                />
              </div>
              <button className="btn btn-primary w-100">Guardar</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Company;
