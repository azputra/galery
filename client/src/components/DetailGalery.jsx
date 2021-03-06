import React, { useEffect, useState } from "react";
import logoipebi from "../assets/logoipebi.png";
import logohut from "../assets/logohut.png";
import logori from "../assets/logori.png";
// import painting from '../assets/painting.jpg'

function Detail(props) {
  useEffect(() => { }, []);
  return (
    <div className="container-fluid pl-4 pt-4 galeri-detail height-100">
      <div className="row d-flex justify-content-start">
        <div className="col fit-content">
          <img
            src={logoipebi}
            className="img-fluid float-left logo-ipebi"
            alt="logoipebi"
          />
        </div>
        <div className="col fit-content">
          <img
            src={logohut}
            className="img-fluid float-left logohut"
            alt="logohut"
          />
        </div>
        <div className="col fit-content">
          <img
            src={logori}
            className="img-fluid float-left logori"
            alt="logori"
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="col fit-content">
          <img
            src={props.dataDetail.image}
            className="img-fluid float-left max-height-img"
            width="550"
            height="900"
            alt="painting"
          />
        </div>
        <div className="col px-3 ml-1_5">
          <div className="row">
            <h2><b>{props.dataDetail.nama}</b></h2>
          </div>
          <div className="row">
            <p className="m-0 mt-4 text-justify">
              <b> Bidang </b>    : {props.dataDetail.bidang}
            </p>
          </div>
          {/* <div className="row">
            <p className="m-0 text-justify"><b> Juara </b>   : 1</p>
          </div>
          <div className="row">
            <p className="m-0 mb-4 text-justify"><b> Medali </b> : Emas</p>
          </div> */}
          <div className="row">
            {
              props.imageType === "VP" ?
                <p className="text-justify">
                  Virtual Photoshoot merupakan suatu inovasi di bidang fotografi
                  dengan cara melakukan pengambilan hasil karya foto melalui video
                  conference. Lomba Virtual Photoshoot Digifestabi 2020 memberi
                  pengalaman baru bagi talenta-talenta fotografi Bank Indonesia.
                  Alih-alih sesi foto secara live, para fotografer membidikkan
                  kameranya ke laptop dan mengarahkan model yang berada di sisi lain
                  layar. Mengambil tema <b> Generasi Muda Indonesia sebagai Inspirasi
                  Transformasi Digital” </b>, para fotografer BI telah mampu menunjukkan
                  kebolehannya dengan menghasilkan foto-foto berkualitas.
            </p>
                :
                <p className="text-justify">
                  Untuk pertama kalinya, BI menyelenggarakan lomba melukis secara langsung yang dapat diikuti perwakilan pegawai dari seluruh nusantara. Lomba Live Painting Digifestabi 2020 diselenggarakan secara secara virtual di hadapan juri melalui video conference. Para seniman lukis BI hanya diberi waktu 120 menit untuk mulai menyusun hingga mengunggah foto karyanya. Waktu yang singkat terbukti tak menjadi halangan untuk terciptanya sebuah karya yang menggugah, yang mengambil sudut pandang digitalisasi Bank Indonesia, kecintaan pada negeri, atau optimisme di tengah pandemi.
            </p>
            }
          </div>
          <div className="row d-flex justify-content-center">
            <div className="heart"></div>
          </div>
        </div>
      </div>
      <div className="row tombol-back">
        <p className="cursor-pointer" onClick={props.handleCloseDetail}>
          &#8592; <b>Ruang Seni IPEBI</b>
        </p>
      </div>
    </div >
  );
}

export default Detail;
