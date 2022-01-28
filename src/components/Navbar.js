import React, { Fragment, Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.inactive = {
      estadoMenu: true,
      className: 'menu-hamburguesa',
      menuClicked: 'menu-hamb-selected'
    };
    this.enlaces = {
      enlaces: this.props.links
    };
  }

  MenuHambClicked() {
    this.setState({
      estadoMenu: !this.inactive.estadoMenu
    })
    console.log(this.inactive.className);
    console.log(Boolean(this.inactive.estadoMenu));
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
                this.inactive.estadoMenu ?
                  this.inactive.className :
                  this.inactive.menuClicked
              }
              onClick={() => this.MenuHambClicked()}
            ></div>

            <div className='menu-lg'>
              <div className='links-menu-lg'>
                <ul className='ul-menu' >
                  {
                    this.enlaces.enlaces.map(opt => (
                      <li
                        key={opt.id}
                      >
                        <a
                          href={opt.href}
                        >
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
      </Fragment>
    );
  }
}


export default Navbar