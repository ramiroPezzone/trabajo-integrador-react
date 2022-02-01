import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cambiarClase: true,
    };
    this.enlaces = {
      enlaces: this.props.links
    };
  }

  MenuHambClicked() {
    this.setState({
      cambiarClase: !this.state.cambiarClase
    })
  }

  search() {

  }

  render() {
    return (
      <Fragment>
        <nav
          className={
            this.state.cambiarClase ?
              'nav' :
              'nav-deployed'
          }
          onClick={() => this.MenuHambClicked()}
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
                this.state.cambiarClase ?
                  'menu-hamburguesa' :
                  'menu-hamb-selected'
              }
              onClick={() => this.MenuHambClicked()}
            ></div>

            <div className='menu-lg'>
              <div className='links-menu-lg'>
                <div className='ul-menu' >
                  {
                    this.enlaces.enlaces.map(opt => (
                      <Link
                        to={opt.href}
                        className='link-ul-menu'
                      >
                        {opt.text}
                      </Link>
                    ))
                  }
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

          {/* menú desplegable */}

          <div className={
            this.state.cambiarClase ?
              'container-menu-lg-oculto' :
              'container-menu-lg-deployed'
          }
          >
            <div className='menu-lg-oculto'>
              <div className='links-menu-lg'>
                <ul className='ul-menu' >
                  {
                    this.enlaces.enlaces.map(opt => (
                      <li key={opt.id}>
                        <a href={opt.href}>
                          {opt.text}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='cont-form-menu'>
                <form>
                  <input
                    type="search"
                    placeholder='Search'
                    className='input-search'
                  // value={buscar}
                  />
                  <button
                    type='button'
                    className='btn-search'
                  // onClick={() => this.search()}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}


export default Navbar