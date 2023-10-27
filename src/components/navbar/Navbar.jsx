import './Navbar.css'

import { PiStudentFill } from 'react-icons/pi'
import { AiOutlineGithub } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'


const Navbar = () => {
  return (
   <nav>
    <PiStudentFill fontSize={50}  color="#fff"/>
    <ul className='ul-list'>
        <li><a className='links' href="#">Início</a></li>
        <li><a className='links' href="#">Sobre</a></li>
        <li><a className='links' href="#">Habilidades</a></li>
        <li><a className='links' href="#">Projetos</a></li>
        <li><a className='links' href="#">Contato</a></li>
    </ul>
    <div className="icons">
      <AiOutlineGithub fontSize={30} color='#fff'/>
      <TiSocialLinkedinCircular fontSize={30} color='#fff' style={{marginLeft: "20px"}} />
    </div>
   </nav>
  )
}

export default Navbar