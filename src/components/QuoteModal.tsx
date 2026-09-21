import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, Mail, Phone, ShieldCheck } from 'lucide-react';
import { QuoteFormData } from '../types.ts';
import { WPCLogo } from './WPCLogo.tsx';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: 'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco' | 'integral';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'abastecimiento',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: defaultService,
    originMarket: 'china',
    estimatedBudget: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendDirectEmail = () => {
    const subject = encodeURIComponent(`Cotización Express - ${formData.companyName || 'Empresa'}`);
    const body = encodeURIComponent(
      `Hola World Parts Company S.A.S.,\n\n` +
      `Solicito cotización con los siguientes datos:\n` +
      `Empresa: ${formData.companyName}\n` +
      `Contacto: ${formData.contactName}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Servicio: ${formData.serviceType}\n` +
      `Origen: ${formData.originMarket}\n` +
      `Presupuesto: ${formData.estimatedBudget}\n` +
      `Requerimiento: ${formData.notes}\n\n` +
      `Sede principal: Cartagena de Indias, Colombia.`
    );
    window.location.href = `mailto:logisticawpc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <WPCLogo className="h-9 w-10" showText={false} variant="dark" />
          <div>
            <h3 className="text-lg font-bold text-white">Cotizar Operación de Comercio Exterior</h3>
            <p className="text-xs text-slate-400">World Parts Company S.A.S. • Cartagena de Indias</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300">
              <CheckCircle2 className="h-6 w-6 text-[#5916EC]" />
            </div>
            <h4 className="text-base font-bold text-white">Solicitud Recibida Correctamente</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Analizaremos tu requerimiento para coordinar cotización de flete, inspección en origen o estructuración con FINAMCO.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleSendDirectEmail}
                className="rounded-lg bg-[#5916EC] px-4 py-2 text-xs font-bold text-white hover:bg-[#6E2EF2] transition"
              >
                Confirmar vía Email
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Empresa *</label>
                <input
                  type="text"
                  required
                  placeholder="Razón Social"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Persona de Contacto *</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  placeholder="email@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Teléfono / Celular *</label>
                <input
                  type="tel"
                  required
                  placeholder="+57 300..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Servicio Requerido</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceType: e.target.value as QuoteFormData['serviceType'],
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-[#5916EC] focus:outline-none"
                >
                  <option value="abastecimiento">Abastecimiento de Mercancía</option>
                  <option value="mejora_tecnologica">Mejora Tecnológica / Maquinaria</option>
                  <option value="factoring_finamco">Factoring con Finamco</option>
                  <option value="integral">Operación Integral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Mercado de Origen</label>
                <select
                  value={formData.originMarket}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      originMarket: e.target.value as QuoteFormData['originMarket'],
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-[#5916EC] focus:outline-none"
                >
                  <option value="china">China (Manufactura y Maquinaria)</option>
                  <option value="panama">Panamá (Hub Logístico)</option>
                  <option value="ambos">Ambos (China y Panamá)</option>
                  <option value="no_aplica">Sólo Factoring</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300">Breve descripción</label>
              <textarea
                rows={2}
                placeholder="Tipo de carga, especificaciones o detalles de facturas..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#5916EC] py-2.5 text-xs font-bold text-white hover:bg-[#6E2EF2] transition shadow-md shadow-[#5916EC]/25"
              >
                Enviar Solicitud de Cotización
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
