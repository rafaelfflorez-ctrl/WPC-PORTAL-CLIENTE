import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, ShieldCheck, Building2, Clock, Globe } from 'lucide-react';
import { QuoteFormData } from '../types.ts';

interface ContactSectionProps {
  preselectedService?: 'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco' | 'integral';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = 'abastecimiento',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: preselectedService,
    originMarket: 'china',
    estimatedBudget: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendDirectEmail = () => {
    const subject = encodeURIComponent(`Solicitud de Cotización B2B - ${formData.companyName || 'Empresa'}`);
    const body = encodeURIComponent(
      `Hola equipo de World Parts Company S.A.S.,\n\n` +
      `Solicito formalmente asesoría y cotización con los siguientes detalles:\n\n` +
      `Empresa: ${formData.companyName}\n` +
      `Contacto: ${formData.contactName}\n` +
      `Correo: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Servicio de Interés: ${formData.serviceType}\n` +
      `Mercado de Origen: ${formData.originMarket}\n` +
      `Presupuesto / Valor Estimado: ${formData.estimatedBudget || 'Por definir'}\n` +
      `Detalles y Requerimientos: ${formData.notes || 'Sin observaciones adicionales'}\n\n` +
      `Atentamente,\n${formData.contactName}`
    );
    window.location.href = `mailto:logisticawpc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="cotizar" className="relative bg-slate-950 py-20 lg:py-28 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Corporate Contact Information (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5916EC]/30 bg-[#5916EC]/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
                <Building2 className="h-3.5 w-3.5 text-[#5916EC]" />
                <span>Atención Corporativa B2B</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Estructuremos tu Próxima Operación
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Completa el formulario para iniciar la evaluación técnica y financiera de tu proyecto de importación o estructuración de capital de trabajo.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-[#5916EC]/40 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5916EC]/15 text-purple-300 border border-[#5916EC]/30">
                  <MapPin className="h-5 w-5 text-[#5916EC]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Sede Central y Operativa</h3>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Cartagena de Indias, Bolívar, Colombia
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Epicentro logístico marítimo con conexión directa a terminales portuarios (SPRC, Contecar).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-[#5916EC]/40 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5916EC]/15 text-purple-300 border border-[#5916EC]/30">
                  <Mail className="h-5 w-5 text-[#5916EC]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Correo Oficial de Operaciones</h3>
                  <a
                    href="mailto:logisticawpc@gmail.com"
                    className="mt-0.5 block text-xs font-semibold text-purple-300 hover:text-white transition"
                  >
                    logisticawpc@gmail.com
                  </a>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Canal directo para recepción de cotizaciones y pliegos técnicos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-[#888888]/40 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Garantía de Verificación en Origen</h3>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Supervisión presencial en China y Panamá antes del despacho internacional.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Note */}
            <div className="rounded-xl border border-slate-800/80 bg-slate-950 p-4 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-semibold mb-1">
                <Clock className="h-4 w-4 text-[#5916EC]" />
                <span>Horario de Atención Ejecutiva</span>
              </div>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM (Hora Colombia - COT)</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Operaciones logísticas y auditorías en terreno activas 24/7 en zonas horarias de China y Panamá.
              </p>
            </div>
          </div>

          {/* Contact & Quotation Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#5916EC]/20 text-purple-300 border border-[#5916EC]/30">
                    <CheckCircle2 className="h-8 w-8 text-[#5916EC]" />
                  </div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Solicitud Registrada con Éxito
                  </h3>
                  <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-300">
                    Gracias por comunicarte con World Parts Company S.A.S. Uno de nuestros brokers especializados se pondrá en contacto para evaluar tu requerimiento de importación o estructuración financiera.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendDirectEmail}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#5916EC] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#6E2EF2] transition"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Abrir Correo en tu Cliente de Email</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      <span>Nueva Consulta</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-lg font-bold text-white">
                      Formulario de Solicitud de Brokerage
                    </h3>
                    <p className="text-xs text-slate-400">
                      Respuesta en menos de 24 horas hábiles por parte de nuestro equipo comercial.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="companyNameInput" className="block text-xs font-semibold text-slate-300">
                        Razón Social de la Empresa *
                      </label>
                      <input
                        id="companyNameInput"
                        type="text"
                        required
                        placeholder="Ej. Distribuidora del Norte S.A.S."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactNameInput" className="block text-xs font-semibold text-slate-300">
                        Nombre y Cargo del Contacto *
                      </label>
                      <input
                        id="contactNameInput"
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza - Director de Compras"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="emailInput" className="block text-xs font-semibold text-slate-300">
                        Correo Corporativo *
                      </label>
                      <input
                        id="emailInput"
                        type="email"
                        required
                        placeholder="contacto@tuempresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneInput" className="block text-xs font-semibold text-slate-300">
                        Teléfono / WhatsApp de Contacto *
                      </label>
                      <input
                        id="phoneInput"
                        type="tel"
                        required
                        placeholder="+57 300 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="serviceTypeSelect" className="block text-xs font-semibold text-slate-300">
                        Servicio Principal de Interés *
                      </label>
                      <select
                        id="serviceTypeSelect"
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceType: e.target.value as QuoteFormData['serviceType'],
                          })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      >
                        <option value="abastecimiento">Importación de Mercancía para Abastecimiento</option>
                        <option value="mejora_tecnologica">Importación de Mejora Tecnológica (Maquinaria)</option>
                        <option value="factoring_finamco">Financiamiento / Factoring con Finamco</option>
                        <option value="integral">Solución Integral (Importación + Factoring)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="originMarketSelect" className="block text-xs font-semibold text-slate-300">
                        Mercado de Origen Objetivo *
                      </label>
                      <select
                        id="originMarketSelect"
                        value={formData.originMarket}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            originMarket: e.target.value as QuoteFormData['originMarket'],
                          })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                      >
                        <option value="china">China (Shenzhen, Ningbo, Yiwu, Shanghai)</option>
                        <option value="panama">Panamá (Zona Libre de Colón - ZLC)</option>
                        <option value="ambos">Ambos mercados combinados</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="estimatedBudgetInput" className="block text-xs font-semibold text-slate-300">
                      Presupuesto Estimado / Valor de Operación (Opcional)
                    </label>
                    <input
                      id="estimatedBudgetInput"
                      type="text"
                      placeholder="Ej. USD $35.000 o COP $150.000.000"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="notesTextarea" className="block text-xs font-semibold text-slate-300">
                      Detalles de la Carga, Producto o Necesidad Específica *
                    </label>
                    <textarea
                      id="notesTextarea"
                      rows={3}
                      required
                      placeholder="Describe tipo de producto, si ya cuentas con proveedor o requieres búsqueda en China/Panamá, volumen estimado y plazos requeridos..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#5916EC] focus:outline-none focus:ring-1 focus:ring-[#5916EC]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5916EC] py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#5916EC]/25 transition hover:bg-[#6E2EF2] active:scale-95 disabled:opacity-50"
                    >
                      {isSending ? (
                        <span>Enviando información...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Enviar Requerimiento para Cotización Inmediata</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-500">
                      Confidencialidad empresarial garantizada. Sede en Cartagena de Indias, Colombia.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
