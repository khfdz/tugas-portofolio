import React, { useState } from 'react';

const Konten1 = () => {
  const projects = [
    {
      id: 1,
      type: 'photography',
      imgSrc: './images/photo1.jpg',
      title: 'Ramdhani & Riri',
      link: 'https://www.behance.net/gallery/160516305/Ramdhani-Riri'
    },
    {
      id: 2,
      type: 'photography',
      imgSrc: './images/photo2.jpg',
      title: 'Salsa Nur Afifah',
      link: 'https://www.behance.net/gallery/159942273/Salsa-Nur-Afifah'
    },
    {
      id: 3,
      type: 'photography',
      imgSrc: './images/photo4.jpg',
      title: 'Nadiya Fitri Fauziah',
      link: 'https://www.behance.net/gallery/159779475/Wisuda-Nadiya'
    },
    {
      id: 4,
      type: 'photography',
      imgSrc: './images/photo3.jpg',
      title: 'Achmad & Cantika',
      link: 'https://www.behance.net/gallery/159843067/Wisuda-Achmad-Cantika'
    },
    {
      id: 5,
      type: 'webDev',
      imgSrc: './images/web1.jpg',
      title: 'Manulife Report',
      link: 'https://tugas-pak-rizky.vercel.app/'
    }
  ];

  const [activeType, setActiveType] = useState('photography');

  return (
    <div className="container-lg content4">
      <p className="myLatest">My Latest Project</p>
      <button
        className={`btnPhotography ${activeType === 'photography' ? 'active' : ''}`}
        onClick={() => setActiveType('photography')}
      >
        Photography
      </button>
      <button
        className={`btnWebDev ${activeType === 'webDev' ? 'active' : ''}`}
        onClick={() => setActiveType('webDev')}
      >
        Website
      </button>

      <div className="row isiContent4">
        {projects
          .filter((project) => project.type === activeType)
          .map((project) => (
            <div className="card" key={project.id}>
              <img src={project.imgSrc} alt="Image" className="card-img-top" />
              <div className="card-overlay">
                <h5 className="card-title">{project.title}</h5>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn">View Details</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Konten1;
