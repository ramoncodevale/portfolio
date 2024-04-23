import './navbar.css'
import { MdWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { FiAlignJustify } from "react-icons/fi"
import { FiX } from 'react-icons/fi';
import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext, useState } from 'react';

export function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const { darkModeEnabled, toggleDarkMode } = useContext(DarkModeContext)

    function toggleOpenMenu() {
        setOpenMenu(true)
    }

    function closeMenu() {
        setOpenMenu(false)
    }


    return (
        <>
            <header className={darkModeEnabled ? "nav-dark" : "nav-light"}>
                <h3>Ramon Valentim</h3>

                <div>
                    {!openMenu ? (
                        <button className='menu' type='button' onClick={toggleOpenMenu}>
                            <FiAlignJustify color='#22c55e' fontSize={25} />
                        </button>
                    ) : (
                        <button className='menu' type='button' onClick={closeMenu} >
                            <FiX color='#22c55e' fontSize={25} />
                        </button>
                    )}
                </div>

                <ul className='links-web'>
                    <li><a className={darkModeEnabled ? "links-dark" : "links-light"} href="#">Início</a></li>
                    <li><a className={darkModeEnabled ? "links-dark" : "links-light"} href="#">Sobre Mim</a></li>
                    <li><a className={darkModeEnabled ? "links-dark" : "links-light"} href="#">Projetos</a></li>
                    <li><a className={darkModeEnabled ? "links-dark" : "links-light"} href="#">Contatos</a></li>
                    <button className='btn-dark-mode' type='button' onClick={toggleDarkMode}>
                        {darkModeEnabled ? (
                            <MdWbSunny color={darkModeEnabled ? "#fff" : "#22c55e"} fontSize={20} />
                        ) : (
                            <LuMoon color={darkModeEnabled ? "#fff" : "#22c55e"} fontSize={20} />
                        )}
                    </button>
                </ul>


            </header>
            {openMenu && (
                <div className={darkModeEnabled ? "links-dark" : "links-light"} id='nav-bar'>
                    <ul className='list-mobile'>
                        <div className="menu">
                        </div>
                        <li><a className="links-mobile" href="#home">Início</a></li>
                        <li><a className="links-mobile"  href="#about">Sobre Mim</a></li>
                        <li><a className="links-mobile"   href="#projects">Projetos</a></li>
                        <li><a className="links-mobile"  href="#contact">Contatos</a></li>
                        <div className="toggle">
                                <button className='toggle-mode' type='button' onClick={toggleDarkMode}>
                                    {darkModeEnabled ? (
                                        <MdWbSunny color="#fff" fontSize={25} />
                                    ) : (
                                        <LuMoon color="#fff" fontSize={25} />
                                    )}
                        </button>
                            
                </div>
                        </ul >

                    </div >
                )
}
        </>
    );
}

