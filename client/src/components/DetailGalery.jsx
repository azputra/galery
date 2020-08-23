import React, { useEffect, useState } from "react";
import logoipebi from '../assets/logoipebi.png'
import logohut from '../assets/logohut.png'
import logori from '../assets/logori.png'
// import painting from '../assets/painting.jpg'

function Detail(props) {
    useEffect(() => { }, []);
    console.log(props);
    return (
        <div className="container-fluid pl-4 pt-4" style={{ position: "fixed", backgroundColor: "white", zIndex: "999", height: "100%" }}>
            <div className="row">
                <div className="col-1" style={{ minWidth: "15vh" }}>
                    <img src={logoipebi} className="img-fluid w-10 float-left" alt="logoipebi" />
                </div>
                <div className="col-1" style={{ minWidth: "15vh" }}>
                    <img src={logohut} className="img-fluid w-10 float-left" alt="logohut" />
                </div>
                <div className="col-1" style={{ minWidth: "20vh" }}>
                    <img src={logori} className="img-fluid w-10 float-left" alt="logori" />
                </div>
            </div>
            <div className="row p-5">
                <div className="col" style={{ minWidth: "78vh" }}>
                    <img src={props.dataDetail.image} className="img-fluid float-left" width="550" height="1000" alt="painting" />
                </div>
                <div className="col px-3" style={{ minWidth: "72vh", marginLeft: "1.5vh" }}>
                    <div className="row"><h2>{props.dataDetail.nama}</h2></div>
                    <div className="row"><p className="m-0 mt-4 text-justify">bidang: {props.dataDetail.bidang}</p></div>
                    <div className="row"><p className="m-0 text-justify">juara: 👑</p></div>
                    <div className="row"><p className="m-0 mb-4 text-justify">medali: 🎉🎉🎉</p></div>
                    <div className="row">
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus iusto nam ullam optio aspernatur quam id, quasi neque! Deleniti asperiores tenetur laudantium magni blanditiis ipsam aliquam ducimus molestias sunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus iusto nam ullam optio aspernatur quam id, quasi neque! Deleniti asperiores tenetur laudantium magni blanditiis ipsam aliquam ducimus molestias sunt.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row fixed-bottom" style={{ left: "5vh" }}>
                <p style={{ cursor: "pointer" }} onClick={props.handleCloseDetail}>⬅️ Kiri</p>
            </div>
        </div>
    );
}

export default Detail;