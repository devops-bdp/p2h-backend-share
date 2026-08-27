export declare const Role: {
    readonly SUPERADMIN: 'SUPERADMIN';
    readonly ADMIN: 'ADMIN';
    readonly USER: 'USER';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Posision: {
    readonly SITE_MANAGER: 'SITE_MANAGER';
    readonly SITE_SUPERVISOR: 'SITE_SUPERVISOR';
    readonly SITE_SUPERINTENDENT: 'SITE_SUPERINTENDENT';
    readonly OPERATOR: 'OPERATOR';
    readonly MECHANIC: 'MECHANIC';
    readonly ELECTRICIAN: 'ELECTRICIAN';
    readonly TYREMAN: 'TYREMAN';
    readonly DRIVER: 'DRIVER';
    readonly ADMIN: 'ADMIN';
};
export type Posision = (typeof Posision)[keyof typeof Posision];
export declare const Department: {
    readonly PRODUCTION_AND_ENGINEERING: 'PRODUCTION_AND_ENGINEERING';
    readonly PLANT: 'PLANT';
    readonly LOGISTIC: 'LOGISTIC';
    readonly HSE: 'HSE';
    readonly HRGA: 'HRGA';
};
export type Department = (typeof Department)[keyof typeof Department];
//# sourceMappingURL=enums.d.ts.map