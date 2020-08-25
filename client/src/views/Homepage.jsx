import React, { useEffect, useState } from "react";
import painting1 from '../assets/painting.jpg'
import DetailGalery from '../components/DetailGalery';
import XDVideo from '../assets/hutrivideo.mp4';

import logoipebi from "../assets/logoipebi.png";
import logohut from "../assets/logohut.png";
import logori from "../assets/logori.png";

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";
import eleven from "../assets/11.png";
import twelve from "../assets/12.png";
import thirteen from "../assets/13.png";
import fourteen from "../assets/14.png";
import fifteen from "../assets/15.png";
import sixteen from "../assets/16.png";
import seventeen from "../assets/17.png";
import eighteen from "../assets/18.png";
import nineteen from "../assets/19.png";
import twenty from "../assets/20.png";
import twentyone from "../assets/21.png";
import twentytwo from "../assets/22.png";
import twentythree from "../assets/23.png";
import twentyfour from "../assets/24.png";
import twentyfive from "../assets/25.png";
import twentysix from "../assets/26.png";
import twentyseven from "../assets/27.png";
import twentyeight from "../assets/28.png";
import twentynine from "../assets/29.png";
import thirty from "../assets/30.png";
import thirtyone from "../assets/31.png";
import thirtytwo from "../assets/32.png";
import thirtythree from "../assets/33.png";
import thirtyfour from "../assets/34.png";
import thirtyfive from "../assets/35.png";
import thirtysix from "../assets/36.png";
import thirtyseven from "../assets/37.png";
import thirtyeight from "../assets/38.png";
import thirtynine from "../assets/39.png";
import fourty from "../assets/40.png";
import fourtyone from "../assets/41.png";
import fourtytwo from "../assets/42.png";
import fourtythree from "../assets/43.png";
import fourtyfour from "../assets/44.png";
import fourtyfive from "../assets/45.png";
import fourtysix from "../assets/46.png";
import fourtyseven from "../assets/47.png";
import fourtyeight from "../assets/48.png";
import fourtynine from "../assets/49.png";
import fifty from "../assets/50.png";

