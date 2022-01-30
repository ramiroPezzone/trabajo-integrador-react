import React, { Fragment, Component } from 'react';
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

  render() {
    return (
      <Fragment>
        <nav>
          <div className='contenedor-flex-nav'>
            <div>
              <a href="/">MovFlix</a>
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
                  />
                  <button type='submit' className='btn-search'>Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
        <div className={
                this.state.cambiarClase ?
                'container-menu-lg-oculto' :
                'container-menu-lg-deployed'
              }>
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
                />
                <button type='submit' className='btn-search'>Search</button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Navbar