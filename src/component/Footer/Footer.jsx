// style of Footer.jsx
import "./Footer.css"

const Footer = () => {

    const mensaggeWhatsapp = "Hola, Que tal!";

    return ( 
        <section className="container-Footer">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,106.7C384,85,480,43,576,48C672,53,768,107,864,138.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className="content-Footer">
                <ul className="content-list-footer-logo">
                    <li>Copyright Luis Ariel Retana Hernandez</li>
                </ul>
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
 
export default Footer;