import React, { useEffect } from 'react';
import { GraduationCap, Phone, Mail, MapPin, Users, BookOpen, Star, ChevronDown, Award, Heart } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }, []);

  const sekbidData = [
    {
      id: 1,
      members: [
        { name: 'Jeffri', role: 'Ketua' },
        { name: 'Riski Wildan Wafani Putra', role: 'Anggota' },
        { name: 'Reni', role: 'Anggota' },
        { name: 'Inas Sahlina H.', role: 'Anggota' },
      ]
    },
    {
      id: 2,
      members: [
        { name: 'Bayu Arrosyidin', role: 'Ketua' },
        { name: 'Muhammad Ainur Ridho', role: 'Anggota' },
        { name: 'Zhanieta Nuril Hanufah', role: 'Anggota' },
      ]
    },
    {
      id: 3,
      members: [
        { name: 'Moh.Nurul Haqiqi', role: 'Ketua' },
        { name: 'Muhammad Ibrohim', role: 'Anggota' },
        { name: 'Lailatul Badriah', role: 'Anggota' },
      ]
    },
    {
      id: 4,
      members: [
        { name: 'Firgo Fernando', role: 'Ketua' },
        { name: 'Nur Hidayati Oktaviani', role: 'Anggota' },
        { name: 'Fika Amaliya', role: 'Anggota' },
        { name: 'Briant F. R', role: 'Anggota' },
      ]
    },
    {
      id: 5,
      members: [
        { name: 'Muhammad Akbar Maulana', role: 'Ketua' },
        { name: 'Romli', role: 'Anggota' },
        { name: 'Jesica Putri', role: 'Anggota' },
      ]
    },
    {
      id: 6,
      members: [
        { name: 'Siti Nur Atika', role: 'Ketua' },
        { name: 'Hudzaifah', role: 'Anggota' },
        { name: 'Putri Yani', role: 'Anggota' },
        { name: 'Muhammad Ilham Arifin', role: 'Anggota' },
      ]
    },
    {
      id: 7,
      members: [
        { name: 'Robi\'ul Maulana', role: 'Ketua' },
        { name: 'Zainal Arifin', role: 'Anggota' },
        { name: 'Deslan Agung', role: 'Anggota' },
        { name: 'Rofiqo Alfan H.', role: 'Anggota' },
        { name: 'Anindita Putri', role: 'Anggota' },
      ]
    },
    {
      id: 8,
      members: [
        { name: 'Rizma Nadhifatun N.', role: 'Ketua' },
        { name: 'Dwita Puspa N.', role: 'Anggota' },
        { name: 'Amelia Afkarina', role: 'Anggota' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white animate-gradient">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        <div className="fade-in z-10">
          <div className="relative">
            <div className="absolute inset-0 animate-glow rounded-full"></div>
            <img 
              src="/osis-logo.png" 
              alt="OSIS Logo" 
              className="w-72 h-72 mx-auto mb-8 animate-float relative z-10"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
            OSIS SMKN 1 BANYUANYAR
          </h1>
          <p className="text-2xl text-yellow-100/80 mb-8">Organisasi Siswa Intra Sekolah</p>
          <div className="flex justify-center gap-4">
            <a href="#structure" className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full hover:scale-105 transition-transform">
              Struktur Organisasi
            </a>
            <a href="#about" className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
              Tentang Kami
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce z-10">
          <ChevronDown className="w-12 h-12 text-yellow-400" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 glass-effect z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a href="#structure" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors group">
              <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Structure</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors group">
              <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>About</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors group">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Structure Section */}
      <section id="structure" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">
          <span className="relative">
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Award className="w-12 h-12 text-yellow-400" />
            </span>
            <span className="border-b-4 border-yellow-400 pb-2">Struktur Organisasi</span>
          </span>
        </h2>

        {/* Leadership */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Pembina OSIS', name: 'Gita Dwi Amelia, S.Pd', icon: GraduationCap },
            { title: 'Ketua OSIS', name: 'M. Habiburrohman A.K', icon: Award },
            { title: 'Wakil Ketua OSIS', name: 'Syaifuddin', icon: Award },
            { title: 'Sekretaris', name: 'Nabila Tus Sahro', icon: BookOpen },
            { title: 'Bendahara', name: 'Farah Kayana', icon: Heart },
          ].map((leader, index) => (
            <div key={index} className="fade-in card-hover">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 border border-yellow-400/20">
                <leader.icon className="w-14 h-14 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{leader.title}</h3>
                <p className="text-yellow-100/80">{leader.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sekbidData.map((sekbid) => (
            <div key={sekbid.id} className="fade-in card-hover">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 border border-yellow-400/20">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Sekbid {sekbid.id}</h3>
                <ul className="space-y-4">
                  {sekbid.members.map((member, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className={`w-5 h-5 mt-1 ${member.role === 'Ketua' ? 'text-yellow-400' : 'text-gray-400'}`} />
                      <div>
                        <span className={`${member.role === 'Ketua' ? 'font-semibold text-yellow-200' : 'text-gray-300'}`}>
                          {member.name}
                        </span>
                        {member.role === 'Ketua' && (
                          <span className="text-sm text-yellow-400/80 ml-2 px-2 py-0.5 bg-yellow-400/10 rounded-full">
                            Ketua
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-yellow-900/10 to-slate-900/0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            <span className="border-b-4 border-yellow-400 pb-2">About OSIS</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center fade-in">
            <p className="text-xl text-yellow-100/80 leading-relaxed">
              OSIS SMKN 1 Banyuanyar adalah organisasi siswa yang berperan dalam mengembangkan kepemimpinan, 
              kreativitas, dan potensi siswa. Kami berkomitmen untuk menciptakan lingkungan sekolah yang 
              positif dan mendukung pengembangan karakter siswa melalui berbagai program dan kegiatan yang inovatif.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            <span className="border-b-4 border-yellow-400 pb-2">Contact Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="fade-in card-hover">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 text-center border border-yellow-400/20">
                <Mail className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
                <p className="text-lg">osis@smkn1banyuanyar.sch.id</p>
              </div>
            </div>
            <div className="fade-in card-hover">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 text-center border border-yellow-400/20">
                <Phone className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
                <p className="text-lg">+62 123 4567 8900</p>
              </div>
            </div>
            <div className="fade-in card-hover">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 text-center border border-yellow-400/20">
                <MapPin className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
                <p className="text-lg">SMKN 1 Banyuanyar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;