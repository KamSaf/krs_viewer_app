export type SmallUnitReport = {
  JednostkaMala: {
    Naglowek: Record<string, unknown>;
    WprowadzenieDoSprawozdaniaFinansowegoJednostkaMala: Record<string, unknown>;
    BilansJednostkaMala: Record<string, unknown>;
    RZiSJednostkaMala: Record<string, unknown>;
    DodatkoweInformacjeIObjasnieniaJednostkaMala: Record<string, unknown>;
  };
};

export type OtherUnitReport = {
  JednostkaInna: {
    Naglowek: Record<string, unknown>;
    WprowadzenieDoSprawozdaniaFinansowego: Record<string, unknown>;
    Bilans: Record<string, unknown>;
    RZiS: Record<string, unknown>;
    DodatkoweInformacjeIObjasnieniaJednostkaInna: Record<string, unknown>;
    Signature: unknown[];
  };
};
