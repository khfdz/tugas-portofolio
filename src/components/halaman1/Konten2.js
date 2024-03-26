import React from 'react';
import { scrollToAbout } from '../function/scrollFunction'; // Import scroll function


function Konten2() {
    return (
        <div className="container-lg content2">
            <div className="row isiContent2">
                <button className="btnGoDown" onClick={scrollToAbout}>Go Down !</button>
                <p className="teks1">I have a deep love for the arts and am committed to expressing <br />that passion through my website, creating captivating and meaningful <br /> content that resonates with viewers and sparks creativity.</p>
            </div>
        </div>
    );
}

export default Konten2;
