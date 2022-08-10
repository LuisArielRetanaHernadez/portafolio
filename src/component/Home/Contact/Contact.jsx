// style of Contact.jsx
import './Contact.css'

const Contact = () => {

    const mensaggeWhatsapp = "Hola, Que tal!";

    return ( 
        <section className="container-Contact" id="Contact">
            <div className="content-Contact-title">
                <h2>Contacto</h2>
            </div>
            <div className="content-Contact-form">
                <form action="https://formsubmit.co/developerluisarielrh@gmail.com" method="POST">
                    <div className="component-Contact-form">
                        <input placeholder="Nombre" name="Nombre"/>
                    </div>
                    <div className="component-Contact-form">
                        <input placeholder="Asunto" name="Asunto" />
                    </div>
                    <div className="component-Contact-form">
                        <input placeholder="Correo" name="Correo"/>
                    </div>
                    <div className="component-Contact-form form-Contact-textarea">
                        <textarea placeholder="Mensaje" name="Mensaje"/>
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
                        <a href={`https://wa.me/525585221996?text=${mensaggeWhatsapp}`} target="_black">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781424/portafolio/icons/whatsapp_icon-icons.com_62756_jrot9j.ico" alt="icon de whatsapp"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luis-ariel-retanan-hernandez-b89334221/" target="_black">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781431/portafolio/icons/linkedin_icon-icons.com_65929_vl38ks.ico" alt="icon de whatsapp"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto: developerluisarielrh@gmail.com" target="_black">
                            <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658781436/portafolio/icons/4202011emailgmaillogomailsocialsocialmedia-115677_115624_ytnsqx.ico" alt="icon de whatsapp"/> 
                        </a>                
                    </li>
                </ul>
            </div>
        </section>
    );
}
 
export default Contact;