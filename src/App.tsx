import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Newspaper, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight,
  User,
  Clock,
  Bookmark
} from 'lucide-react';
import { Navbar, TabType } from './components/Navbar.tsx';
import { Structure } from './components/Structure.tsx';
import { cn } from './lib/utils';

// Latest News Data
const newsItems = [
  {
    category: 'MUSEUM',
    title: 'Rapat Koordinasi Wilayah DPD SP PLN Kalbar 2026',
    date: '04 Mei 2026',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    description: 'Rapat koordinasi ini membahas tentang penguatan kesejahteraan anggota dan sinergi operasional di wilayah Kalimantan Barat.'
  },
  {
    category: 'ADVOKASI',
    title: 'Kesejahteraan Anggota Jadi Prioritas Utama Tahun Ini',
    date: '02 Mei 2026',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
    description: 'Pengurus DPD SP PLN Kalbar berkomitmen terus berjuang dalam kebijakan-kebijakan yang berpihak pada karyawan.'
  },
  {
    category: 'SOSIAL',
    title: 'SP PLN Peduli: Bantuan Sosial Untuk Korban Banjir',
    date: '28 April 2026',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
    description: 'Distribusi bantuan logistik dilakukan secara langsung oleh tim relawan SP PLN Kalbar di beberapa titik terdampak.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global Background Map Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Map_of_West_Kalimantan.svg/1200px-Map_of_West_Kalimantan.svg.png" 
          alt="West Kalimantan Map" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] min-w-[1000px] h-auto opacity-[0.12] invert grayscale blur-[2px] select-none"
        />
      </div>

      {/* Global Background Logo Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="https://drive.google.com/thumbnail?id=1NcadbSCAmRCiE3RLjXcEy3cEj3_Hul6M&sz=w1000" 
            alt="Background Logo Organisasi" 
            className="w-[90%] md:w-[60%] lg:w-[45%] opacity-[0.08] select-none object-contain animate-pulse-slow"
          />
          {/* subtle overlay to ensure readability */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen pt-40 pb-20">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="max-w-7xl mx-auto px-4 md:px-8">
        
        {activeTab === 'home' || activeTab === 'news' ? (
          <>
            {/* News Hero / Spotlight */}
            <section className="mb-12">
              <div className="items-stretch">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-white rounded-[2rem] p-4 group cursor-pointer card-3d"
                >
                  <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[1.5rem]">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                      alt="Headline" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                      <span className="bg-brand-red text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4 shadow-lg shadow-black/20">
                        Berita Utama
                      </span>
                      <h1 className="text-white text-3xl md:text-5xl font-serif font-bold leading-tight max-w-2xl mb-4 group-hover:text-brand-yellow transition-colors">
                        Transformasi Digital dan Efisiensi Energi di Kalimantan Barat
                      </h1>
                      <div className="flex items-center gap-6 text-white/80 text-xs font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> Humas SP PLN</span>
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 04 Mei 2026</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Latest News Grid */}
            <section className="mb-20">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Pembaruan Terkini</span>
                </div>
                <button className="text-sm font-bold text-slate-400 hover:text-brand-red transition-colors flex items-center gap-1">
                  Lihat Semua <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                  <motion.article 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-white rounded-[2rem] news-card-hover p-4 card-3d"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black tracking-widest text-brand-red uppercase">{item.category}</span>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                          <Clock className="w-3 h-3" /> {item.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 hover:text-brand-red transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3 mb-6 font-medium leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="text-xs font-bold text-brand-red flex items-center gap-1 group">
                          Selengkapnya <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="p-2 text-slate-300 hover:text-brand-red transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Info Banner / Call to Action */}
            <section className="relative glass-white rounded-[3rem] p-8 md:p-16 overflow-hidden card-3d group">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-950/20 skew-x-[-20deg] translate-x-20 z-0" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-serif font-black text-slate-900 leading-tight italic">
                    Berjuang Bersama Untuk <span className="text-brand-red">PLN Berjaya</span>
                  </h2>
                  <p className="mt-6 text-slate-600 leading-relaxed font-medium">
                    Kami hadir sebagai wadah aspirasi dan perjuangan seluruh karyawan PLN di wilayah Kalimantan Barat. Bersatu dalam harmoni untuk mewujudkan kesejahteraan dan pelayanan prima.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 glass-white rounded-3xl flex flex-col items-center text-center card-3d">
                    <h4 className="text-3xl font-black text-brand-red">1200+</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Anggota Aktif</p>
                  </div>
                  <div className="p-8 glass-white rounded-3xl flex flex-col items-center text-center card-3d">
                    <h4 className="text-3xl font-black text-brand-red">14</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Unit Wilayah</p>
                  </div>
                  <div className="p-8 glass-white rounded-3xl flex flex-col items-center text-center card-3d">
                    <h4 className="text-3xl font-black text-brand-red">100+</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Program Advokasi</p>
                  </div>
                  <div className="p-8 glass-white rounded-3xl flex flex-col items-center text-center card-3d">
                    <h4 className="text-3xl font-black text-brand-red">24/7</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Layanan Pengaduan</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : activeTab === 'structure' ? (
          <Structure />
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-12 glass-white rounded-[3rem]">
            <h2 className="text-3xl font-serif font-bold text-slate-800 italic mb-4">Halaman sedang dalam pengembangan</h2>
            <p className="text-slate-500 font-medium">Kami sedang menyiapkan konten terbaik untuk Anda.</p>
            <button 
              onClick={() => setActiveTab('home')}
              className="mt-8 bg-brand-red text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-brand-red/20 transform hover:-translate-y-1 transition-all"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}

        {/* Multi-Column Info Footer */}
        <section className="mt-20 pt-20 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Dewan Pimpinan Daerah Serikat Pekerja PT PLN (Persero) Unit Induk Wilayah Kalimantan Barat.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#" className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:text-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 underline decoration-brand-yellow decoration-4 underline-offset-8">Tautan Cepat</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="hover:text-brand-red cursor-pointer transition-colors" onClick={() => setActiveTab('ad_art')}>Anggaran Dasar & Rumah Tangga</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors" onClick={() => setActiveTab('structure')}>Struktur Organisasi</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors" onClick={() => setActiveTab('agenda')}>Agenda Kegiatan</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors" onClick={() => setActiveTab('download')}>Download Dokumen</li>
              </ul>
            </div>
 
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 underline decoration-brand-yellow decoration-4 underline-offset-8">Kontak</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="flex gap-3"><MapPin className="w-5 h-5 text-brand-red flex-shrink-0" /> Jl. Adi Sucipto KM. 7.3, Pontianak, Kalimantan Barat</li>
                <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-red flex-shrink-0" /> (0561) 732288</li>
                <li className="flex gap-3"><Mail className="w-5 h-5 text-brand-red flex-shrink-0" /> sekretariat@spplnkalbar.org</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            <p>© 2026 DPD SP PLN Kalbar. All Rights Reserved.</p>
          </div>
        </section>


      </main>
      </div>
    </div>
  );
}
