import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Calendar, MapPin, Phone, Mail, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const contact = {
  address: 'Jl. Adi Sucipto KM. 7.3, Pontianak, Kalimantan Barat',
  phone: '(0561) 732288',
  email: 'sekretariat@spplnkalbar.org',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center space-y-3 mb-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif font-black text-slate-800 italic"
      >
        {children}
      </motion.h2>
      <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
        DPD SP PLN Kalimantan Barat
      </p>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="glass-white rounded-[2rem] p-8 card-3d mt-8 max-w-2xl mx-auto">
      <h4 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-6 underline decoration-brand-yellow decoration-4 underline-offset-8">
        Kontak
      </h4>
      <ul className="space-y-4 text-sm font-bold text-slate-500">
        <li className="flex gap-3"><MapPin className="w-5 h-5 text-brand-red flex-shrink-0" /> {contact.address}</li>
        <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-red flex-shrink-0" /> {contact.phone}</li>
        <li className="flex gap-3"><Mail className="w-5 h-5 text-brand-red flex-shrink-0" /> {contact.email}</li>
      </ul>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="space-y-8 pb-10">
      <SectionTitle>Tentang DPD SP PLN Kalbar</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <p className="text-slate-600 leading-relaxed font-medium">
          Dewan Pimpinan Daerah Serikat Pekerja PT PLN (Persero) Unit Induk Wilayah
          Kalimantan Barat.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium">
          Kami hadir sebagai wadah aspirasi dan perjuangan seluruh karyawan PLN di
          wilayah Kalimantan Barat. Bersatu dalam harmoni untuk mewujudkan
          kesejahteraan dan pelayanan prima.
        </p>
        <p className="text-2xl font-serif italic text-slate-900 font-bold">
          Bersatu, Berjuang, Berjaya!
        </p>
      </div>
      <ContactCard />
    </div>
  );
}

export function AdArtSection() {
  return (
    <div className="space-y-8 pb-10">
      <SectionTitle>Anggaran Dasar &amp; Rumah Tangga</SectionTitle>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-slate-600 leading-relaxed font-medium text-center">
          Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) adalah konstitusi organisasi
          yang mengatur kepengurusan, keanggotaan, dan mekanisme kerja DPD SP PLN Kalbar.
        </p>
        <div className="glass-white rounded-[2rem] p-8 card-3d flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-brand-red" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Dokumen Resmi</h4>
            <p className="text-sm text-slate-600 font-medium mt-1 leading-relaxed">
              Salinan AD/ART dan dokumen organisasi lainnya dapat diminta melalui
              sekretariat DPD SP PLN Kalbar di {contact.email}.
            </p>
          </div>
        </div>
      </div>
      <ContactCard />
    </div>
  );
}

export function AgendaSection({ items }: { items: { title: string; date: string; description: string }[] }) {
  return (
    <div className="space-y-8 pb-10">
      <SectionTitle>Agenda Kegiatan</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-white rounded-[2rem] p-6 card-3d"
          >
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3 h-3" /> {item.date}
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">{item.title}</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export function DownloadSection() {
  const docs = [
    { name: 'Anggaran Dasar & Rumah Tangga (AD/ART)', note: 'Konstitusi organisasi DPD SP PLN Kalbar.' },
    { name: 'Struktur Organisasi', note: 'Susunan kepengurusan periode jabatan terkini.' },
  ];
  return (
    <div className="space-y-8 pb-10">
      <SectionTitle>Download Dokumen</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {docs.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-white rounded-[2rem] p-6 card-3d flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">{doc.name}</h4>
              <p className="text-sm text-slate-600 font-medium mt-1 leading-relaxed">{doc.note}</p>
              <p className="text-xs text-slate-400 font-semibold mt-3">
                Hubungi sekretariat: {contact.email}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
