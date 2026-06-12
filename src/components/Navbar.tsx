import React, { useState } from 'react';
import { Home, Newspaper, LayoutDashboard, Network, Info, MessageSquare, Search, Menu, Globe, X, FileText, Calendar, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export type TabType = 'home' | 'news' | 'dashboard' | 'structure' | 'about' | 'aspiration' | 'ad_art' | 'agenda' | 'download';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const navItems: { icon: any; label: string; id: TabType }[] = [
  { icon: Home, label: 'Beranda', id: 'home' },
  { icon: FileText, label: 'AD & ART', id: 'ad_art' },
  { icon: Network, label: 'Struktur Organisasi', id: 'structure' },
  { icon: Calendar, label: 'Agenda Kegiatan', id: 'agenda' },
  { icon: Download, label: 'Download Dokumen', id: 'download' },
  { icon: MessageSquare, label: 'Forum Aspirasi', id: 'aspiration' },
  { icon: Info, label: 'Tentang', id: 'about' },
];

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (id: TabType) => {
    onTabChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav flex flex-col">
        {/* Top Row: Logo & Mobile Menu Toggle */}
        <div className="flex items-center justify-between px-4 md:px-8 h-20 border-b border-white/40">
          {/* Logo Section - Left Side */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 xl:gap-5 cursor-pointer relative group" onClick={() => handleTabChange('home')}>
              <div className="relative flex items-center justify-center">
                <img 
                  src="https://drive.google.com/thumbnail?id=1NcadbSCAmRCiE3RLjXcEy3cEj3_Hul6M&sz=w500" 
                  alt="Logo Organisasi" 
                  className="object-contain relative z-10 group-hover:scale-110 transition-all duration-700 w-12 xl:w-16"
                />
                <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-700 -z-10" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-sans font-black text-xl xl:text-3xl tracking-tighter text-brand-red leading-none pt-0">
                    DPD SP
                  </span>
                  <span className="font-sans font-black text-xl xl:text-3xl tracking-tighter text-slate-900 leading-none">
                    PLN
                  </span>
                </div>
                <span className="text-[9px] xl:text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 mt-1 xl:mt-2 leading-none">
                  Kalimantan Barat
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-2xl bg-white/50 text-slate-800 hover:bg-slate-50 hover:text-brand-red transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Bottom Row: Desktop Navigation Items - Center Side Layout */}
        <div className="hidden lg:flex justify-center items-center gap-1 xl:gap-2 py-3 bg-white/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={cn(
                "px-2.5 xl:px-4 py-2 rounded-xl text-[11px] xl:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 xl:gap-2 border border-transparent whitespace-nowrap",
                activeTab === item.id 
                  ? "text-brand-red bg-brand-red/10 border-brand-red/30 shadow-sm" 
                  : "text-slate-700 hover:text-brand-red hover:bg-white/40 hover:border-white/30"
              )}
            >
              <item.icon className={cn("w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300", activeTab === item.id && "scale-110")} />
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 p-4 z-40 lg:hidden"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-4 shadow-2xl flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full p-4 rounded-2xl text-left font-bold transition-colors",
                    activeTab === item.id
                      ? "bg-brand-red/10 text-brand-red"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
