import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Users2
} from 'lucide-react';

interface FinamcoCommercialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote?: () => void;
}

export const FinamcoCommercialModal: React.FC<FinamcoCommercialModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl my-6 rounded-2xl border border-[#5916EC]/40 bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Dynamic & Promotional Header */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-start justify-between shrink-0">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md border border-white/15">
                <div className="relative h-4 w-4 bg-white rounded-sm flex items-end justify-end p-0.5">
                  <div className="h-2 w-2 bg-slate-900 rounded-xs" />
                </div>
                <span className="font-extrabold tracking-wider text-sm text-white">FINAMCO</span>
                <span className="text-[10px] text-slate-300 font-medium border-l border-white/20 pl-2">SOLUCIONES DE CAPITAL</span>
              </div>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#5916EC]/15 px-2.5 py-0.5 text-[11px] font-semibold text-purple-300 border border-[#5916EC]/30">
                <ShieldCheck className="h-3.5 w-3.5 text-[#5916EC]" />
                Superintendencia de Sociedades + RADIAN
              </span>
            </div>

            {/* Short Promotional Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
              Liquidez Inmediata Sin Deuda Bancaria
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Convierte tus facturas y órdenes de compra en capital de trabajo en 24-48h. Financia tus importaciones sin saturar tus cupos bancarios.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition shrink-0 ml-3"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Single-Page Continuous Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-7 flex-1 text-slate-200">
          
          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 text-center">
              <p className="text-2xl sm:text-3xl font-black text-purple-400">+$4.5B</p>
              <p className="text-[11px] font-bold text-white uppercase mt-0.5">COP Desembolsados</p>
              <p className="text-[10px] text-slate-400">~USD $1.25 Billones</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">+10</p>
              <p className="text-[11px] font-bold text-white uppercase mt-0.5">Años de Trayectoria</p>
              <p className="text-[10px] text-slate-400">Desde 2014 en Colombia</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 text-center">
              <p className="text-2xl sm:text-3xl font-black text-purple-400">+1.200</p>
              <p className="text-[11px] font-bold text-white uppercase mt-0.5">Clientes Atendidos</p>
              <p className="text-[10px] text-slate-400">Empresas en Colombia y región</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">+950</p>
              <p className="text-[11px] font-bold text-white uppercase mt-0.5">Empresas Pagadoras</p>
              <p className="text-[10px] text-slate-400">Aprobación preferente</p>
            </div>
          </div>

          {/* Core Advantages vs Traditional Banking */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Scale className="h-4 w-4 text-[#5916EC]" />
              <span>¿Por qué FINAMCO y no la Banca Tradicional?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#5916EC]" />
                  <span>Sin Endeudamiento en Balance (Off-Balance)</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  El factoring no genera pasivo financiero en tus estados de balance NIIF. El riesgo de crédito se transfiere y se evalúa sobre la solidez de tu cliente pagador.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#5916EC]" />
                  <span>Preservación de Cupos Bancarios</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  No consumes tus líneas de crédito comercial con bancos tradicionales. Mantén intactos tus cupos para inversiones de capital o emergencias operativas.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#5916EC]" />
                  <span>Evaluación sobre tu Deudor</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Si tu cliente es una empresa grande o solvente (Ecopetrol, Claro, Éxito, Tecnoglass, etc.), tu estructuración se aprueba en cuestión de horas.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#5916EC]" />
                  <span>Agilidad 100% Digital</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Firma electrónica en plataforma RADIAN DIAN y giros bancarios directos en 24 a 48 horas sin trámites notariales ni filas bancarias.
                </p>
              </div>
            </div>
          </div>

          {/* Full Product Portfolio at a Glance */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Coins className="h-4 w-4 text-[#5916EC]" />
                <span>Portafolio de Soluciones Financieras</span>
              </h3>
              <span className="text-[11px] text-slate-400">6 Mecanismos de Liquidez</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* 1. Factoring RADIAN */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2 hover:border-[#5916EC]/40 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">100% Digital</span>
                  <span className="text-[10px] text-slate-400">24-48h</span>
                </div>
                <h4 className="text-sm font-bold text-white">Factoring Comercial (RADIAN)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Descuento ágil de facturas registradas en RADIAN con firma electrónica. Anticipa hasta el 90% del valor de tus ventas.
                </p>
              </div>

              {/* 2. Trade Finance */}
              <div className="rounded-xl border border-[#5916EC]/40 bg-[#5916EC]/15 p-4 space-y-2 hover:border-[#6E2EF2] transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Importaciones</span>
                  <span className="text-[10px] text-purple-200 font-mono">Hasta 90 Días</span>
                </div>
                <h4 className="text-sm font-bold text-white">Trade Finance Internacional</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  FINAMCO paga directamente a tus proveedores en China o Panamá, otorgándote hasta 90 días adicionales para cancelar.
                </p>
              </div>

              {/* 3. Anticipo Órdenes de Compra */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2 hover:border-[#5916EC]/40 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Producción</span>
                  <span className="text-[10px] text-slate-400">Hasta 50%</span>
                </div>
                <h4 className="text-sm font-bold text-white">Anticipo de Órdenes de Compra</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Liquidez anticipada sobre órdenes en firme para comprar insumos o iniciar fabricación sin frenar tu ritmo operativo.
                </p>
              </div>

              {/* 4. Prefactoring */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2 hover:border-[#5916EC]/40 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Cupo Pre-aprobado</span>
                  <span className="text-[10px] text-slate-400">Pre-RADIAN</span>
                </div>
                <h4 className="text-sm font-bold text-white">Prefactoring</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recursos inmediatos tras emitir la factura, antes de que el pagador registre los eventos de aceptación final.
                </p>
              </div>

              {/* 5. Confirming */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2 hover:border-[#5916EC]/40 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Cadena de Valor</span>
                  <span className="text-[10px] text-slate-400">A tu Medida</span>
                </div>
                <h4 className="text-sm font-bold text-white">Confirming a Proveedores</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Garantiza el pago oportuno a tu cadena de suministro, negociando mejores precios y descuentos por pronto pago.
                </p>
              </div>

              {/* 6. Factoring de Exportación */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2 hover:border-[#5916EC]/40 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Multidivisa</span>
                  <span className="text-[10px] text-slate-400">USD / EUR</span>
                </div>
                <h4 className="text-sm font-bold text-white">Factoring de Exportación</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Monetiza facturas de exportación en moneda extranjera y obtén cobertura de riesgo de no pago comercial.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Pagadores Network */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Users2 className="h-4 w-4 text-[#5916EC]" />
                <span>Red de +950 Empresas Pagadoras Calificadas</span>
              </div>
              <span className="text-[11px] font-bold text-purple-300 bg-[#5916EC]/15 px-2.5 py-0.5 rounded-full border border-[#5916EC]/30">
                Aprobación Ágil
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Aprobación ultra rápida y cupos inmediatos si tus facturas u órdenes corresponden a pagadores calificados:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'Ecopetrol', 
                'Claro', 
                'Almacenes Éxito', 
                'Tecnoglass', 
                'Tiendas D1', 
                'Canacol Energy', 
                'Enel', 
                'Acueducto Bogotá',
                'Manuelita',
                'Grupo Familia',
                'Grupo Bimbo', 
                'Cerrejón',
                'EPM', 
                'Bavaria (ABInBev)', 
                'Siemens', 
                'Oxxo',
                'Hocol',
                'Grupo Energía Bogotá'
              ].map((p) => (
                <span key={p} className="rounded bg-slate-900 border border-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                  {p}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Action */}
        <div className="bg-slate-950 p-4 sm:p-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Estructuración ágil y personalizada coordinada por <span className="text-white font-semibold">World Parts Company S.A.S.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                if (onRequestQuote) onRequestQuote();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#5916EC] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#6E2EF2] active:scale-95 transition shadow-lg shadow-[#5916EC]/25"
            >
              <span>Solicitar Estructuración con Finamco</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
