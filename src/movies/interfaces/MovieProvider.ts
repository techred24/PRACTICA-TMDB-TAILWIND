export interface MovieProviders {
    id:      number;
    results: Results;
}

export interface Results {
    AE: AE;
    AR: AE;
    AU: Au;
    BO: AE;
    BR: Au;
    BZ: AE;
    CA: Au;
    CL: AE;
    CO: AE;
    CR: AE;
    EC: AE;
    EG: AE;
    GT: AE;
    HK: Au;
    HN: AE;
    ID: Au;
    IN: Au;
    KR: Au;
    MX: Au;
    MY: Au;
    NI: AE;
    NZ: Au;
    PE: AE;
    PY: AE;
    SA: AE;
    SG: Au;
    TH: Au;
    US: Au;
    VE: AE;
}

export interface AE {
    link: string;
    buy:  Buy[];
}

export interface Buy {
    logo_path:        string;
    provider_id:      number;
    provider_name:    string;
    display_priority: number;
}

export interface Au {
    link:      string;
    buy:       Buy[];
    rent:      Buy[];
    flatrate?: Buy[];
}
