import React from 'react';
import { 
  PackageCheck, 
  Cpu, 
  Coins, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Banknote, 
  Layers, 
  Building, 
  Zap,
  Clock,
  Briefcase
} from 'lucide-react';
import { FactoringSimulator } from './FactoringSimulator.tsx';
import shipContainersPortImg from '../assets/images/ship_containers_port_1789789865410.jpg';
import industrialMachineryImg from '../assets/images/industrial_machinery_1789789431885.jpg';

interface ServicesSectionProps {
  onOpenQuoteWithService: (serviceType: 'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco') => void;
  onOpenFinamcoCommercialSheet?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteWithService,
  onOpenFinamcoCommercialSheet,
}) => {
  return (
    <section id="servicios" className="relative bg-slate-900/60 py-20 lg:py-28 border-t border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/10 px-3 py-1 text-xs font-semibold text-purple-300">
            <Layers className="h-3.5 w-3.5 text-[#5916EC]" />
            <span>Portafolio B2B de Alto Rendimiento</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Soluciones Integrales de Importación y Financiamiento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Diseñamos una arquitectura operativa que elimina la fricción del comercio exterior. Estructuramos la importación en dos pilares estratégicos y la respaldamos con liquidez inmediata a través de nuestra alianza financiera de factoring.
          </p>
        </div>

        {/* The Two Pillars of Importation */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Pilar 1: Abastecimiento de Negocio */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:border-[#5916EC]/40 hover:shadow-xl hover:shadow-[#5916EC]/15">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-tr-2xl bg-[#5916EC]/5 blur-2xl group-hover:bg-[#5916EC]/10" />

            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5916EC]/10 border border-[#5916EC]/25 text-[#5916EC]">
                  <PackageCheck className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
                  Pilar Fundamental 01
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                Importación de Mercancía para el Abastecimiento de tu Negocio
              </h3>

              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800">
                <img
                  src={shipContainersPortImg}
                  alt="Barco cargado de contenedores en puerto marítimo internacional - Abastecimiento y logística para empresas"
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 rounded bg-slate-950/80 px-2.5 py-1 text-[10px] font-semibold text-purple-200 border border-slate-700/60 backdrop-blur-sm">
                  Carga Marítima FCL/LCL • Abastecimiento Continuo
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Garantizamos el flujo ininterrumpido de inventarios, materias primas y suministros de alta rotación para empresas comerciales, manufactureras y de distribución en Colombia.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-800/80 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Búsqueda y homologación de proveedores directos</strong> en los principales centros industriales de China (Guangzhou, Yiwu, Ningbo) y Panamá.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Auditoría física y control de empaque in situ</strong> antes de autorizar el embarque marítimo o aéreo.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Consolidación aduanera y logística integral</strong> hasta la entrega en tus bodegas en cualquier ciudad de Colombia.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <button
                onClick={() => onOpenQuoteWithService('abastecimiento')}
                className="flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-white transition group/btn"
              >
                <span>Solicitar cotización de abastecimiento</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Pilar 2: Mejora Tecnológica y Maquinaria */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:border-[#888888]/40 hover:shadow-xl hover:shadow-slate-800/20">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-tr-2xl bg-slate-800/20 blur-2xl group-hover:bg-slate-700/20" />

            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#888888]">
                  Pilar Fundamental 02
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                Importación para la Mejora Tecnológica de tu Empresa
              </h3>

              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800">
                <img
                  src={industrialMachineryImg}
                  alt="Maquinaria industrial y tecnología para empresas - World Parts Company S.A.S."
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 rounded bg-slate-950/80 px-2 py-1 text-[10px] font-semibold text-slate-200 border border-slate-700/60 backdrop-blur-sm">
                  Maquinaria de Precisión & Equipos Especializados
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Impulsamos la productividad y modernización industrial de tu compañía mediante la adquisición de maquinaria especializada, equipos de precisión y tecnología de punta.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-800/80 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Inspección técnica especializada de maquinaria:</strong> Pruebas de encendido, calibración y verificación de manuales técnicos en fábrica.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Cumplimiento estricto de reglamentos técnicos</strong> colombianos (RETIE, permisos INVIMA, homologaciones de importación).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Soporte logístico para cargas sobredimensionadas</strong> o proyectos llave en mano con desaduanamiento portuario en Cartagena.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <button
                onClick={() => onOpenQuoteWithService('mejora_tecnologica')}
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition group/btn"
              >
                <span>Solicitar estructuración tecnológica</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Strategic Financial Alliance: FINAMCO Section */}
        <div id="alianza-financiera" className="mt-20 scroll-mt-24">
          <div className="rounded-3xl border border-[#5916EC]/30 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Alliance Value Proposition */}
              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/15 px-3.5 py-1 text-xs font-semibold text-purple-300">
                  <Coins className="h-3.5 w-3.5 text-[#5916EC]" />
                  <span>Alianza Estratégica de Financiamiento B2B</span>
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Financiamiento en Alianza con FINAMCO
                </h3>

                <p className="text-sm leading-relaxed text-slate-300">
                  Sabemos que el comercio internacional demanda flujo de capital constante. Por ello, en World Parts Company S.A.S. hemos forjado una alianza estratégica con <strong className="text-white font-semibold">FINAMCO</strong> para brindar a nuestros clientes soluciones ágiles de factoring comercial y créditos basados en activos.
                </p>

                <p className="text-sm leading-relaxed text-slate-300">
                  Este modelo te permite convertir tus facturas por cobrar en <strong style={{ color: '#eff2f8' }}>liquidez inmediata</strong>, optimizando de forma contundente tu flujo de caja y robusteciendo el capital de trabajo de tu empresa. Lo más importante: puedes financiar tus operaciones de importación de mercancía y maquinaria <strong className="text-purple-300">sin descapitalizar tu negocio</strong>, sin endeudamiento en balance y sin comprometer cupos con entidades bancarias tradicionales.
                </p>

                {/* 4 Core Pillars of the Finamco Alliance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-[#5916EC]/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                      <Banknote className="h-4 w-4 text-[#5916EC]" />
                      <span>Liquidez Inmediata</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      Recibe hasta el 90% del valor de tus facturas a crédito en 24 a 48 horas hábiles con firma electrónica en RADIAN.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-[#888888]/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                      <TrendingUp className="h-4 w-4 text-[#888888]" />
                      <span>Cero Descapitalización</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      Mantén tus reservas intactas mientras adquieres inventario y maquinaria en el exterior (China y Panamá).
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-[#5916EC]/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                      <ShieldCheck className="h-4 w-4 text-[#5916EC]" />
                      <span>Preserva Cupos Bancarios</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      El endeudamiento queda en cabeza de FINAMCO, optimizando NIIF y protegiendo tus líneas de crédito vigentes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-[#888888]/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                      <Zap className="h-4 w-4 text-[#888888]" />
                      <span>Trade Finance y Compra Global</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      Plazo adicional de hasta 90 días para pagar a proveedores extranjeros asegurado con póliza global de crédito.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      if (onOpenFinamcoCommercialSheet) {
                        onOpenFinamcoCommercialSheet();
                      } else {
                        onOpenQuoteWithService('factoring_finamco');
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#5916EC] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#5916EC]/25 transition hover:bg-[#6E2EF2] active:scale-95"
                  >
                    <span>Solicitar Estructuración con Finamco</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {onOpenFinamcoCommercialSheet && (
                    <button
                      type="button"
                      onClick={onOpenFinamcoCommercialSheet}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-[#5916EC]/50 hover:text-white transition"
                    >
                      <span>Ver Dossier Comercial FINAMCO</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Infographic Visual on the Alliance */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950 p-6 space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                      Mecanismo de Factoring
                    </p>
                    <h4 className="text-base font-bold text-white">
                      Ciclo de Capital de Trabajo Continuo
                    </h4>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3 rounded-lg border border-slate-800/80 bg-slate-900/40 p-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300 font-bold text-[11px]">
                        1
                      </span>
                      <div>
                        <strong className="text-white">Emisión de Factura:</strong> Tu empresa vende a clientes solventes a plazos de 30 a 90 días.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-slate-800/80 bg-slate-900/40 p-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300 font-bold text-[11px]">
                        2
                      </span>
                      <div>
                        <strong className="text-white">Cesión Electrónica:</strong> Se registra el título valor ante la plataforma oficial RADIAN.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-slate-800/80 bg-slate-900/40 p-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300 font-bold text-[11px]">
                        3
                      </span>
                      <div>
                        <strong className="text-white">Desembolso Inmediato:</strong> FINAMCO te gira entre el 85% y 90% del valor en 24 a 48 horas.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-slate-800/80 bg-slate-900/40 p-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300 font-bold text-[11px]">
                        4
                      </span>
                      <div>
                        <strong className="text-white">Cobranza y Cierre:</strong> Al vencimiento, tu cliente paga directamente y se liquida la reserva.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Calculator embedded right within the financing section */}
            <div className="mt-12">
              <FactoringSimulator
                onApplyForFinancing={() => {
                  if (onOpenFinamcoCommercialSheet) {
                    onOpenFinamcoCommercialSheet();
                  } else {
                    onOpenQuoteWithService('factoring_finamco');
                  }
                }}
                onOpenFinamcoSheet={onOpenFinamcoCommercialSheet}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
