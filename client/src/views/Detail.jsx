import React, { useEffect, useState } from "react";
import logoipebi from "../assets/logoipebi.png";
import logohut from "../assets/logohut.png";
import logori from "../assets/logori.png";
import painting from "../assets/painting.jpg";
import { Link } from "react-router-dom";

function Detail(props) {
  useEffect(() => {}, []);
  return (
    <div className="container-fluid pl-4 pt-4">
      <div className="row">
        <div className="col-1" style={{ minWidth: "15vh" }}>
          <img
            src={logoipebi}
            className="img-fluid w-10 float-left"
            alt="logoipebi"
          />
        </div>
        <div className="col-1" style={{ minWidth: "15vh" }}>
          <img
            src={logohut}
            className="img-fluid w-10 float-left"
            alt="logohut"
          />
        </div>
        <div className="col-1" style={{ minWidth: "20vh" }}>
          <img
            src={logori}
            className="img-fluid w-10 float-left"
            alt="logori"
          />
        </div>
      </div>
      <div className="row p-5">
        <div className="col" style={{ minWidth: "78vh" }}>
          <img
            src={painting}
            className="img-fluid float-left"
            width="550"
            height="1000"
            alt="painting"
          />
        </div>
        <div
          className="col px-3"
          style={{ minWidth: "72vh", marginLeft: "1.5vh" }}
        >
          <div 
          className="row"
          style={{ fontFamily: "alata"}}>
            <h2>Afriezal Raeshandi</h2>
          </div>
          <div className="row">
            <p className="m-0 mt-4 text-justify" >Bidang: Merah</p>
          </div>
          <div className="row">
            <p className="m-0 text-justify">Juara: 1</p>
          </div>
          <div className="row">
            <p className="m-0 mb-4 text-justify">Medali: Emas </p>
          </div>
          <div className="row">
            <p className="text-justify" >
              Virtual Photoshoot merupakan suatu inovasi di bidang fotografi
              dengan cara melakukan pengambilan hasil karya foto melalui video
              conference. Lomba Virtual Photoshoot Digifestabi 2020 memberi
              pengalaman baru bagi talenta-talenta fotografi Bank Indonesia.
              Alih-alih sesi foto secara live, para fotografer membidikkan
              kameranya ke laptop dan mengarahkan model yang berada di sisi lain
              layar. Mengambil tema “Generasi Muda Indonesia sebagai Inspirasi
              Transformasi Digital”, para fotografer BI telah mampu menunjukkan
              kebolehannya dengan menghasilkan foto-foto berkualitas.
            </p>
          </div>
        </div>
      </div>
      <div className="row fixed-bottom" style={{ left: "5vh" }}>
        <Link to="/">
          <p>⬅️ Ruang Seni IPEBI</p>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
