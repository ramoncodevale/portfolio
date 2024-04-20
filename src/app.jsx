import { Navbar } from "./components/navbar/navbar";
import { Home } from './components/home/home';
import { About } from './components/about/about'
import { Projects } from "./components/projects/projects";
import { Contact } from './components/contact/contact'
import { Footer } from "./components/footer/footer";

import "./app.css"
import { useContext } from "react";
import { DarkModeContext } from "./context/dark-mode-context";

export function App() {
  const { darkModeEnabled } = useContext(DarkModeContext);

  return (
    <div className={darkModeEnabled ? 'dark' : 'light'}>
      <Navbar />
      <Home />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <About darkMode={darkModeEnabled} />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
