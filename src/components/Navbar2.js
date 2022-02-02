import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import './Navbar2.css'

export const Navbar2 = (props) => {

  const [cambiarClase, setCambiarClase] = useState(true),
    [enlaces, setEnlaces] = useState({}),

    menuHambClicked = () => {
      setCambiarClase(
        !cambiarClase
      )
    }

  return (
    <Fragment>
      <nav
        className={
          cambiarClase ?
            'nav' :
            'nav-deployed'
        }
      >
        <div className='contenedor-flex-nav'>
          <div className='btn-home'>
            <Link
              to='/'>
              MovFlix
            </Link>
          </div>

          <div
            className={
              cambiarClase ?
                'menu-hamburguesa' :
                'menu-hamb-selected'
            }
            onClick={menuHambClicked}
          ></div>


          <div className='menu-lg'>
            <div className='links-menu-lg'>
              <div className='ul-menu' >
                {
                  setEnlaces(
                    enlaces.map(opt => (
                      <Link
                        key={opt.id}
                        to={opt.href}
                        className='link-ul-menu'
                      >
                        {opt.text}
                      </Link>
                    )))}
              </div>
            </div>
            <div className='cont-form-menu'>
              <form>
                <input
                  type="search"
                  placeholder='🔎'
                  className='input-search'
                />
                <button type='submit' className='btn-search'>Search</button>
              </form>
            </div>
          </div>


        </div>
      </nav>
    </Fragment>
  );
};