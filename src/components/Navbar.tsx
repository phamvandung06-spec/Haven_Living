import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface NavbarProps {
  onOpenConsultModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Chuyên Gia', href: '#chuyen-gia' },
    { label: 'Tổng Quan', href: '#tong-quan' },
    { label: 'Vị Trí', href: '#vi-tri' },
    { label: 'Tiện Ích', href: '#tien-ich' },
    { label: 'Mặt Bằng', href: '#mat-bang' },
    { label: 'Chính Sách', href: '#chinh-sach' },
    { label: 'Tiến Độ', href: '#tien-do' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-3 border-b border-slate-200 text-[#054062]'
          : 'bg-gradient-to-b from-[#002f52]/90 via-[#002f52]/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official ARA Project Logo */}
          <a
            href="#"
            className="flex items-center gap-2 whitespace-nowrap shrink-0 group py-0.5"
            aria-label="Khu Đô Thị ARA - Về đầu trang"
          >
            <img
              src="/assets/aistudio/Logo_Ara_5db23274.png"
              alt="Logo Khu Đô Thị ARA"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </a>

          {/* Zone 2: Single-line clean text nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#d59732] hover:underline underline-offset-8 decoration-2 decoration-[#d59732] ${
                  isScrolled ? 'text-[#054062]' : 'text-stone-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Hotline CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 rounded-full transition-all shadow-md shadow-[#d59732]/30 hover:shadow-[#d59732]/50 whitespace-nowrap shrink-0 cursor-pointer"
              title="Gọi Hotline tư vấn trực tiếp"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-white" />
              <span>Hotline: {PROJECT_DETAILS.hotlineDisplay}</span>
            </a>
          </div>

          {/* Mobile hamburger toggle & Hotline */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-[#d59732] to-[#efa937] text-white rounded-full whitespace-nowrap shadow-sm"
              title="Gọi Hotline"
            >
              <Phone className="w-3 h-3" />
              <span>Hotline</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-[#054062] hover:text-[#d59732]' : 'text-white hover:text-[#f9df7b]'}`}
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002f52] backdrop-blur-xl border-b border-[#054062] px-6 py-5 mt-2 transition-all shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-100 hover:text-[#f9df7b] py-2 border-b border-[#054062]/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] rounded-full shadow-lg shadow-[#d59732]/30"
              >
                <Phone className="w-4 h-4 animate-pulse text-white" />
                <span>Hotline Tư Vấn: {PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
