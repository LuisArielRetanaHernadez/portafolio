// style of component AboutMe.jsx
import "./AboutMe.css"

const AboutMe = () => {
    return ( 
        <section className="container-About-Me" id="About">
            <div className="content-About-Me">
                <div className="content-img-phot-About-Me">
                    <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1646438658/portafoli/multimedia/img/me1_wv1o5d.png" alt="me phot about me"/>
                </div> 

                <div className="content-About-Me-more">
                    <div className="title-About-Me">
                        <h2>Desarrollador Full-Stack</h2>
                    </div>
                    <div className="content-About-Me-text">
                        <p>
                            Soy <strong>Luis Ariel Retana Hernandez</strong> tengo 20 años. Soy autodidacta, Me gusta la tecnologia
                            y la vez me gusta crearla, en mis tiempos libre practico mis habilidades en las tecnologias
                            que he aprendido tambien aprendo nuevos tecnologia para poder tener un mejor decepenio
                            en el Desarrollado.
                        </p>
                        <br />
                        <p>
                            Soy recien egresado del curso <strong>Full-Stack del bootcamp Academlo</strong> donde aprendi a tener un mejor
                            pensamiento logico, como aprender de formar ordenada y lo mas obvio al <strong>desarrollo Front-end y Back-end</strong>
                        </p>
                    </div>
                    <div className="container-buttons">
                        <a className="button-cv" href="https://drive.google.com/file/d/1iVDaO5EPke2wcAERASX2WTnz2i8VBHVb/view?usp=sharing" target="_black">
                            <p>CV</p>
                            <span></span>
                        </a>
                        <a className="button-direction-contact" href="#Contact">
                            <p>Match</p>
                            <span className="about-me-contactcircle-1">G</span>
                            <span className="about-me-contactcircle-2">O</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutMe;
