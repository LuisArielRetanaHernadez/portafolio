// component
import Header from "../../component/Header/Header";
import AboutMe from "../../component/Home/AboutMe/AboutMe";
import Contact from "../../component/Home/Contact/Contact";
import Proyects from "../../component/Home/Proyects/Proyects";
import Skills from "../../component/Home/Skills/Skills";

// style of Home.view
import "./Home.view.css"
const Home = () => {
    return (  
        <section className="Home">
            <Header />
            <AboutMe />
            <Skills />
            <Proyects />
            <Contact /> 
        </section>
    );
}
 
export default Home;