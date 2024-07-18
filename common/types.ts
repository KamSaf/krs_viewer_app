export type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
};

export type Report = {
  id: number;
  companyId: number;
  dateFrom: string | Date;
  dateTo: string | Date;
  status: string;
};
