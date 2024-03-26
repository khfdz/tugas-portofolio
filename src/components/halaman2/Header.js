import React from "react";
import { scrollToAbout, scrollToResume, scrollToWork, scrollToGetInTouch } from '../function/scrollFunction';

function Header() {
    return (
        <div className="container-lg Halaman2Fix">
            <div className="row navbar halDua">
                <p className="col-md-1 logoDua">KHFDZ</p>
                <p className="col-md-2 aboutDua" onClick={scrollToAbout}>About Me</p>
                <p className="col-md-1 resumeDua" onClick={scrollToResume}>Resume</p>
                <p className="col-md-1 workDua" onClick={scrollToWork}>Work</p>
                <button className="col-md-2 btnGetInTouch" onClick={scrollToGetInTouch}>Get in Touch</button>
            </div>
        </div>
    );
}

export default Header;