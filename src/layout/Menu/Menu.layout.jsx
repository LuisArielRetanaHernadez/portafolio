// style of Menu.layout.jsx
import "./Menu.layout.css"

// react-router-dom
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";



// icon-react
import { BiMenu } from "react-icons/bi";

const Menu = () => {
    let location = useLocation()
    console.log(location)
    return ( 
        <section className="container-menu">
            <div className="content-menu">
                <nav>
                    <span className="button-menu"> <BiMenu /> </span>
                    <div className="logotipo-menu">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658440805/portafolio/Logotipo_Transparente_xsohr7.png" alt="Logotipo"/>
                    </div>
                    <ul>
                        <li><NavLink className={() => 
                            location.hash === "#Principal" ? "activeLink" : ""
                        } to="#Principal">Principal</NavLink></li>

                        <li><NavLink className={({isActive }) => 
                            location.hash === "#Sobre" ? "activeLink" : ""
                        } to="#Sobre">Sobre mi</NavLink></li>
                        <li><NavLink className={({isActive }) => 
                            location.hash === "#Skills" ? "activeLink" : ""
                        } to="#Skills">Habilidades</NavLink></li>
                        <li><Link className={({isActive }) => 
                            location.hash === "#Proyects" ? "activeLink" : ""
                        } to="#Proyects">Proyectos</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <section className="outlet-menu">
                <Outlet />
            </section>
        </section>
    );
}
 
export default Menu;