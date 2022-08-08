// typewrite-machine
import Typewriter from 'typewriter-effect';

// style of Header.jsx
import './Header.css'

const particles = [
    {i: 11, l: 10},
    {i: 22, l: 22},
    {i: 14, l: 28},
    {i: 19, l: 1150},
    {i: 24, l: 69},
    {i: 19, l: 78},
    {i: 27, l: 90},
    {i: 11, l: 1009},
    {i: 15, l: 150},
    {i: 25, l: 161},
    {i: 14, l: 180},
    {i: 10, l: 199},
    {i: 22, l: 220},
    {i: 29, l: 235},
    {i: 19, l: 249},
    {i: 18, l: 269},
    {i: 28, l: 290},
    {i: 10, l: 350},
    {i: 16, l: 380},
    {i: 14, l: 399},
    {i: 24, l: 450},
    {i: 12, l: 479},
    {i: 15, l: 496},
    {i: 25, l: 500},
    {i: 14, l: 640},
    {i: 13, l: 722},
    {i: 22, l: 792},
    {i: 11, l: 879},
    {i: 17, l: 890},
    {i: 14, l: 930},
    {i: 11, l: 980},
    {i: 24, l: 999},
    {i: 19, l: 1101},
    {i: 14, l: 1200},
    {i: 10, l: 1299},
    {i: 22, l: 1300},
]

const Header = () => {
    return ( 
        <header className="container-header-home" id="Main">
            <div className="container-header-home__text-centrer">
                <h1>Luis Ariel RH</h1>
                <h2>Desarrolla</h2>
                <div className="container-header-home__machine_write">
                    <p>Tu </p>
                    <span className="text_machine_write">
                        <Typewriter className=""
                            options={{
                                strings: ["Imaginacion", "Ideas", "Plan", "Web"],
                                cursor: '_',
                                delay: 100,
                                deleteSpeed: 100,
                                autoStart: true,
                                loop: true
                            }}
                        />            
                    </span>
                </div>
                {
                    particles.map((x, n) => 
                        <span className='bubble' key={n} style={{"--i": x.i, "--l": x.l+"px"}} ></span>
                    )
                }
            </div>
        </header>
    );
}
 
export default Header;