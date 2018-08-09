import React from 'react';
import {Link} from 'react-router-dom';

const items = [

    {
        pathname: '/', text: 'Home',
        styleA: 'btn btn-light mt-0 mb-0', styleN: 'btn btn-warning'
    },

    {
        pathname: '/create-employee', text: 'Create Employee',
        styleA: 'btn btn-light mt-0 mb-0', styleN: 'btn btn-warning'
    }
];

const NavbarListItems = (pathname : [window.location.pathname]) =>
    items.map((value, index) => (
            <li className="nav-item" key={index}>
                {
                    pathname !== value.pathname ?
                    <Link to={{pathname: value.pathname}}>
                        <button className={value.styleA}>{value.text}</button>
                    </Link>
                    : <button className={value.styleN}>{value.text}</button>
                }
                &nbsp;
            </li>
        )
    );



export default NavbarListItems;