import React, { useState } from 'react';

const Profile = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission
    }

    return (
        <div className="container-lg contentHal2">
            <div className="row isiContentHal2">
                <img className="foto2" src="./images/foto5.png" alt="Foto Profil 2" />

                <p className="halo">Hello, <br /> I'm Dhika </p>
                <p className="halo2">"I'm a <span>fullstack website developer</span> and a <span> photographer</span>, residing in Indonesia. I hold a bachelor's degree in Computer Science, and I'm passionate about creating stunning digital experiences and captivating visual stories."</p>
                <p className="halo3">Dhika Hafidz <br /> Karawang, 25 Feb 2000</p>
                <button className="btnContact" onClick={toggleForm}>CONTACT</button>

                {showForm && (
                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
                            <input type="email" id="email" name="email" placeholder="Email" required />
                            <textarea id="message" name="message" placeholder="Message" required></textarea>
                            <div className="contact-buttons">
                                <button type="submit" className="btnContactMe">Contact Me</button>
                                <button className="btnCloseForm" onClick={toggleForm}>Close</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
