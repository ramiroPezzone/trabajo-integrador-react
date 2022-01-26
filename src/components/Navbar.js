import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = (props) => {
  const enlaces = props.links;
  return (
    <Fragment>
      <nav>
        <div className='contenedor-flex-nav'>
          <div>
            <a href="/">MovFlix</a>
          </div>
          <div className='menu-hamburguesa'></div>
          <div className='menu-lg'>
            <ul>
              {
                enlaces.map(opt => (
                  <li
                  key={opt.id}
                  >
                    <a href={opt.href}>
                      {opt.text}
                    </a>
                  </li>
                ))
              }

            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
