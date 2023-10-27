import './Início.css'

import Foto from '../../assets/foto-perfil.png'

const Início = () => {
  return (
    <div className='inicio'>
         <h1 className='titulo-inicio'>Oi 👋, <br></br> Meu nome é <br></br> Ramon Valentim <br></br> Eu Sou Desenvolvedor Web</h1>
        <div className='inicio-container'> 
         <div className="foto">
        <img src={Foto} alt="foto de perfil" />
         </div>
        </div>
    </div>
  )
}

export default Início