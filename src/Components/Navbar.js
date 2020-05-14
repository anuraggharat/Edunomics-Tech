import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {
        isFixed:true  
      });
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, 
        {inDuration: 300, outDuration: 225,hover:true,coverTrigger:false});
    
    },[])

    return (
        <div>
            <nav className="nav-extended white">
            <div className="nav-wrapper black">
            <a href="/" className="brand-logo"><img className="logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/solution">Solution</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><a className="dropdown-trigger" href="#" data-target="dropdown11">Company<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-trigger" href="#" data-target="dropdown21">Resources<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><Link to="/contact">Contact</Link></li>
             </ul>
            <ul id="dropdown1" className="dropdown-content">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/team">Team</Link></li>
            </ul>
            <ul id="dropdown11" className="dropdown-content">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/team">Team</Link></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/whitepaper">White Paper</Link></li>
                <li><Link to="/casestudies">Case Studies</Link></li>
            </ul>
            <ul id="dropdown21" className="dropdown-content">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/whitepaper">White Paper</Link></li>
                <li><Link to="/casestudies">Case Studies</Link></li>
            </ul>
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
         <li><Link to="/solution">Solution</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Company<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Resources<i className="material-icons right">arrow_drop_down</i></a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
