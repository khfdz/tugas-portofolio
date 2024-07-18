import React, { useState } from 'react';

const Konten1 = () => {
  const [activeType, setActiveType] = useState('photography'); // State untuk jenis proyek yang aktif
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini

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
    },
    {
      id: 6,
      type: 'webDev',
      imgSrc: './images/web2.jpg',
      title: 'Gadget Store',
      link: 'https://tugas14-fe-gadget-store2.vercel.app/'
    },
    {
      id: 7,
      type: 'webDev',
      imgSrc: './images/web3.jpg',
      title: 'Rameno Omeno',  
      link: 'https://github.com/khfdz/eduwork-server-store'
    }
  ];

  const itemsPerPage = 4; // Jumlah proyek per halaman

  // Filter proyek berdasarkan jenis yang aktif (activeType)
  const filteredProjects = projects.filter(project => project.type === activeType);

  // Hitung total halaman berdasarkan jumlah proyek dan proyek per halaman
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Menghitung indeks untuk memotong proyek yang akan ditampilkan
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Fungsi untuk mengubah halaman saat tombol navigasi halaman diklik
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Mengatur proyek yang akan ditampilkan berdasarkan halaman saat ini
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <div className="container-lg content4">
      <p className="myLatest">My Latest Project</p>

      {/* Tombol untuk menampilkan proyek Photography */}
      <button
        className={`btnPhotography ${activeType === 'photography' ? 'active' : ''}`}
        onClick={() => {
          setActiveType('photography');
          setCurrentPage(1); // Set halaman kembali ke halaman pertama saat jenis proyek diubah
        }}
      >
        Photography
      </button>

      {/* Tombol untuk menampilkan proyek WebDev */}
      <button
        className={`btnWebDev ${activeType === 'webDev' ? 'active' : ''}`}
        onClick={() => {
          setActiveType('webDev');
          setCurrentPage(1); // Set halaman kembali ke halaman pertama saat jenis proyek diubah
        }}
      >
        WebDev
      </button>

      <div className="row isiContent4">
        {currentProjects.map(project => (
          <div className="card" key={project.id}>
            <img src={project.imgSrc} alt="Image" className="card-img-top" />
            <div className="card-overlay">
              <h5 className="card-title">{project.title}</h5>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn">View Details</a>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol navigasi halaman */}
      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btnPagination ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Konten1;
