import React from 'react';
import M from 'materialize-css';
import {BrowserRouter ,Route,Router, Link, Switch} from 'react-router-dom';
import Contacto from './Contacto'


const Navbar = () => {

    return ( 
        <nav>
         <div className="nav-wrapper grey darken-4">
           <a href="/" className="brand-logo left"><b>
             SH</b> Bienes <b>Raices.</b></a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
	            <li><a href='/propiedades' >Propiedades</a></li>
       	        <li><a href='/contacto' >Contacto</a></li>
          </ul>
        </div>
        </nav>
     );
}
 
export default Navbar;

