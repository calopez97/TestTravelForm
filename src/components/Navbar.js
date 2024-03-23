import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    //JSON declarado en una variable, el cual será destructurado en cada item del menu del Navbar.
    const links = [
        {
            id:"1",
            name:"Vivair"
        },
        {
            id:"2",
            name:"Avianca"
        },
        {
            id:"3",
            name:"Latam"
        },
        {
            id:"4",
            name:"AerCaribe"
        },
        {
            id:"5",
            name:"Sky-Airline"
        },
        {
            id:"6",
            name:"Emirates-Airline"
        },
    ];

    //Función encargada de mostrar u ocultar el menu en mobile.
    const handleMenuMobile = () =>{
        //Seleccionamos el menu Navbar.
        let menu = document.querySelector('nav.navbar .container-lg .navbar-nav');
        //Seleccionamos el button burguer.
        let navbarButton = document.querySelector('nav.navbar .container-lg .navbar-toggler-icon');
        /*Gracias al método toggle nos permite agregar o remover una 
        clase de css específica encargada de mostrar u ocultar el menu navbar*/
        navbarButton.classList.toggle('showUp');
        menu.classList.toggle('showMenuUp');
    }
    
    //Función encargada de ocultar el menu en mobile al seleccionar una opción del menu vertical.
    const handleHideMenuFromLink = () => {
        //Seleccionamos el menu Navbar.
        let menu = document.querySelector('nav.navbar .container-lg .navbar-nav');
        //Seleccionamos el button burguer.
        let navbarButton = document.querySelector('nav.navbar .container-lg .navbar-toggler-icon');

        //Identificamos sí el menu tiene cierta clase específica.
        if(menu.classList.contains('showMenuUp')){
            //Sí es así, se remueven clases especificas en el navbar y el botón.
            menu.classList.remove('showMenuUp');
            navbarButton.classList.remove('showUp');
        }
    }
    return (
        <nav className="navbar navbar-expand-sm">
            
            <div className="container-lg">
                <div className='main-brand'> 
                        <NavLink 
                                className={({isActive}) => "nav-link " + (isActive ? 'active': '')} 
                                exact="true"
                                to="/"
                                onClick={handleHideMenuFromLink}
                        >
                            MyTest
                        </NavLink>
                </div>
                <ul className="navbar-nav">
                    {
                        /*El JSON de items para el menu es desestructurado mediante
                        el método .map()*/
                        links.map((link) => {
                            return(
                                <li className='nav-item' key={link.id} > 
                                    <NavLink
                                        className={({isActive}) => "nav-link " + (isActive ? 'active': '')} 
                                        to={`/${link.name.toLowerCase()}`}
                                        onClick={handleHideMenuFromLink}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                    
                </ul>
                <button className="navbar-toggler" type="button" onClick={handleMenuMobile}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>   
        </nav>
    )
}