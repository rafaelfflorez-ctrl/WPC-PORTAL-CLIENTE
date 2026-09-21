import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { GlobalSourcingSection } from './components/GlobalSourcingSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { FinamcoCommercialModal } from './components/FinamcoCommercialModal.tsx';
import { Footer } from './components/Footer.tsx';
import { ThemeToggle } from './components/ThemeToggle.tsx';
import { useTheme } from './context/ThemeContext.tsx';
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Coins, 
  ArrowRight, 
  Anchor, 
  CheckCircle2, 
  Plane, 
  Ship,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [finamcoModalOpen, setFinamcoModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<
    'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco' | 'integral'
  >('abastecimiento');

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleOpenQuote = (
    service: 'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco' | 'integral' = 'abastecimiento'
  ) => {
    setSelectedServiceForQuote(service);
    setQuoteModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 selection:bg-[#5916EC] selection:text-white ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Main Header with Official Logo & Theme Switcher */}
      <Header onOpenQuote={() => handleOpenQuote('abastecimiento')} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote('abastecimiento')}
          onExploreServices={() => handleScrollToSection('servicios')}
          onOpenSimulator={() => handleScrollToSection('alianza-financiera')}
        />

        {/* Corporate Trust Strip */}
        <section className={`border-y py-8 transition-colors ${
          isDark ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-white shadow-xs'
        }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
              <div className="border-l-2 border-[#5916EC] pl-4">
                <p className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Cartagena</p>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Sede Principal en Colombia</p>
              </div>

              <div className="border-l-2 border-[#888888] pl-4">
                <p className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>China y Panamá</p>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Equipo Propio en Terreno</p>
              </div>

              <div className="border-l-2 border-[#5916EC] pl-4">
                <p className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Alianza Finamco</p>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Factoring & Liquidez Inmediata</p>
              </div>

              <div className="border-l-2 border-[#888888] pl-4">
                <p className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>100% Control</p>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Calidad y Cero Descapitalización</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Financing Section */}
        <ServicesSection
          onOpenQuoteWithService={(svc) => handleOpenQuote(svc)}
          onOpenFinamcoCommercialSheet={() => setFinamcoModalOpen(true)}
        />

        {/* Global Sourcing in China & Panama */}
        <GlobalSourcingSection
          onOpenQuote={() => handleOpenQuote('abastecimiento')}
        />

        {/* Why World Parts Company S.A.S. - B2B Operational Strengths */}
        <section className={`relative py-20 border-t transition-colors ${
          isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100/70 border-slate-200'
        }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/10 px-3.5 py-1 text-xs font-semibold text-[#5916EC]">
                <Sparkles className="h-3.5 w-3.5 text-[#5916EC]" />
                <span>Ventaja Competitiva</span>
              </div>
              <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                ¿Por Qué Confiar tus Importaciones en World Parts Company S.A.S.?
              </h2>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Transformamos el corretaje de comercio internacional en una solución integral que protege tus recursos financieros y asegura cada entrega técnica.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className={`rounded-xl border p-6 space-y-3 transition-colors ${
                isDark ? 'border-slate-800 bg-slate-950 hover:border-[#5916EC]/40' : 'border-slate-200 bg-white hover:border-[#5916EC]/40 shadow-xs'
              }`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5916EC]/10 text-[#5916EC] border border-[#5916EC]/20">
                  <Anchor className="h-5 w-5" />
                </div>
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Ubicación Portuaria Privilegiada</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Nuestra sede principal en Cartagena de Indias nos ubica en el centro de interconexión logística marítima más importante de Colombia, reduciendo tiempos de gestión portuaria y aduanera.
                </p>
              </div>

              <div className={`rounded-xl border p-6 space-y-3 transition-colors ${
                isDark ? 'border-slate-800 bg-slate-950 hover:border-[#888888]/40' : 'border-slate-200 bg-white hover:border-slate-400 shadow-xs'
              }`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Inspección Física Sin Intermediarios</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  No dependemos de reportes a distancia. Nuestro propio personal se desplaza a las fábricas en China y a las bodegas en Panamá para auditar producción, empaque y especificaciones.
                </p>
              </div>

              <div className={`rounded-xl border p-6 space-y-3 transition-colors ${
                isDark ? 'border-slate-800 bg-slate-950 hover:border-[#5916EC]/40' : 'border-slate-200 bg-white hover:border-[#5916EC]/40 shadow-xs'
              }`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5916EC]/10 text-[#5916EC] border border-[#5916EC]/20">
                  <Coins className="h-5 w-5" />
                </div>
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sinergia Financiera con Finamco</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Integramos factoring para que transformes tus cuentas por cobrar en liquidez inmediata, permitiéndote adquirir inventario o modernizar tu tecnología sin frenar tu flujo de caja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Quote Section */}
        <ContactSection preselectedService={selectedServiceForQuote} />
      </main>

      {/* Corporate Footer with Brand Mark */}
      <Footer />

      {/* Floating Theme Quick Toggle for Accessibility */}
      <div className="fixed bottom-5 right-5 z-40">
        <ThemeToggle 
          className="shadow-xl shadow-purple-950/20 backdrop-blur-md" 
          variant="compact" 
        />
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedServiceForQuote}
      />

      {/* Finamco Commercial Sheet Modal */}
      <FinamcoCommercialModal
        isOpen={finamcoModalOpen}
        onClose={() => setFinamcoModalOpen(false)}
        onRequestQuote={() => handleOpenQuote('factoring_finamco')}
      />
    </div>
  );
}
