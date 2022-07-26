// style of SKills.jsx
import './Skills.css'
const Skills = () => {
    return ( 
        <section className="container-skills">
            <div className="content-about-education">
                <h3>Educacion/Cursos</h3>
                <ul>
                    <li>
                        <h3>Academlo</h3>
                        <p>Full-Stack</p>
                    </li>
                </ul>
            </div>

            <div className="content-skills">
                <div className="scrolling-skills">
                    {/* icon Html */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658630777/portafolio/icons/file_type_html_icon_130541_qz1yga.ico" alt="icon html"/>
                    </div>
                    {/* icon Css */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631533/portafolio/icons/file_type_css_icon_130661_dppgok.ico" alt="icon css"/>
                    </div>
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631616/portafolio/icons/javascript_icon_130900_hy5ibf.ico" alt="icon javascript"/>
                    </div>
                    {/* icon react js */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658632400/portafolio/icons/react_icon_130845_1_aqajvw.ico" alt="icon react js"/>
                    </div>
                    {/* icon Redux */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631731/portafolio/icons/redux_original_logo_icon_146365_g4v9g2.ico" alt="icon redux"/>
                    </div>
                    {/* icon tailwind */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631630/portafolio/icons/file_type_tailwind_icon_130128_a9zkdw.ico" alt="icon tailwind"/>
                    </div>
                    {/* icon Node js */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631630/portafolio/icons/file_type_node_icon_130301_fv4vvf.ico" alt="icon Node js"/>
                    </div>
                    {/* icon Express */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631640/portafolio/icons/express_original_wordmark_logo_icon_146528_u4hz4q.ico" alt="icon Express"/>
                    </div>
                    {/* icon Postgres */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631708/portafolio/icons/folder_postgres_icon_161286_ifuwy2.ico" alt="icon Postgres"/>
                    </div>
                    {/* icon Sequelize */}
                    <div className="content-icon-skill">
                        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1658630675/portafolio/icons/sequelize_original_logo_icon_146348_ym6nek.ico" alt="icon Sequelize"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;