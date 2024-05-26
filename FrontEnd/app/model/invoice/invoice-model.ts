export interface EnergyDetails {
  quantityEnergy?: string;
  priceEnergy?: string;
  unityTariffEnergy?: string;

  amountOfEnergyInject?: string;
  priceOfEnergyInject?: string;
  unityTariffOfEnergyInject?: string;
}

export interface IcmsDetails {
  amountIcms?: string;
  priceIcms?: string;
  unityIcms?: string;
}

export interface GdiDetails {
  amountGDI?: string;
  priceGDI?: string;
  unityGDI?: string;
}

export interface InvoiceEnergia {
  name: string;
  kwhgdi: number;
  kwhenergia: number;
  kwhenergejetada: number;
  kwhenergiaICMS: number;
}

export interface InvoiceUsers {
  clientNumber: string;
  instaltionNumber: string;
  energyRecent: string;
  priceRecent: string;
  totalEnergy: number;
  totalPrice: number;
}
export interface MonetaryValues {
  name: string;
  gdiPrice: number;
  eenergyPrice: number;
  energyEjetadaPrice: number;
  energyICMSPrice: number;
}

export interface InvoiceModel {
  props: {
    id: string;
    userId: string;
    installationNumber: string;
    monthReferring: string;
    expirationDate: string;
    amountToBePaid: string;
    publicContribution: string;
    path: string;

    energyDetails?: EnergyDetails;
    icmsDetails?: IcmsDetails;
    gdiDetails?: GdiDetails;
  };
}
