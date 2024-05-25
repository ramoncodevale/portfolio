import "./footer.css";
import { FaArrowUp, FaLinkedin, FaGithub} from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Feito em 2024</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/ramon-valentim-3435541a8/" target="_blank" className="link-linkedin">
            <FaLinkedin />
            Linkedin
          </a>
          <a href="https://github.com/ramoncodevale" target="_blank" className="link-github">
            <FaGithub />
            Github
          </a>
        </div>
        <FaArrowUp className="scroll-to-top" onClick={scrollToTop} />
      </div>
    </footer>
  );
}
