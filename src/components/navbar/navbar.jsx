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
                <button className='menu' type='button' onClick={toggleOpenMenu}>
                    <FiAlignJustify className='menu' color='#22c55e' fontSize={25} />
                </button>
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

                {openMenu && (
                    <div className={darkModeEnabled ? "links-dark" : "links-light"} id='nav-bar'>
                        <ul className='list-mobile'>
                            <button type='button' onClick={closeMenu} >
                                <FiX className='menu-close' color='#22c55e' fontSize={25} />
                            </button>
                            <div className="menu"> 
                            </div>
                            <li><a className={darkModeEnabled ? "links-dark-mobile" : "links-light-mobile"} href="#home">Início</a></li>
                            <li><a className={darkModeEnabled ? "links-dark-mobile" : "links-light-mobile"} href="#about">Sobre Mim</a></li>
                            <li><a className={darkModeEnabled ? "links-dark-mobile" : "links-light-mobile"} href="#projects">Projetos</a></li>
                            <li><a className={darkModeEnabled ? "links-dark-mobile" : "links-light-mobile"} href="#contact">Contatos</a></li>
                            <div className="toggle">
                                <button  type='button' onClick={toggleDarkMode}>
                                    {darkModeEnabled ? (
                                        <MdWbSunny color={darkModeEnabled ? "#fff" : "#22c55e"} fontSize={25} />
                                    ) : (
                                        <LuMoon color={darkModeEnabled ? "#fff" : "#22c55e"} fontSize={25} />
                                    )}
                                </button>
                            </div>
                        </ul>

                    </div>
                )}

            </header>
        </>
    );
}

