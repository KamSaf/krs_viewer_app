export type Company = {
  id: number;
  name: string;
  address: string;
  krs: string;
  create_date?: Date;
};

export type Report = {
  id: number;
  companyId: number;
  dateFrom: string | Date;
  dateTo: string | Date;
  status: "stonks" | "no stonks";
  create_date?: Date;
};
