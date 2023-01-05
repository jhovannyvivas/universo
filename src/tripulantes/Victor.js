import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Victor() {

    const style_imagen = {
        height: '280px'
    }


    return (

        <section className="d-flex m-0 p-0 flex-column justify-content-start">
            <div className="order-1 order-sm-3 me-2 ms-2 mb-3 mb-sm-0 d-flex justify-content-center border-bottom border-2  border-bottom-sm-0 border-dark">
                <div className="d-flex align-items-end justify-content-center">
                    <img className="mt-4 w-75" src={"/imagenes/victor.png"}></img>
                </div>
            </div>
            <div className="order-2 m-0 p-0">
                <Circulos_cambio_d_tripulante nombre="victor" />
            </div>
            <div className="m-0 p-0 order-3 order-sm-1">
                <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">PILOT</h3>
                <h1 className="text-light letra-bellefair fs-3 fs-sm-42 pt-1 mt-2 pb-1 ">VICTOR GLOVER</h1>
                <div className="container-fluid m-0 p-0">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-sm-1">
                        </div>
                        <div className="col-12 col-sm-10">
                            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 lh-lg">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                        </div>
                        <div className="col-12 col-sm-1">
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )

}


export default Victor;