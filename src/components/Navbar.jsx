import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(props) {

  const [cambiarClase, setCambiarClase] = useState(true);

  const [searchParams, setSearchParams] = useState('');

  const history = useHistory();

  const search = (e) => {
    e.preventDefault()
    history.push("/?s=" + searchParams)
  };

  const menuHambClicked = () => {
    setCambiarClase(!cambiarClase)
  };


  return (
    <Fragment>
      <nav className='nav'>
        <div className='contenedor-flex-nav'>
          <div className='btn-home'>
            <Link to='/'>
              MovFlix
            </Link>
          </div>

          {/* MENU HAMB */}
          <div
            className={cambiarClase
              ? 'menu-hamburguesa'
              : 'menu-hamb-selected'}
            onClick={menuHambClicked}></div>

          {/* LINKS */}
          <div
            className={cambiarClase
              ? 'menu-lg'
              : 'menu-lg-deployed'}>
            <div className='links-menu-lg'>
              <div className='ul-menu'>
                <ul>
                  {props
                    .links
                    .map((en) => {
                      return (
                        <li key={en.id} className='link-ul-menu'>
                          <Link to={en.href}>
                            {en.text}
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>

            {/* FORM DE BÚSQUEDA */}
            <div className='cont-form-menu'>
              <form onSubmit={search}>
                <input
                  type="search"
                  className='input-search'
                  placeholder='buscar...'
                  value={searchParams}
                  onChange={(e) => setSearchParams(e.target.value)}
                />
                <button type='submit' className='btn-search'>
                  🔎
                </button>
              </form>
            </div>

          </div>
        </div>
      </nav >
    </Fragment >
  );
};

export default Navbar