import React from "react";
import Header from "./Header";
import Konten1 from "./Konten1";
import Konten2 from "./Konten2";
import '../../styles/halaman-1.css'; // Import CSS file


function Halaman1() {
    return (
        <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display:400,800,900" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,800,900" />
            <Header />
            <Konten1 />
            <Konten2 />
        </div>
    );
}

export default Halaman1;