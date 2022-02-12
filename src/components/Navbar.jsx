import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Navbar = (props) => {

  const queryS = useQuery().get("s")

  const [cambiarClase, setCambiarClase] = useState(true);

  const [searchParams, setSearchParams] = useState('');

  const history = useHistory();

  const search = (e) => {
    e.preventDefault()
    history.push("/?s=" + searchParams)
    !cambiarClase && setCambiarClase(true)
  };

  useEffect(() => {
    setSearchParams(queryS || '');
  }, [queryS]);

  const menuHambClicked = () => {
    setCambiarClase(!cambiarClase)
  };

  const turnOffMenuHamb = () => {
    !cambiarClase && setCambiarClase(true)
  }


  return (
    <Fragment>
      <nav className='nav'>
        <div className='contenedor-flex-nav'>
          <div className='btn-home' onClick={turnOffMenuHamb}>
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
                        <li key={en.id} className='link-ul-menu' onClick={turnOffMenuHamb}>
                          <Link to={en.href}>
                            {en.text}
                          </Link>
                          <div className='subline-link' />
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
                  placeholder='buscar por título...'
                  value={searchParams}
                  onChange={(e) => setSearchParams(e.target.value)}
                  autocomplete='on'
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