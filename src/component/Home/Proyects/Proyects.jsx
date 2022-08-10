// style of Proyects.jsx
import "./Proyects.css"


const Proyects = () => {

    const proyects = [
        {
            viewUrl: "https://wonderful-carson-a3e9a2.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072097/portafolio/fondo_proyectos/fondo_rick_y_morty_1_sniszz.png",
            github: "https://github.com/LuisArielRetanaHernadez/proyecto_rick_y_morty",
            title: "Riky y Morty (Front-end)",
            back_end: false,
        },
        {
            viewUrl: "https://loving-payne-b4732b.netlify.app/",
            github: "https://github.com/LuisArielRetanaHernadez/ecommerce-app",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659071893/portafolio/fondo_proyectos/fondo_ecommerce_front-end_1_rraxjg.png",
            title: "Ecommerce (Front-end)",
            back_end: false,
        },
        {
            viewUrl: "https://vigilant-borg-32051c.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072361/portafolio/fondo_proyectos/fondo_ToDo_front-end_1_q8e8xh.png",
            github: "https://github.com/LuisArielRetanaHernadez/ToDo",
            title: "ToDo (front-end)",
            back_end: false,
        },
        {
            viewUrl: "https://teal-cassata-a815d0.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072876/portafolio/fondo_proyectos/fondo_torres_hanoi_front-end_1_wmguqu.png",
            github: "https://github.com/LuisArielRetanaHernadez/torres-hanoi",
            title: "Torres de Hanoi (front-end)",
            back_end: false,
        },
        {
            viewUrl: "",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659077051/portafolio/fondo_proyectos/fondo_ecommerce_back-end_1_infxjn.png",
            github: "https://github.com/LuisArielRetanaHernadez/ecommerce",
            title: "Api Ecommerce (back-end)",
            back_end: true,
        }
    ]

    return ( 
        <section className="container-Proyects" id="Proyects">
            <div className="content-title-proyects">
                <h2>Poryectos</h2>
            </div>
            <div className="content-proyects">
                {
                    proyects.map((x, i) => 
                        <div style={{"backgroundImage": `url(${x.img})`}} className="proyect" key={i}>
                            <div className="content-link-proyect">
                                {x.viewUrl ? <a href={x.viewUrl} target="_black">ver Demo</a> : null }
                                <a href={x.github} target="_black">Codigo</a>
                                <strong>{x.title}</strong>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}
 
export default Proyects;