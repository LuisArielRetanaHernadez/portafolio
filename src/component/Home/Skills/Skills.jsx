// style of SKills.jsx
import './Skills.css'

const skills = [
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658630777/portafolio/icons/file_type_html_icon_130541_qz1yga.ico",
        name: "HTML",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631533/portafolio/icons/file_type_css_icon_130661_dppgok.ico",
        name: "CSS",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631616/portafolio/icons/javascript_icon_130900_hy5ibf.ico",
        name: "Javascript",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658632400/portafolio/icons/react_icon_130845_1_aqajvw.ico",
        name: "React Js",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631731/portafolio/icons/redux_original_logo_icon_146365_g4v9g2.ico",
        name: "Redux",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631630/portafolio/icons/file_type_tailwind_icon_130128_a9zkdw.ico",
        name: "Tailwind",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631630/portafolio/icons/file_type_node_icon_130301_fv4vvf.ico",
        name: "Node Js"
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631640/portafolio/icons/express_original_wordmark_logo_icon_146528_u4hz4q.ico",
        name: "Express",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658631708/portafolio/icons/folder_postgres_icon_161286_ifuwy2.ico",
        name: "Postagres",
    },
    {
        imgUrl: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1658630675/portafolio/icons/sequelize_original_logo_icon_146348_ym6nek.ico",
        name: "Sequelize",
    }
]

const Skills = () => {

    return ( 
        <section className="container-skills" id="Skills">
            <div className="content-about-education">
                <svg className="curve-about-education" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,176C384,149,480,107,576,122.7C672,139,768,213,864,202.7C960,192,1056,96,1152,85.3C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>
                <h3>Educacion/Cursos</h3>
                <ul>
                    <li>
                        <h3>Academlo</h3>
                        <p>Full-Stack</p>
                    </li>
                    <li>
                        <h3>Udemy</h3>
                        <p>HTML CSS</p>
                    </li>
                </ul>
            </div>
            {/* <spna className="tunel-1"></spna> */}
            <div className="content-skills">
                <h3>Habilidades</h3> 
                <div className="scrolling-skills">

                    {
                        skills.map((x, i) => 
                            <div className="content-icon-skill" key={i}>
                                <img src={x.imgUrl} alt={x.name} />
                                <p>{x.name}</p>
                            </div>
                        )
                    }
                  
                </div>
                <span className="block-content-skills block-1"></span>
                <span className="block-content-skills block-2"></span>
                <span className="block-content-skills block-3"></span>
            </div>
        </section>
    );
}
 
export default Skills;