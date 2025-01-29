import React from 'react' ;
import { useNavigation } from '../components/navigation'; 


function Header () {
    const handleNavigation = useNavigation(); 
    return (
        <header>
         <nav className="Navigation-bar">
        <ul>
        <li><a onClick={()=>handleNavigation('/')}>Home</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Clients</a></li>
        <li><a href="/">Sellers</a></li>
         </ul>
        </nav>
        </header>
    )
}

export default Header;