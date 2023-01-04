import React from "react";
// import europa from "/imagenes/europa.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Europa() {


    const style_imagen = {
        height: '230px',
        width: '230px'
    }




    return (

        <section>
            <div className="mx-auto pt-2 d-flex justify-content-center marco-planetas marco-planetas-sm">
                <img className="mt-4 mb-4 pt-3 " src={"/imagenes/europa.svg"}></img>

            </div>

            <Planetas_listado_html destino={'europa'} />
            <h1 className="text-light letra-bellefair fs-20 pt-3 pb-3">EUROPE</h1>
            <p className="text-lila fs-6 me-4 ms-4 pb-4 lh-base">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <hr className="ps-4 pe-4 ms-4 me-4 border-bottom" />

            <div className="container-fluid m-0 ">
            <div className="row m-0 pt-2">
                <div className="col-12 col-sm-6 text-lila pt-4 pt-sm-0 ">
                <p className="fs-6 mb-2 text-lila barlow-condensed">AVG. DISTANCE</p>
                <p className="fs-2 letra-bellefair text-white">628 MIL. KM</p>
                </div>
                <div className="col-12 col-sm-6 pt-2 pt-sm-0 pb-4 pb-sm-0">
                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                <p className="fs-2 letra-bellefair text-white m-0 pb-4">3 YEARS</p>
                </div>
            </div>
            </div>


        </section>



    )

}


export default Europa;