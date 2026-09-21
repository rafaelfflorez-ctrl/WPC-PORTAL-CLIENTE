import React from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  MapPin, 
  CheckCircle, 
  FileCheck2, 
  Factory, 
  Container, 
  Navigation, 
  Eye, 
  Scale, 
  Anchor
} from 'lucide-react';
import inspectionChinaImg from '../assets/images/inspection_china_1789789409470.jpg';
import panamaLogisticsImg from '../assets/images/panama_logistics_1789789420659.jpg';

interface GlobalSourcingSectionProps {
  onOpenQuote: () => void;
}

export const GlobalSourcingSection: React.FC<GlobalSourcingSectionProps> = ({
  onOpenQuote,
}) => {
  return (
    <section id="abastecimiento-global" className="relative bg-slate-950 py-20 lg:py-28">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[450px] w-[600px] -translate-y-1/2 rounded-full bg-[#5916EC]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <Globe2 className="h-3.5 w-3.5 text-[#5916EC]" />
            <span>Red Exclusiva de Abastecimiento</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Abastecimiento Estratégico Global en China y Panamá
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Concentramos nuestras operaciones de sourcing estrictamente en dos de las plataformas comerciales más dinámicas y competitivas del mundo. Eliminamos la incertidumbre de comprar en el exterior gracias a nuestro <strong className="text-white">equipo propio en terreno</strong>, que inspecciona y valida cada eslabón en origen.
          </p>
        </div>

        {/* The Two Strict Markets Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Hub China */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition hover:border-[#5916EC]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5916EC]/15 border border-[#5916EC]/30 text-purple-300 font-extrabold text-lg">
                    CN
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mercado Estratégico: China</h3>
                    <p className="text-xs text-purple-300 font-medium">Centro Global de Manufactura y Tecnología</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700">
                  Volumen & Escala
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                La potencia manufacturera por excelencia. Operamos directamente con clústeres fabriles de alta tecnología, líneas de montaje, piezas mecánicas y materias primas a precios de origen real.
              </p>

              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800">
                <img
                  src={inspectionChinaImg}
                  alt="Inspección in situ en fábricas chinas (Shenzhen, Ningbo, Shanghai) - World Parts Company S.A.S."
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 rounded bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-purple-200 border border-slate-700/60 backdrop-blur-sm">
                  Shenzhen • Ningbo • Shanghai | Auditoría en Origen
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <span>
                    <strong>Ciudades Base:</strong> Shenzhen (electrónica y alta tecnología), Ningbo/Yiwu (ferretería e inventarios) y Shanghai (maquinaria pesada).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Eye className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <span>
                    <strong>Inspección In Situ:</strong> Auditores presenciales revisan la solvencia legal de la fábrica, los estándares ISO y la calidad técnica antes de transferir anticipos.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Container className="mt-0.5 h-4 w-4 shrink-0 text-[#5916EC]" />
                  <span>
                    <strong>Consolidación de Contenedores (FCL/LCL):</strong> Agrupamos pedidos de diversos fabricantes para maximizar tu cubicaje marítimo hacia Colombia.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                <Anchor className="h-4 w-4 text-[#5916EC]" />
                <span>Ruta Transpacífica Directa hacia Puerto de Cartagena</span>
              </div>
            </div>
          </div>

          {/* Hub Panamá */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition hover:border-[#888888]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-lg">
                    PA
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mercado Estratégico: Panamá</h3>
                    <p className="text-xs text-slate-300 font-medium">Zona Libre de Colón & Conexión Caribe</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700">
                  Velocidad & Proximidad
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                La plataforma logística más ágil del hemisferio occidental. Ideal para empresas que requieren rotación rápida de repuestos, suministros industriales y reabastecimiento en tiempos récord.
              </p>

              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800">
                <img
                  src={panamaLogisticsImg}
                  alt="Hub logístico y Zona Libre de Colón en Panamá - World Parts Company S.A.S."
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 rounded bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-slate-200 border border-slate-700/60 backdrop-blur-sm">
                  Zona Libre de Colón • Tránsito Marítimo 2 a 4 Días
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <span>
                    <strong>Zona Libre de Colón (ZLC):</strong> Compras exentas de aranceles previos para re-despacho inmediato hacia territorio aduanero colombiano.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <span>
                    <strong>Tiempos de Tránsito Mínimos:</strong> Fletes marítimos y aéreos express desde Panamá con llegada a Cartagena de Indias en 2 a 4 días.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#888888]" />
                  <span>
                    <strong>Verificación de Bodega:</strong> Nuestro personal en Panamá inspecciona la mercancía física en zona franca antes del desaduanamiento de salida.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Anchor className="h-4 w-4 text-[#888888]" />
                <span>Ruta Express del Caribe: Conexión inmediata Panamá - Cartagena de Indias</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Verification and Safety Protocol */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Protocolo de Verificación y Control de Calidad en Terreno
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Así protegemos el capital y las operaciones de cada cliente en cada orden de compra:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-[#5916EC]/30 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5916EC]/15 text-purple-300 font-extrabold text-sm border border-[#5916EC]/30">
                01
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">Homologación del Proveedor</h4>
              <p className="mt-1 text-xs text-slate-400">
                Comprobación de existencia legal, solvencia mercantil y certificados de manufactura en China o Panamá.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-[#5916EC]/30 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5916EC]/15 text-purple-300 font-extrabold text-sm border border-[#5916EC]/30">
                02
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">Inspección Técnica en Planta</h4>
              <p className="mt-1 text-xs text-slate-400">
                Nuestro personal acude a la fábrica para contrastar especificaciones técnicas, tolerancias y acabados.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-[#888888]/30 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 font-extrabold text-sm border border-slate-700">
                03
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">Supervisión de Carga y Precintos</h4>
              <p className="mt-1 text-xs text-slate-400">
                Revisión fotográfica y documental del embalaje, llenado de contenedor y precintado de seguridad.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-[#5916EC]/30 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5916EC]/15 text-purple-300 font-extrabold text-sm border border-[#5916EC]/30">
                04
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">Recepción en Cartagena</h4>
              <p className="mt-1 text-xs text-slate-400">
                Recepción portuaria en Cartagena de Indias, desaduanamiento formal y distribución a destino final.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-2.5 text-xs font-bold text-white border border-slate-700 hover:border-[#5916EC] hover:text-purple-300 transition"
            >
              <span>Consultar Viabilidad de Proveedores en China o Panamá</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
