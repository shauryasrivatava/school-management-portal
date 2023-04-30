import React ,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { Button } from '../Button/Button';
import {Button2} from '../Button2/Button2'
import './NavBar.css'


// const myStyle={
//     padding:"20px",
//     background:"#D0BEDD"
// }

function Navbar(){

    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);

    const handleClick=() => setClick(!click);

    const closeMobileMenu=() => setClick(false);

    const goToAboutUsPage=() => {

    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <NavLink to="/" className='navbar-logo'onClick={closeMobileMenu}>
                        TSPortal <i className='fab fa-typo3'/>
                    </NavLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/aboutUs" className='nav-links' onClick={closeMobileMenu}>About Us</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/underProgress" className='nav-links' onClick={closeMobileMenu}>Products</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/footer" className='nav-links' onClick={closeMobileMenu}>Contact Us</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink to="/userLogin" className='nav-links-mobile' onClick={closeMobileMenu}>User</NavLink>
                        </li>
                        <li className='nav-item'>
                         <NavLink to="/adminLogin" className='nav-links-mobile' onClick={closeMobileMenu}>Admin</NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>USER</Button>}
                    {button && <Button2 buttonStyle='btn--outline'>ADMIN</Button2>}
                </div>
            </nav>
        </>
    );
    // return (
    //     <div style={myStyle}>
    //         <Button><NavLink activeClassName="active_class" to="/" exact>Home</NavLink></Button>
    //         <Button><NavLink activeClassName="active_class" to="/userLogin">UserLogin</NavLink></Button>
    //         {/* <Button><NavLink activeClassName="active_class" to="/userSignUp">UserSignUp</NavLink></Button>
    //         <Button><NavLink activeClassName="active_class" to="/userPortal">UserHomePage</NavLink></Button> */}
    //         <Button><NavLink activeClassName="active_class" to="/adminLogin">AdminLogin</NavLink></Button>
    //         {/* <Button><NavLink activeClassName="active_class" to="/adminSignUp">AdminSignUp</NavLink></Button>
    //         <Button><NavLink activeClassName="active_class" to="/adminPortal">AdminHomePage</NavLink></Button> */}
    //     </div>
    //   );
};

export default Navbar;


