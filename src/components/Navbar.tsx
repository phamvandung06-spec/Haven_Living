import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
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
          ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg shadow-emerald-950/20 py-3 border-b border-emerald-800/40 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Haven Living Project Logo */}
          <a
            href="#"
            className="flex items-center gap-2 whitespace-nowrap shrink-0 group py-0.5"
            aria-label="Haven Living - Về đầu trang"
          >
            <img
              src="/assets/aistudio/1_Logo_Haven_Living_96f35af5.png"
              alt="Logo Khu Đô Thị Haven Living"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </a>

          {/* Zone 2: Single-line clean text nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-200 hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick Call */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors whitespace-nowrap shrink-0"
              title="Gọi hotline tư vấn trực tiếp"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PROJECT_DETAILS.hotlineDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenConsultModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-950/40 hover:shadow-emerald-600/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Nhận Báo Giá</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenConsultModal}
              className="px-2.5 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-md whitespace-nowrap"
            >
              Báo Giá
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-emerald-300"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950/98 backdrop-blur-xl border-b border-emerald-800/60 px-6 py-5 mt-2 transition-all">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-emerald-400 py-1.5 border-b border-emerald-900/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2 text-sm font-bold text-emerald-400 bg-emerald-900/40 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: {PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultModal();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-emerald-600 rounded-lg"
              >
                Đăng Ký Tư Vấn & Báo Giá
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
