// style of Proyects.jsx
import "./Proyects.css"


const Proyects = () => {
    return ( 
        <section className="container-Proyects">
            <div className="content-title-proyects">
                <h2>Poryectos</h2>
            </div>
            <div className="content-proyects">
                <div className="proyect">
                    <div className="content-link-proyect">
                        <a href="http/">Ver Demo</a>
                        <a href="http/">Codigo</a>
                        <strong>Ecommerce Back-end</strong>
                    </div>
                </div>
                <div className="proyect">
                    <div className="content-link-proyect">
                        <a href="http/">Ver Demo</a>
                        <a href="http/">Codigo</a>
                        <strong>Movie Front-end</strong>
                    </div>
                </div>
                <div className="proyect">
                    <div className="content-link-proyect">
                        <a href="http/">Ver Demo</a>
                        <a href="http/">Codigo</a>
                        <strong>ToDo Front-end</strong>
                    </div>
                </div>
                <div className="proyect">
                    <div className="content-link-proyect">
                        <a href="http/">Ver Demo</a>
                        <a href="http/">Codigo</a>
                        <strong>Ecommerce Front-end</strong>
                    </div>
                </div>
                <div className="proyect">
                    <div className="content-link-proyect">
                        <a href="http/">Ver Demo</a>
                        <a href="http/">Codigo</a>
                        <strong>Ricky y Morty Front-end</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Proyects;