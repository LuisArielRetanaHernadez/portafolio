// style of Menu.layout.jsx
import "./Menu.layout.css"

// react-router-dom
import { Outlet, useLocation } from "react-router-dom";

// icon-react
import { BiMenu } from "react-icons/bi";

// component Footer.jsx
import Footer from "../../component/Footer/Footer";

const Menu = () => {
    let location = useLocation()
    // console.log(location)
    return ( 
        <section className="container-menu">
            <div className="content-menu">
                <nav>
                    <span className="button-menu"> <BiMenu /> </span>
                    <div className="logotipo-menu">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658440805/portafolio/Logotipo_Transparente_xsohr7.png" alt="Logotipo"/>
                    </div>
                    <ul>
                        <li><a className={location.hash === "#Main" ? "activeLink" : ""} href="#Main">Principal</a></li>

                        <li><a className={location.hash === "#About" ? "activeLink" : ""} href="#About">Sobre mi</a></li>
                        <li><a className={location.hash === "#Skills" ? "activeLink" : ""} href="#Skills">Habilidades</a></li>
                        <li><a className={location.hash === "#Proyects" ? "activeLink" : ""} href="#Proyects">Proyectos</a></li>
                        <li><a className={location.hash === "#Contact" ? "activeLink" : ""} href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <section className="outlet-menu">
                <Outlet />
                <Footer />
            </section>
        </section>
    );
}
 
export default Menu;