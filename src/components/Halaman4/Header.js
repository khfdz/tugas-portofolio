import React from 'react';
import { scrollToAbout, scrollToResume, scrollToWork, scrollToGetInTouch } from '../function/scrollFunction';

function Header () {
    return (
        <div className="container-lg Halaman4Fix">
            <div className="row navbar halEmpat">
                <p className="col-md-1 logoEmpat">KHFDZ</p>
                <p className="col-md-2 aboutEmpat" onClick={scrollToAbout}>About Me</p>
                <p className="col-md-1 resumeEmpat" onClick={scrollToResume}>Resume</p>
                <p className="col-md-1 workEmpat" onClick={scrollToWork}>Work</p>
                <button className="col-md-2 btnGetInTouch" onClick={scrollToGetInTouch}>Get in Touch</button>
            </div>
        </div>
    );
}

export default Header;