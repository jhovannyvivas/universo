import React from "react";
import Nav from "../nav/Nav";
import Moon from "./moon/Moon";
import Mars from "./mars/Mars";
import Europe from "./europa/Europa";
import Titan from "./titan/Titan";


function Destinos(props) {
    const style = {
        background: "no-repeat " + "url('/imagenes/Bitmapfondo_destinos.png')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center ps-3 pe-3 ps-sm-4 pe-sm-4 padding-top-destinos padding-top-destinos-sm h-100 overflow-auto">
            <Nav nombre="destino" />
            <div className="d-flex justify-content-center justify-content-sm-start m-0 pt-3 mb-sm-4 ms-xl-4">
                <h3 className="text-light barlow-condensed m-0 fs-5 fs-xl-48"><span className="text-light text-opacity-25 pe-3 barlow-condensed">01</span> Pick your destination</h3>
            </div>
            {props.destino === 'luna' ? <Moon /> : props.destino === 'marte' ? <Mars /> : props.destino === 'europe' ? <Europe /> : props.destino === 'titan' ? <Titan /> : null}
        </section>
    );
}

export default Destinos;