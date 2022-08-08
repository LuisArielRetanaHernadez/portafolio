// style of Proyects.jsx
import "./Proyects.css"


const Proyects = () => {

    const proyects = [
        {
            viewUrl: "https://wonderful-carson-a3e9a2.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072097/portafolio/fondo_proyectos/fondo_rick_y_morty_1_sniszz.png",
            title: "Riky y Morty (Front-end)"
        },
        {
            viewUrl: "https://wonderful-carson-a3e9a2.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659071893/portafolio/fondo_proyectos/fondo_ecommerce_front-end_1_rraxjg.png",
            title: "Ecommerce (Front-end)"
        },
        {
            viewUrl: "https://wonderful-carson-a3e9a2.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072361/portafolio/fondo_proyectos/fondo_ToDo_front-end_1_q8e8xh.png",
            title: "ToDo (front-end)"
        },
        {
            viewUrl: "https://wonderful-carson-a3e9a2.netlify.app/",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659072876/portafolio/fondo_proyectos/fondo_torres_hanoi_front-end_1_wmguqu.png",
            title: "Torres de Hanoi (front-end)"
        },
        {
            viewUrl: "http",
            img: "https://res.cloudinary.com/dqmkovsdy/image/upload/v1659077051/portafolio/fondo_proyectos/fondo_ecommerce_back-end_1_infxjn.png",
            title: "Api Ecommerce (front-end)"
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
                                <a href={x.viewUrl}>ver Demo</a>
                                <a href="http/">Codigo</a>
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