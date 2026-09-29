import { useEffect } from "react";
import { captureUTM } from "./utils/utm.js";
import { useReveal } from "./hooks/useReveal.js";
import { LeadProvider, useLead } from "./context/LeadContext.jsx";

// Каркас
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import QuickContacts from "./components/layout/QuickContacts.jsx";
import ProgressBar from "./components/common/ProgressBar.jsx";
import CookieBanner from "./components/common/CookieBanner.jsx";
import PrivacyModal from "./components/common/PrivacyModal.jsx";

// Секции
import Hero from "./components/sections/Hero.jsx";
import Directions from "./components/sections/Directions.jsx";
import Schedule from "./components/sections/Schedule.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import Space from "./components/sections/Space.jsx";
import Team from "./components/sections/Team.jsx";
import Reviews from "./components/sections/Reviews.jsx";
import LeadForm from "./components/sections/LeadForm.jsx";
import Contacts from "./components/sections/Contacts.jsx";

function AppContent() {
  const { isPrivacyOpen, closePrivacy } = useLead();

  useEffect(() => {
    captureUTM();
  }, []);

  useReveal();

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      {/* Фоновый шум */}
      <div className="grain" aria-hidden="true" />

      {/* Индикатор скролла */}
      <ProgressBar />

      {/* Шапка сайта */}
      <Header />

      {/* Основной контент */}
      <main className="flex-1">
        <Hero />
        <Directions />
        <Schedule />
        <Pricing />
        <Space />
        <Team />
        <Reviews />
        <LeadForm />
        <Contacts />
      </main>

      {/* Подвал */}
      <Footer />

      {/* Плавающие кнопки связи */}
      <QuickContacts />

      {/* Плашка согласия на Cookie */}
      <CookieBanner />

      {/* Модальное окно Политики конфиденциальности 152-ФЗ */}
      <PrivacyModal open={isPrivacyOpen} onClose={closePrivacy} />
    </div>
  );
}

export default function App() {
  return (
    <LeadProvider>
      <AppContent />
    </LeadProvider>
  );
}
