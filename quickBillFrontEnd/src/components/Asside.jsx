import { NavLink } from 'react-router-dom';

import {useEffect,useState} from 'react'

function Asside() {

  const [Users, setUsers] = useState('')
  const [Products, setProducts] = useState('')
  const [company, setCompany] = useState([]);

  const productsCount = async () =>{
    const totalProducts = await fetch('http://localhost:8000/products')
    const json = await totalProducts.json()
    let totalCount = json.length;
    setProducts(totalCount)
  }
  const usersCount = async () =>{
    const totalUsers = await fetch('http://localhost:8000/users')
    const json = await totalUsers.json()
    let totalCount = json.length;
    setUsers(totalCount)
  }

  const infoCompany = async () => {
    const response = await fetch("http://127.0.0.1:8000/company/");
    const json = await response.json();
    const fullDataCompany = json[0]
    setCompany(fullDataCompany);
  };

  console.log(company);

  useEffect(() => {
    usersCount()
    productsCount()
    infoCompany()
  }, [])
  

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to="/" className="brand-link">
        <img src={company.image} alt={company.name} className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">{company.name}</span>
      </NavLink>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <NavLink to="#" className="d-block">Alexander Pierce</NavLink>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Buscar" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                <i className="nav-icon fa fa-money-bill" />
                <p>
                  Ventas
                  <i className="right fas fa-angle-left" />
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/presupuestos" className="nav-link">
                    <i className="far fa-copy nav-icon" />
                    <p>Presupuestos</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/facturas" className="nav-link">
                    <i className="far fa-copy nav-icon" />
                    <p>Facturas</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/clients" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  Clientes
                  <span className="right badge badge-danger">{Users.toString()}</span>
                </p>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                <i className="nav-icon fas fa-box" />
                <p>
                  Productos
                  <span className="right badge badge-danger">{Products.toString()}</span>
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/company" className="nav-link">
                <i className="nav-icon fas fa-building" />
                <p>
                  Datos de la empresa
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Asside;
