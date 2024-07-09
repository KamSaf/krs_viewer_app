type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
};

type Report = {
  id: number;
  companyId: number;
  dateFrom: string;
  dateTo: string;
  status: string;
};

export type { Company, Report };
