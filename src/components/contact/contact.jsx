import { useState } from 'react';
import './contact.css';
import Dev from '../../assets/dev.svg';
import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext} from 'react';


export function Contact() {
    const { darkModeEnabled } = useContext(DarkModeContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={darkModeEnabled ? "container-contact-dark" : "container-contact-light"} id='contact'>
            <p className={darkModeEnabled ? "title-contact-dark" : "title-contact-light"}>Contatos</p>
            <div className={darkModeEnabled ? "contact-dark" : "contact-light"}>
                <img src={Dev} alt="img dev" />
                <form onSubmit={handleSubmit}>
                    <div className={darkModeEnabled ? "form-dark" : "form-light"}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div  className={darkModeEnabled ? "form-dark" : "form-light"}>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div  className={darkModeEnabled ? "form-dark" : "form-light"}>
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">
                        Envie uma mensagem pra mim
                    </button>
                </form>
            </div>
        </section>
    );
}
