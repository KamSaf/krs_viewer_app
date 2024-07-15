export type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
};

export type Report = {
  id: number;
  companyId: number;
  dateFrom: string;
  dateTo: string;
  status: string;
};
