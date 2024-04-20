import "./footer.css";
import { FaArrowUp } from "react-icons/fa";



export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Para uma animação suave ao rolar para o topo
    });
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Feito em 2024</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/ramon-valentim-3435541a8/" target="_blank" className='link-linkedin'>
           Linkedin
          </a>
      </div>
      <FaArrowUp className="scroll-to-top"  onClick={scrollToTop} />
        </div>
    </footer>
  );
}
