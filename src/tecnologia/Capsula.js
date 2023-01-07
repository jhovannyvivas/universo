import React from "react";
import Cambios_de_pagina from "./Cambios_de_pagina";
import imagenCapsula from ".."


function Capsula() {




    return (


        <section className=" d-flex flex-column ps-0 pe-0 pt-lg-5 pb-lg-5 flex-lg-row justify-content-lg-between align-items-center w-100">
            <div className="mx-auto d-flex d-lg-none justify-content-center tablet-imagen-nave tablet-imagen-nave-sm ">

                <div className="d-flex align-items-end mt-4 overflow-hidden w-100">
                    <img className="align-bottom w-100" src={"/imagenes/Bitmapcapsula.png"}></img>
                </div>

            </div>

            <Cambios_de_pagina nombre="capsula" />
            <div className="ms-lg-4 ps-lg-4 me-lg-0 pe-lg-0 pe-xl-5 me-xl-5 w-lg-50">
                <div className="pe-lg-3 me-lg-0 pe-xl-5 me-lg-5">

                    <h3 className="text-light opacity-75 letra-bellefair mt-2 pt-4 fs-6  text-lg-start"> THE TEMINOLOGY...</h3>
                    <h1 className="text-light letra-bellefair fs-3 fs-sm-42 fs-lg-47 fs-xl-39 pt-1 mt-2 pb-1 text-lg-start">SPACE CAPSULE</h1>
                    <div className="container-fluid m-0 p-0">
                        <div className="row m-0 p-0">
                            <div className="col-12 col-sm-2 col-lg-12"></div>
                            <div className="col-12 col-sm-8 col-lg-12 p-0">
                                <p className="text-lila fs-6 fs-lg-52 fs-xl-50 me-4  ms-4 ms-lg-0 mt-4 mt-lg-0 pb-4 lh-lg text-lg-start">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. </p>
                            </div>
                            <div className="col-12 col-sm-2 col-lg-12"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-none d-lg-flex justify-content-end  ">
                <img className="align-bottom w-lg-100" src={"/imagenes/Bitmapcapsula_1440.png"}></img>
            </div>
        </section>




    )

}


export default Capsula;