import satu from "../assets/satu.png"
import dua from "../assets/dua.png"
import tiga from "../assets/tiga.png"
import empat from "../assets/empat.png"
import lima from "../assets/lima.png"
import enam from "../assets/enam.png"
import tujuh from "../assets/tujuh.png"
import delapan from "../assets/delapan.png"
import sembilan from "../assets/sembilan.png"
import sepuluh from "../assets/sepuluh.png"
import sebelas from "../assets/sebelas.png"
import duabelas from "../assets/duabelas.png"
import tigabelas from "../assets/tigabelas.png"
import empatbelas from "../assets/empatbelas.png"
import limabelas from "../assets/limabelas.png"
import enambelas from "../assets/enambelas.png"
import tujuhbelas from "../assets/tujuhbelas.png"

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
                image: fifty,
                nama: "Arya Jodilistyo",
                bidang: "Biru"
            },
            {
                image: fourtynine,
                nama: "Budianto",
                bidang: "Hijau"
            },
            {
                image: fourtyeight,
                nama: "Budianto",
                bidang: "Hijau"
            },
            {
                image: fourtyseven,
                nama: "Arya Jodilistyo",
                bidang: "Biru"
            },
            {
                image: fourtysix,
                nama: "Budianto",
                bidang: "Hijau"
            },
            {
                image: fourtyfive,
                nama: "Husain Muh. Asrul",
                bidang: "Kuning"
            },
            {
                image: fourtyfour,
                nama: "Mardian Hadiwirma",
                bidang: "Hijau"
            },
            {
                image: fourtythree,
                nama: "Mardian Hadiwirma",
                bidang: "Biru"
            },
            {
                image: fourtytwo,
                nama: "Husain Muh. Asrul",
                bidang: "Kuning"
            },
            {
                image: fourtyone,
                nama: "Julianor",
                bidang: "Hijau"
            },
            {
                image: fourty,
                nama: "Laily Nur Fitiyah",
                bidang: "Biru"
            },
            {
                image: thirtynine,
                nama: "Ridwan Zia Kusumah",
                bidang: "Kuning"
            },
            {
                image: thirtyeight,
                nama: "Ridwan Zia Kusumah",
                bidang: "Kuning"
            },
            {
                image: thirtyseven,
                nama: "RR Ambar Indah Sari",
                bidang: "Merah"
            },
            {
                image: thirtysix,
                nama: "Ahmad Hilmu",
                bidang: "Biru"
            },
            {
                image: thirtyfive,
                nama: "Laily Nur Fitiyah",
                bidang: "Biru"
            },
            {
                image: thirtyfour,
                nama: "Mardian Hadiwirma",
                bidang: "Hijau"
            },
            {
                image: thirtythree,
                nama: "Haidar Rizki Suaiba",
                bidang: "Orange"
            },
            {
                image: thirtytwo,
                nama: "Julianor",
                bidang: "Hijau"
            },
            {
                image: thirtyone,
                nama: "Ridwan Zia Kusumah",
                bidang: "Kuning"
            },
            {
                image: thirty,
                nama: "Hari S.Baskoro",
                bidang: "Hijau"
            },
            {
                image: twentynine,
                nama: "Hari S, Baskoro",
                bidang: "Kuning"
            },
            {
                image: twentyeight,
                nama: "RR Ambar Indah Sari",
                bidang: "Merah"
            },
            {
                image: twentyseven,
                nama: "Muhammad Saad Fauzi",
                bidang: "Coklat"
            },
            {
                image: twentysix,
                nama: "RR Ambar Indah Sari",
                bidang: "Merah"
            },
            {
                image: twentyfive,
                nama: "Muhammad Saad Fauzi",
                bidang: "Coklat"
            },
            {
                image: twentyfour,
                nama: "Husain Muh. Asrul",
                bidang: "Kuning"
            },
            {
                image: twentythree,
                nama: "Haidar Rizki Suaiba",
                bidang: "Orange"
            },
            {
                image: twentytwo,
                nama: "Agapito Ganesha JMN",
                bidang: "Orange"
            },
            {
                image: twentyone,
                nama: "Ihsan W.Prabawa",
                bidang: "Merah"
            },
            {
                image: twenty,
                nama: "Hari S. Baskoro",
                bidang: "Coklat"
            },
            {
                image: nineteen,
                nama: "Laily Nur Fitiyah",
                bidang: "Biru"
            },
            {
                image: eighteen,
                nama: "Julianor",
                bidang: "Hijau"
            },
            {
                image: seventeen,
                nama: "Arya Jodilistyo",
                bidang: "Biru"
            },
            {
                image: sixteen,
                nama: "Haidar Rizki Suaiba",
                bidang: "Orange"
            },
            {
                image: fifteen,
                nama: "Ahmad Hilmi",
                bidang: "Biru"
            },
            {
                image: fourteen,
                nama: "Agapito Ganesha JMN",
                bidang: "Orange"
            },
            {
                image: thirteen,
                nama: "Agapito Ganesha JMN",
                bidang: "Orange"
            },
            {
                image: twelve,
                nama: "Annisa Noor Andriani",
                bidang: "Orange"
            },
            {
                image: eleven,
                nama: "Ahmad Hilmi",
                bidang: "Biru"
            },
            {
                image: ten,
                nama: "Ihsan W. Prabawa",
                bidang: "Merah"
            },
            {
                image: nine,
                nama: "Hendra",
                bidang: "Coklat"
            },
            {
                image: eight,
                nama: "Hendra",
                bidang: "Coklat"
            },
            {
                image: seven,
                nama: "Hendra",
                bidang: "Coklat"
            },
            {
                image: six,
                nama: "Annisa Noor Andriani",
                bidang: "Orange"
            },
            {
                image: five,
                nama: "Ihsan W. Prabawa",
                bidang: "Merah"
            },
            {
                image: four,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },
            {
                image: three,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },
            {
                image: two,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },
            {
                image: one,
                nama: "Afriezal Raeshandi",
                bidang: "Merah"
            },


        ]
    )

    // data lifepainting
    const [dataDetailLP] = useState(
        [
            {
                image: satu,
                nama: "Gde Agus Dwijaya K.",
                //"Kita Semua Bisa"
                bidang: "Biru"
            },
            {
                image: dua,
                nama: "Vrendy Luis",
                //"BI di Tengah Pandemi Demi Kehidupan Yang Harmoni"
                bidang: "Biru"
            },
            {
                image: tiga,
                nama: "Yudhya Pratidina Rosady",
                //"Kenormalan Baru Kebiasaan Baru Kesempatan  Baru"
                bidang: "Hijau"
            },
            {
                image: empat,
                nama: "Halida",
                //"BI Digital Maju"
                bidang: "Hijau"
            },
            {
                image: lima,
                nama: "Fitri Maharani Indra",
                bidang: "Coklat"
            },
            {
                image: enam,
                nama: "Ayuningtyas",
                //"Merajut Asa Ibu Pertiwi"
                bidang: "Biru"
            },
            {
                image: tujuh,
                nama: "Hirni Melani",
                //"Membangkitkan Optimisme Indonesia Ditengah Pandemi"
                bidang: "Coklat"
            },
            {
                image: delapan,
                nama: "Mei Wulandari",
                bidang: "Hijau"
            },
            {
                image: sembilan,
                nama: "Alamsyah",
                //"Sinergi Membangun BI Digital"
                bidang: "Kuning"
            },
            {
                image: sepuluh,
                nama: "Winda Dwi",
                //"Cinta Negeriku"
                bidang: "Kuning"
            },
            {
                image: sebelas,
                nama: "Zetra Iez Zaputra",
                //"Sinergi Digital Membangun BI Demi Indonesia Maju di Tengah Pandemi"
                bidang: "Kuning"
            },
            {
                image: duabelas,
                nama: "Putra Ramadhan",
                //"Qris In Wonderaland"
                bidang: "Merah"
            },
            {
                image: tigabelas,
                nama: "Riza Pramana Putra",
                bidang: "Merah"
            },
            {
                image: empatbelas,
                nama: "Sri Januarti S",
                //"BI Digital Ditengah Pandemi"
                bidang: "Merah"
            },
            {
                image: limabelas,
                nama: "Dady Suhandi",
                //"Tanah Airku"
                bidang: "Orange"
            },
            {
                image: enambelas,
                nama: "Laraswati Aprillia",
                //"Digital Merakyat"
                bidang: "Orange"
            },
            {
                image: tujuhbelas,
                nama: "Vicky Mile",
                //"Bahagia Di Tengah Pandemi"
                bidang: "Biru"
            }

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
                        <div className="container-fluid pl-5 pr-5 home-ippebi" style={{ marginLeft: "3474vh", color: 'white' }}>
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
                                <span style={{ fontSize: "20px", position: "absolute", bottom: "-10vh" }}>&#8592; scroll to explore &#8594;</span>
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
                                <h1 style={{ position: "fixed", top: "10vh", fontFamily: "alata" }}><b>DIGIFESTABI 2020</b></h1>
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
                                Inovasi lahir dari sebuah kebutuhan. Meski diwarnai pandemi, bukan berarti produktivitas terhenti di 2020.
                                Memperingati HUT BI ke-67 dan HUT RI ke-75, Bank Indonesia tetap menyelenggarakan Festival Talenta Bank Indonesia <b>(FESTABI)</b>, dalam bentuk virtual. Digifestabi 2020 menghadirkan berbagai inovasi kegiatan berbasis teknologi virtual, termasuk lomba-lomba di bidang seni. Pemanfaatan infrastruktur digital pun ternyata memberi nilai tambah; kegiatan kini tak hanya milik pegawai di Kantor Pusat, namun mampu melibatkan seluruh keluarga besar Bank Indonesia di kantor perwakilan, baik dalam maupun luar negeri.
                                Hilangnya batasan wilayah ini merupakan suatu langkah awal pencapaian visi BI menjadi “The First & Best Central Bank 4.0”.

                            </p>
                        </div>
                        <div className="row fixed-bottom" style={{ left: "5vh" }}>
                            <p style={{ cursor: "pointer" }} onClick={handleCloseAbout}>
                                &#8592; Ruang Seni IPEBI
                            </p>
                        </div>
                    </div>
                    : <div style={{ display: "none" }}></div>
            }
        </div>
    );
}



export default Homepage;

