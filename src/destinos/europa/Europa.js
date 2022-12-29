import React from "react";
import europa from "./europa.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Europa() {

    return (
        
        <section>

            <img className="mt-4 mb-4 " src={europa}></img>

            <Planetas_listado_html destino={'europa'} />
            <h1 className="text-light letra-bellefair fs-1 pt-3 pb-3">EUROPE</h1>
            <p className="text-lila fs-6 me-4 ms-4 pb-4 ">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <hr className="ps-4 pe-4 ms-4 me-4 border-bottom"/>
            <div className="text-lila pt-4">
                <p className="fs-6 mb-2 text-lila barlow-condensed">AVG. DISTANCE</p>
                <p className="fs-2 letra-bellefair text-white">628 MIL. KM</p>
            </div>
            <div className="pt-2 pb-4">
                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                <p className="fs-2 letra-bellefair text-white m-0 pb-4">3 YEARS</p>
            </div>
        </section>



    )

}


export default Europa;