import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  Layers, 
  Globe2, 
  Clock, 
  FileCheck,
  Building2
} from 'lucide-react';

export type FinamcoProduct = 
  | 'factoring_radian'
  | 'trade_finance'
  | 'anticipo_oc'
  | 'prefactoring'
  | 'factoring_exportacion';

interface FactoringSimulatorProps {
  onApplyForFinancing: (amount: number, term: number, product?: string) => void;
  onOpenFinamcoSheet?: () => void;
}

export const FactoringSimulator: React.FC<FactoringSimulatorProps> = ({
  onApplyForFinancing,
  onOpenFinamcoSheet,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<FinamcoProduct>('factoring_radian');
  const [invoiceAmount, setInvoiceAmount] = useState<number>(180000000); // 180M COP default
  const [termDays, setTermDays] = useState<number>(60);
  const [currency, setCurrency] = useState<'COP' | 'USD' | 'EUR'>('COP');

  let advanceRate = 0.88;
  if (selectedProduct === 'trade_finance') advanceRate = 1.0;
  else if (selectedProduct === 'anticipo_oc') advanceRate = 0.50;
  else if (selectedProduct === 'prefactoring') advanceRate = 0.75;
  else if (selectedProduct === 'factoring_exportacion') advanceRate = 0.85;

  const immediateLiquidity = Math.round(invoiceAmount * advanceRate);
  const reserveAmount = invoiceAmount - immediateLiquidity;

  const formatMoney = (amount: number) => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(amount);
    }
    if (currency === 'EUR') {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(amount);
    }
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCurrencyChange = (newCurr: 'COP' | 'USD' | 'EUR') => {
    setCurrency(newCurr);
    if (newCurr === 'COP') {
      setInvoiceAmount(180000000);
    } else if (newCurr === 'USD') {
      setInvoiceAmount(50000);
    } else if (newCurr === 'EUR') {
      setInvoiceAmount(45000);
    }
  };

  const productCatalog = {
    factoring_radian: {
      name: 'Factoring RADIAN Electrónico',
      tag: '88% - 90% Inmediato',
      description: 'Cesión formal de facturas electrónicas vía plataforma DIAN RADIAN con giro a tu cuenta bancaria en 24h.',
      timeline: '24 a 48 Horas',
    },
    trade_finance: {
      name: 'Trade Finance / Financiación de Importaciones',
      tag: '100% Cobertura a Proveedores',
      description: 'Financiamos el pago a tus proveedores en China y Panamá con hasta 90 días de plazo para tu empresa.',
      timeline: 'Pago directo al exterior',
    },
    anticipo_oc: {
      name: 'Anticipo Órdenes de Compra',
      tag: 'Financiación hasta 50%',
      description: 'Liquidez anticipada sobre órdenes de compra en firme para no detener producción ni compra de insumos.',
      timeline: 'Aprobación contra orden de compra',
    },
    prefactoring: {
      name: 'Prefactoring',
      tag: 'Cupo Pre-aprobado',
      description: 'Acceso a recursos inmediatamente emitida la factura, antes de los eventos de aceptación en RADIAN.',
      timeline: 'Cupo ágil pre-aprobado',
    },
    factoring_exportacion: {
      name: 'Factoring de Exportación',
      tag: 'Cobertura Multidivisa',
      description: 'Descuento en USD o EUR para exportadores con clientes en el exterior, con endoso ágil.',
      timeline: 'Desembolso en cuenta USD / EUR',
    },
  };

  return (
    <div id="simulador-factoring" className="rounded-2xl border border-[#5916EC]/30 bg-slate-900/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Calculator className="h-4 w-4 text-[#5916EC]" />
            <span>Simulador de Liquidez Inmediata FINAMCO</span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            Calculadora de Soluciones de Capital
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Estructuras comerciales en alianza con <strong className="text-white">FINAMCO</strong> (Entidad Vigilada por la Superintendencia de Sociedades).
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {onOpenFinamcoSheet && (
            <button
              type="button"
              onClick={onOpenFinamcoSheet}
              className="flex items-center gap-1.5 rounded-lg border border-[#5916EC]/40 bg-[#5916EC]/10 px-3 py-1 text-xs font-semibold text-purple-300 hover:bg-[#5916EC]/20 transition"
            >
              <FileText className="h-3.5 w-3.5 text-[#5916EC]" />
              <span>Ver Ficha FINAMCO</span>
            </button>
          )}

          <div className="inline-flex rounded-lg border border-slate-800 bg-slate-950 p-1">
            {(['COP', 'USD', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => handleCurrencyChange(curr)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  currency === curr
                    ? 'bg-[#5916EC] text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Selector */}
      <div className="mt-6">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Selecciona la Modalidad Financiera
        </label>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {(Object.keys(productCatalog) as FinamcoProduct[]).map((prodKey) => {
            const prod = productCatalog[prodKey];
            const isSelected = selectedProduct === prodKey;
            return (
              <button
                key={prodKey}
                type="button"
                onClick={() => setSelectedProduct(prodKey)}
                className={`flex flex-col text-left p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-[#5916EC] bg-[#5916EC]/15 ring-1 ring-[#5916EC]'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-purple-300' : 'text-slate-400'}`}>
                    {prod.tag}
                  </span>
                  {isSelected && <span className="h-2 w-2 rounded-full bg-[#5916EC]" />}
                </div>
                <span className="mt-1 text-xs font-bold text-white line-clamp-1">
                  {prod.name}
                </span>
                <span className="mt-1 text-[11px] text-slate-400 line-clamp-2">
                  {prod.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs and Results Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls (Col 7) */}
        <div className="space-y-6 lg:col-span-7">
          {/* Invoice Amount Slider */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-300">
                {selectedProduct === 'anticipo_oc' ? 'Valor de la Orden de Compra:' : 'Monto de la Factura o Título:'}
              </span>
              <span className="font-mono text-base sm:text-lg font-extrabold text-white">
                {formatMoney(invoiceAmount)}
              </span>
            </div>
            <input
              type="range"
              min={currency === 'COP' ? 20000000 : 5000}
              max={currency === 'COP' ? 2000000000 : 500000}
              step={currency === 'COP' ? 5000000 : 2500}
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(Number(e.target.value))}
              className="mt-3 w-full accent-[#5916EC] h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-[11px] text-slate-500 font-mono">
              <span>{currency === 'COP' ? '$20M' : '$5K'}</span>
              <span>{currency === 'COP' ? '$1.000M' : '$250K'}</span>
              <span>{currency === 'COP' ? '$2.000M+' : '$500K+'}</span>
            </div>
          </div>

          {/* Term Slider */}
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-300">Plazo Estimado de Cobro:</span>
              <span className="font-mono text-base sm:text-lg font-bold text-white">
                {termDays} días
              </span>
            </div>
            <input
              type="range"
              min={30}
              max={120}
              step={15}
              value={termDays}
              onChange={(e) => setTermDays(Number(e.target.value))}
              className="mt-3 w-full accent-[#5916EC] h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-[11px] text-slate-500 font-mono">
              <span>30 días</span>
              <span>60 días</span>
              <span>90 días</span>
              <span>120 días</span>
            </div>
          </div>

          {/* Product Operational Spec Pill */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#5916EC]" />
                Tiempo de Desembolso:
              </span>
              <span className="font-semibold text-purple-300">
                {productCatalog[selectedProduct].timeline}
              </span>
            </div>
            <p className="text-slate-400 text-[11px]">
              La tasa de descuento es personalizada tras el análisis crediticio de la empresa pagadora. El proceso se gestiona 100% digital con World Parts Company S.A.S. y FINAMCO.
            </p>
          </div>
        </div>

        {/* Results Card (Col 5) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-[#5916EC]/30 bg-gradient-to-b from-slate-950 to-slate-900 p-6 space-y-5 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                Proyección de Liquidez
              </span>
              <p className="text-sm font-semibold text-slate-200">
                Disponibilidad Inmediata para tu Negocio
              </p>
            </div>

            {/* Big Money Callout */}
            <div>
              <p className="text-xs text-slate-400">
                {selectedProduct === 'trade_finance' ? 'Financiamiento al Proveedor:' : 'Desembolso Inmediato Estimado (24h-48h):'}
              </p>
              <div className="mt-1 text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formatMoney(immediateLiquidity)}
              </div>
              <p className="mt-1 text-[11px] text-purple-300">
                Correspondiente al {Math.round(advanceRate * 100)}% del valor total presentado.
              </p>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 border-t border-slate-800 pt-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Valor Total Documento:</span>
                <span className="font-mono text-slate-200">{formatMoney(invoiceAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Reserva de Liquidación:</span>
                <span className="font-mono text-slate-200">{formatMoney(reserveAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Impacto en Balance:</span>
                <span className="font-semibold text-purple-300">0% Deuda Financiera</span>
              </div>
            </div>

            {/* Action CTA in Corporate Purple */}
            <button
              onClick={() => onApplyForFinancing(invoiceAmount, termDays, selectedProduct)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5916EC] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#5916EC]/25 transition hover:bg-[#6E2EF2] active:scale-95"
            >
              <span>Solicitar Estructuración con FINAMCO</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
