/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Location } from './components/Location';
import { Amenities } from './components/Amenities';
import { MasterPlan } from './components/MasterPlan';
import { Policies } from './components/Policies';
import { ActualProgress } from './components/ActualProgress';
import { FAQSection } from './components/FAQSection';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ImageModal } from './components/ImageModal';
import { ConsultModal } from './components/ConsultModal';

export default function App() {
  // Modal states
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [imageModalData, setImageModalData] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
    caption: '',
  });

  const handleOpenImageModal = (url: string, title: string, caption?: string) => {
    setImageModalData({
      isOpen: true,
      url,
      title,
      caption,
    });
  };

  const handleCloseImageModal = () => {
    setImageModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar onOpenConsultModal={() => setConsultModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 2. Overview & Core Pillars */}
        <Overview
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 3. Location & Regional Transport */}
        <Location
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 4. Eco Amenities & Connectivity */}
        <Amenities
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 5. Master Plan & Product Types */}
        <MasterPlan
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 6. Sales Policies & Loan Calculator */}
        <Policies
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 7. Actual Construction & Infrastructure Photos */}
        <ActualProgress
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. High-converting Lead Registration Form */}
        <LeadForm />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Action Bars */}
      <FloatingActions onOpenConsultModal={() => setConsultModalOpen(true)} />

      {/* Reusable Modals */}
      <ConsultModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />

      <ImageModal
        isOpen={imageModalData.isOpen}
        onClose={handleCloseImageModal}
        imageUrl={imageModalData.url}
        title={imageModalData.title}
        caption={imageModalData.caption}
      />
    </div>
  );
}
