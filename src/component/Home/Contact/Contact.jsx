// style of Contact.jsx
import './Contact.css'

const Contact = () => {
    return ( 
        <section className="container-Contact" id="Contact">
            <div className="content-Contact-title">
                <h2>Contacto</h2>
            </div>
            <div className="content-Contact-form">
                <form>
                    <div className="component-Contact-form">
                        <input placeholder="Nombre"/>
                    </div>
                    <div className="component-Contact-form">
                        <input placeholder="Asunto"/>
                    </div>
                    <div className="component-Contact-form">
                        <input placeholder="Correo"/>
                    </div>
                    <div className="component-Contact-form form-Contact-textarea">
                        <textarea placeholder="Mensaje"/>
                    </div>
                    <div className="component-button-Contact-form">
                        <button>
                            <p>Enviar</p>
                            <span></span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="content-icon-contact">
                <ul>
                    <li>
                        <a href="tel: 777">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781424/portafolio/icons/whatsapp_icon-icons.com_62756_jrot9j.ico" alt="icon de whatsapp"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luis-ariel-retanan-hernandez-b89334221/">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781431/portafolio/icons/linkedin_icon-icons.com_65929_vl38ks.ico" alt="icon de whatsapp"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto: developerluisarielrh@gmail.com">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781436/portafolio/icons/4202011emailgmaillogomailsocialsocialmedia-115677_115624_ytnsqx.ico" alt="icon de whatsapp"/> 
                        </a>                
                    </li>
                </ul>
            </div>
        </section>
    );
}
 
export default Contact;