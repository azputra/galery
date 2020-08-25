import React, { useEffect, useState } from "react";
import one from '../assets/painting.jpeg';
import painting1 from '../assets/painting.jpg'
import DetailGalery from '../components/DetailGalery';
import XDVideo from '../assets/hutrivideo.mp4';

import logoipebi from "../assets/logoipebi.png";
import logohut from "../assets/logohut.png";
import logori from "../assets/logori.png";

function Homepage(props) {
    useEffect(() => {
        window.scrollTo((document.body.offsetWidth - document.documentElement.offsetWidth) / 2, (document.body.offsetHeight - document.documentElement.offsetHeight) / 2)
    }, []);
    const [showDetail, setShowDetail] = useState(false)
    const [showIndex, setIndex] = useState(0)
    const [showAbout, setAbout] = useState(false)
    const [imageType, setImageType] = useState("")
    // data virtual photoshoot
    const [dataDetailVP] = useState(
        [
            {
                image: one,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
        ]
    )

    // data lifepainting
    const [dataDetailLP] = useState(
        [
            {
                image: one,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
            {
                image: painting1,
                nama: "Gde Agus Dwijaya K.",
                bidang: "Biru"
            },
        ]
    )

    const handleShowDetail = (index, image) => {
        setImageType(image)
        setIndex(index)
        setShowDetail(true)
    };
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowAbout = () => {
        setAbout(true)
    };
    const handleCloseAbout = () => setAbout(false);

    return (
        <div style={{ height: showDetail ? "auto" : "100%" }}>
            {
                !showDetail && !showAbout ?
                    <div class="gallery">
                        {/* loop foto kiri */}
                        <div className="gallery__group">
                            {
                                dataDetailVP.map((item, index) => {
                                    return (
                                        <img key={index} on onClick={() => handleShowDetail(index, "VP")} width="350" height="250" className="img_hov gallery__img" src={item.image} alt="" style={{ marginRight: "18vh" }} />
                                    )
                                })
                            }
                        </div>

                        {/* Ruangseni Ippebi KALO ADA PERUBAHAN FOTO UBAH MARGIN LEFT INI AJA */}
                        <div className="container-fluid pl-5 pr-5 home-ippebi" style={{ marginLeft: "775vh" }}>
                            <div className="row text-center d-flex justify-content-center" style={{ marginBottom: "3vh" }}>
                                <h3 style={{
                                    padding: "0.5vh",
                                    border: "5px solid",
                                    cursor: "pointer"
                                }} className="font-weight-bold m-0 hov-about" onClick={handleShowAbout}>About</h3>
                            </div>
                            <div className="row pl-5 pr-5 d-flex justify-content-center">
                                <video src={XDVideo} className="img-fluid" width="430" height="1000" alt="painting" autoplay="true" style={{ minWidth: "64vh", minHeight: "64vh" }} />
                            </div>
                            <div className="row text-center" style={{ marginTop: "-15vh" }}>
                                <h1 className="font-weight-bold w-100 m-0" style={{ zIndex: "99", fontSize: "6.6vh" }}>RUANG SENI</h1>
                            </div>
                            <div className="row text-center" style={{ marginTop: "-4vh" }}>
                                <h1 className="font-weight-bold w-100 m-0 display-1" style={{ zIndex: "99", fontSize: "18vh" }}>IPEBI</h1>
                            </div>
                            <div className="row" style={{
                                display: "flex",
                                justifyContent: "space-between",
                                maxHeight: "1vh"
                            }}>
                                <div className="col-6" style={{ minWidth: "26vh", maxWidth: "26vh", left: "0vh", bottom: "5vh", zIndex: "99" }}>
                                    <h2 className="text-right font-weight-bold">Virtual Photoshoot</h2>
                                </div>
                                <div className="col-6" style={{ minWidth: "26vh", right: "0vh", maxWidth: "26vh", bottom: "5vh", zIndex: "99" }}>
                                    <h2 className="text-left font-weight-bold">Live Painting</h2>
                                </div>
                            </div>
                            <div className="row" style={{
                                display: "flex",
                                justifyContent: "center",
                                maxHeight: "1vh"
                            }}>
                                <span style={{ fontSize: "30px", position: "absolute", bottom: "-10vh" }}>&#8592; scroll to explore &#8594;</span>
                            </div>
                        </div >

                        {/* looping foto kanan */}
                        <div className="gallery__group" style={{ marginLeft: "315vh" }}>
                            {
                                dataDetailLP.map((item, index) => {
                                    return (
                                        <img key={index} onClick={() => handleShowDetail(index, "LP")} width="350" height="250" className="img_hov gallery__img" src={item.image} alt="" style={{ marginRight: "18vh" }} />
                                    )
                                })
                            }
                        </div>
                    </div >
                    : <div style={{ display: "none" }}></div>
            }
            {
                showDetail ?
                    <DetailGalery handleCloseDetail={handleCloseDetail} dataDetail={imageType === "VP" ? dataDetailVP[showIndex] : dataDetailLP[showIndex]} imageType={imageType} />
                    :
                    <div style={{ display: "none" }}></div>
            }
            {
                showAbout ?
                    <div className="container-fluid p-4" style={{
                        position: "fixed",
                        backgroundColor: "#c8c4c4",
                        zIndex: "999",
                        height: "100%"
                    }}>
                        <div className="row" style={{ position: "fixed", top: "0vh" }}>
                            <div className="col">
                                <h1 style={{ position: "fixed", top: "10vh" }}>DIGIFESTABI</h1>
                            </div>
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
                        <div className="row" style={{ position: "fixed", top: "20vh", padding: "4vh", maxWidth: "100vh" }}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi veniam qui asperiores deserunt alias quia impedit voluptatum iste sapiente consequatur rem maiores, magni, voluptatibus repellendus neque dolores minus enim?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi veniam qui asperiores deserunt alias quia impedit voluptatum iste sapiente consequatur rem maiores, magni, voluptatibus repellendus neque dolores minus enim?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi veniam qui asperiores deserunt alias quia impedit voluptatum iste sapiente consequatur rem maiores, magni, voluptatibus repellendus neque dolores minus enim?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi veniam qui asperiores deserunt alias quia impedit voluptatum iste sapiente consequatur rem maiores, magni, voluptatibus repellendus neque dolores minus enim?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi veniam qui asperiores deserunt alias quia impedit voluptatum iste sapiente consequatur rem maiores, magni, voluptatibus repellendus neque dolores minus enim?
                            </p>
                        </div>
                        <div className="row fixed-bottom" style={{ left: "5vh" }}>
                            <p style={{ cursor: "pointer" }} onClick={handleCloseAbout}>
                                ⬅️ Ruang Seni IPEBI
                            </p>
                        </div>
                    </div>
                    : <div style={{ display: "none" }}></div>
            }
        </div>
    );
}

export default Homepage;