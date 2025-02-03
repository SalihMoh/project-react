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
        <li><a onClick={()=>handleNavigation('/users')}>Users</a></li>
        <li><a href="/">par Mohamed Salih</a></li>
         </ul>
        </nav>
        </header>
    )
}

export default Header;