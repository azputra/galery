import React, { useEffect, useState } from "react";
import one from '../assets/painting.jpeg';
import painting1 from '../assets/painting.jpg'
import DetailGalery from '../components/DetailGalery';
import XDVideo from '../assets/hutrivideo.mp4';

function Homepage(props) {
    useEffect(() => { }, []);
    const [showDetail, setShowDetail] = useState(false)
    const [showIndex, setIndex] = useState(false)
    const [dataDetail] = useState(
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
            }
        ]
    )

    const handleShowDetail = (index) => {
        setIndex(index)
        setShowDetail(true)
    };
    const handleCloseDetail = () => setShowDetail(false);

    return (
        <div class="gallery">
            {/* dari sini */}

            {/* sampe sini */}

            {
                showDetail ?
                    <DetailGalery handleCloseDetail={handleCloseDetail} dataDetail={dataDetail[showIndex]} />
                    :
                    <div></div>
            }

             {/* dari sini */}
             
             <div className="container-fluid pl-5 pt-5 pr-5" style={{ zIndex: "99", display: "inline-block", position: "absolute", width:"100", top: "-4vh", fontFamily: 'Alata'}}>
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100 m-0">About</h1>
                </div>
                <div className="row d-flex justify-content-center pl-5 pr-5 pt-3">
                    <video src={XDVideo} className="img-fluid float-left" width="430" height="1000" alt="painting" autoplay="true"/>
                {/* <div className="col d-flex justify-content-start" style={{ minWidth: "26vh", maxWidth: "26vh", left: "19vh", position: "absolute", top: "35vh" }}>
                    <h2 className="text-right font-weight-bold">Virtual Photoshoot</h2>
                </div>
                <div className="col d-flex justify-content-end" style={{ minWidth: "26vh", right: "24vh", maxWidth: "26vh", position: "absolute", top: "35vh" }}>
                    <h2 className="text-left font-weight-bold">Live Painting</h2>
                </div> */}
            {/* </div> */}
                </div>
                    <div className="row text-center">
                    <h1 className="font-weight-bold w-100 m-0">RUANG SENI</h1>
                </div> 
                    <div className="row text-center" style={{ marginTop: "-4vh"}}>
                    <h1 className="font-weight-bold w-100 m-0 display-1">IPEBI</h1>
                </div> 
                {/* <div className="row text-center mt-3">
                    <h5 className="font-weight-bold w-100 m-0">about</h5>
                </div> */}
                {/* <div className="row"> */}
            </div>
            <div class="gallery__group">
                {
                    dataDetail.map((item, index) => {
                        return (
                            <img key={index} onClick={() => handleShowDetail(index)} width="350" height="250" className="img_hov gallery__img" src={item.image} alt="" />
                        )
                    })
                }
            </div>
            {/* sampe sini */}

            {/* taro di sini */}
        </div>
    );
}

export default Homepage;