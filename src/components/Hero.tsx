import React from 'react';
import { ArrowRight, ShieldCheck, DollarSign, TrendingUp, CheckCircle2, ChevronRight, Building2, Anchor, MapPin } from 'lucide-react';
import { WPCLogo } from './WPCLogo.tsx';
import heroLogisticsImg from '../assets/images/hero_logistics_1789789395934.jpg';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onExploreServices,
  onOpenSimulator,
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pb-32">
      {/* Subtle Background Glows matching the brand palette */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#5916EC]/15 blur-[140px]" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#888888]/10 blur-[130px]" />
        {/* Technical subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Copy (Col 7) */}
          <div className="lg:col-span-7">
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/10 px-3.5 py-1.5 text-xs font-semibold text-purple-300">
              <Anchor className="h-3.5 w-3.5 text-[#5916EC]" />
              <span>Cartagena de Indias | Broker de Comercio Internacional</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15]">
              Broker de Comercio Internacional
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Estructuramos tus importaciones desde China y Panamá con inspección directa en origen y soluciones de financiamiento estratégico (factoring) para proteger y optimizar tu capital de trabajo.
            </p>

            {/* Key Differentiator Bullets */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 rounded-lg border border-slate-800/80 bg-slate-900/50 p-3 hover:border-[#5916EC]/30 transition-colors">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                <span className="text-xs text-slate-200">
                  <strong className="font-semibold text-white">Inspección en Terreno:</strong> Auditores propios verificando calidad en China y Panamá.
                </span>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg border border-slate-800/80 bg-slate-900/50 p-3 hover:border-[#888888]/30 transition-colors">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                <span className="text-xs text-slate-200">
                  <strong className="font-semibold text-white">Factoring Estratégico:</strong> Alianza con Finamco para liquidez inmediata y cero descapitalización.
                </span>
              </div>
            </div>

            {/* Action Buttons in Corporate Purple */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#5916EC] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#5916EC]/25 transition-all duration-200 hover:bg-[#6E2EF2] hover:shadow-[#5916EC]/35 active:scale-95"
              >
                <span>Cotizar Operación de Importación</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-[#5916EC]/50 hover:bg-slate-800 hover:text-white"
              >
                <DollarSign className="h-4 w-4 text-[#5916EC]" />
                <span>Simular Factoring y Liquidez</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 border-t border-slate-800/80 pt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Garantía Operativa y Cobertura Integral
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5916EC]" />
                  <span>Sede Operativa: Cartagena de Indias</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#888888]" />
                  <span>Mercados Clave: China y Panamá</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#5916EC]" />
                  <span>Alianza con Finamco para Factoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive B2B Visual Card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <WPCLogo className="h-9 w-10" showText={false} variant="dark" />
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">ESTRUCTURA DE COMERCIO B2B</h2>
                    <p className="text-xs text-slate-400">World Parts Company S.A.S.</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#5916EC]/20 border border-[#5916EC]/30 px-2.5 py-1 text-[11px] font-semibold text-purple-300">
                  Operación Activa
                </span>
              </div>

              {/* Port & Logistics Image Feature */}
              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800 group">
                <img
                  src={heroLogisticsImg}
                  alt="Operaciones Portuarias y Despacho Marítimo en Cartagena de Indias - World Parts Company S.A.S."
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-slate-700/60">
                    <MapPin className="h-3.5 w-3.5 text-[#5916EC]" />
                    <span>Puerto de Cartagena • Hub de Entrada</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 font-semibold bg-[#5916EC]/20 border border-[#5916EC]/40 px-2 py-0.5 rounded">
                    SPRC & Contecar
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3.5">
                {/* Node 1: Origen */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-[#5916EC]" />
                      1. Origen Estratégico Verificado
                    </span>
                    <span className="text-slate-400">Inspección In Situ</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300">
                    Equipos propios en China y Panamá certifican fábricas, especificaciones técnicas y carga física.
                  </p>
                </div>

                {/* Node 2: Pilares */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="h-4 w-4 text-[#888888]" />
                      2. Pilares de Importación
                    </span>
                    <span className="text-slate-400">Dos Frentes</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-[#5916EC]" />
                      Abastecimiento continuo de mercancía y materias primas.
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-[#5916EC]" />
                      Mejora tecnológica, maquinaria e infraestructura.
                    </li>
                  </ul>
                </div>

                {/* Node 3: Alianza Financiera Finamco */}
                <div className="rounded-xl border border-[#5916EC]/30 bg-[#5916EC]/10 p-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-purple-300">
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-[#5916EC]" />
                      3. Apalancamiento con Finamco
                    </span>
                    <span className="rounded bg-[#5916EC]/25 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      Factoring
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300">
                    Anticipa facturas en 24 a 48 horas sin crear deuda en tu balance.
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 border-t border-slate-800 pt-4">
                <button
                  onClick={onExploreServices}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800/90 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  <span>Explorar Modelo de Importación</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
