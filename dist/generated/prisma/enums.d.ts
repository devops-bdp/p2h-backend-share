export declare const Role: {
    readonly SUPERADMIN: 'SUPERADMIN';
    readonly ADMIN: 'ADMIN';
    readonly USER: 'USER';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SupportVehicleCategory: {
    readonly TELEHENDLER: 'TELEHENDLER';
    readonly STORING_TRUCK: 'STORING_TRUCK';
    readonly AMBULANCE: 'AMBULANCE';
    readonly MOBILE_CRANE: 'MOBILE_CRANE';
    readonly CRANE_TRUCK: 'CRANE_TRUCK';
    readonly LIGHT_VECHICLE: 'LIGHT_VECHICLE';
    readonly FUEL_TRUCK: 'FUEL_TRUCK';
    readonly COMPRESSOR: 'COMPRESSOR';
    readonly COMPACTOR: 'COMPACTOR';
    readonly DOZER: 'DOZER';
    readonly EXCAVATOR: 'EXCAVATOR';
    readonly GENSET: 'GENSET';
};
export type SupportVehicleCategory = (typeof SupportVehicleCategory)[keyof typeof SupportVehicleCategory];
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
    readonly OPERATIONS: 'OPERATIONS';
    readonly PRODUCTION_AND_ENGINEERING: 'PRODUCTION_AND_ENGINEERING';
    readonly PLANT: 'PLANT';
    readonly LOGISTIC: 'LOGISTIC';
    readonly HSE: 'HSE';
    readonly HRGA: 'HRGA';
};
export type Department = (typeof Department)[keyof typeof Department];
export declare const Status: {
    readonly ACTIVE: 'ACTIVE';
    readonly INACTIVE: 'INACTIVE';
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const Shift: {
    readonly PAGI: 'PAGI';
    readonly SIANG: 'SIANG';
    readonly MALAM: 'MALAM';
};
export type Shift = (typeof Shift)[keyof typeof Shift];
export declare const P2HUnitStatus: {
    readonly LAYAK: 'LAYAK';
    readonly TIDAK_LAYAK: 'TIDAK_LAYAK';
    readonly SIAP: 'SIAP';
    readonly TIDAK_SIAP: 'TIDAK_SIAP';
};
export type P2HUnitStatus = (typeof P2HUnitStatus)[keyof typeof P2HUnitStatus];
export declare const P2HDriverStatus: {
    readonly LAYAK: 'LAYAK';
    readonly TIDAK_LAYAK: 'TIDAK_LAYAK';
    readonly SIAP: 'SIAP';
    readonly TIDAK_SIAP: 'TIDAK_SIAP';
};
export type P2HDriverStatus = (typeof P2HDriverStatus)[keyof typeof P2HDriverStatus];
//# sourceMappingURL=enums.d.ts.map