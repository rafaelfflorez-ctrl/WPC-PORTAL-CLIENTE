export type ServicePillar = 'abastecimiento' | 'tecnologia';

export interface QuoteFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: 'abastecimiento' | 'mejora_tecnologica' | 'factoring_finamco' | 'integral';
  originMarket: 'china' | 'panama' | 'ambos' | 'no_aplica';
  estimatedBudget: string;
  notes: string;
}

export interface FactoringCalculation {
  invoiceAmount: number;
  paymentTermDays: number;
  immediateLiquidity: number;
  reserveRetention: number;
  estimatedDaysToDisbursement: number;
}
