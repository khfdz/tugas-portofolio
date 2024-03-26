import React from 'react';
import { scrollToAbout, scrollToResume, scrollToWork, scrollToGetInTouch } from '../function/scrollFunction';


function Header() {
    return (
        <div className="container-lg Halaman3Fix">
            <div className="row navbar halTiga">
                <p className="col-md-1 logo">KHFDZ</p>
                <p className="col-md-2 about" onClick={scrollToAbout}>About Me</p>
                <p className="col-md-1 resume" onClick={scrollToResume}>Resume</p>
                <p className="col-md-1 work" onClick={scrollToWork}>Work</p>
                <button className="col-md-2 btnGetInTouch" onClick={scrollToGetInTouch}>Get in Touch</button>
            </div>
        </div>
    );
}

export default Header;
