import { useState } from 'react';
import logo from '../images/logo.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

var counter = 2;
const Navbar = () => {
    const [navStatus, setNavStatus] = useState("menuIcon");
    const [menuOpen,setMenuOpen] = useState(false);
    const handleNavOpen = () => {
        console.log(counter);
        if (navStatus !== "menuIcon active") {
            counter++;
            setNavStatus("menuIcon active");
            setMenuOpen(true);

        } else {
            counter++;
            setNavStatus("menuIcon");
            setMenuOpen(false);


        }


    }
    const navLogoClickHandler = () =>{
        setNavStatus("menuIcon");
        setMenuOpen(false); 
    }
    return (
        <div className="navbarWrapper fixed-top">
            <nav className="navbar fixed-top">
                <div className="navbar-brand">
                    <Link to="/" onClick={()=>navLogoClickHandler()}><img src={logo} alt="Personal Logo" id="navbarLogo"></img></Link>
                </div>
                <div className="ms-auto menuIconContainer">
                    <div className={navStatus} onClick={() => handleNavOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200">
                            <g strokeWidth="10" strokeLinecap="round">
                                <path
                                    d="M72 82.286h28.75"
                                    fill="#009100"
                                    fillRule="evenodd"
                                    stroke="#fff"
                                />
                                <path
                                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                    fill="none"
                                    stroke="#fff"
                                />
                                <path
                                    d="M72 125.143h28.75"
                                    fill="#009100"
                                    fillRule="evenodd"
                                    stroke="#fff"
                                />
                                <path
                                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                    fill="none"
                                    stroke="#fff"
                                />
                                <path
                                    d="M100.75 82.286h28.75"
                                    fill="#009100"
                                    fillRule="evenodd"
                                    stroke="#fff"
                                />
                                <path
                                    d="M100.75 125.143h28.75"
                                    fill="#009100"
                                    fillRule="evenodd"
                                    stroke="#fff"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </nav>
            {menuOpen && <Menu setOpenStatus={setMenuOpen} navStat={setNavStatus}/>}
        </div>
    );
}

export default Navbar;