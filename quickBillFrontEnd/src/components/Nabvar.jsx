import {NavLink} from 'react-router-dom'


function Nabvar() {

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink 
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink  to="/" className="nav-link">
              <i className='fa fa-home'></i> Inicio
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink  to="#" className="nav-link">
            <i className='fa fa-globe'></i> Pagina web 
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink 
              className="nav-link"
              data-widget="navbar-search"
              to="#"
              role="button"
            >
              <i className="fas fa-search" />
            </NavLink>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* <li className="nav-item dropdown">
            <NavLink  className="nav-link" data-toggle="dropdown" to="#">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </NavLink>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <NavLink  to="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item dropdown-footer">
                See All Messages
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink  className="nav-link" data-toggle="dropdown" to="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </NavLink>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </NavLink>
              <div className="dropdown-divider" />
              <NavLink  to="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link"
              data-widget="fullscreen"
              to="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </NavLink>
          </li> */}
          
        </ul>
      </nav>
    </div>
  );
}

export default Nabvar;
