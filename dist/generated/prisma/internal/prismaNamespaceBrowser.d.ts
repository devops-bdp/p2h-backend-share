import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Unit: 'Unit';
    readonly P2HInspection: 'P2HInspection';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly nrp: 'nrp';
    readonly password: 'password';
    readonly department: 'department';
    readonly posision: 'posision';
    readonly phoneNumber: 'phoneNumber';
    readonly email: 'email';
    readonly role: 'role';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UnitScalarFieldEnum: {
    readonly id: 'id';
    readonly unitNo: 'unitNo';
    readonly category: 'category';
    readonly brand: 'brand';
    readonly description: 'description';
    readonly ownerName: 'ownerName';
    readonly km: 'km';
    readonly hourMeter: 'hourMeter';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum];
export declare const P2HInspectionScalarFieldEnum: {
    readonly id: 'id';
    readonly p2hNo: 'p2hNo';
    readonly unitId: 'unitId';
    readonly userId: 'userId';
    readonly driverName: 'driverName';
    readonly driverNrp: 'driverNrp';
    readonly nopol: 'nopol';
    readonly section: 'section';
    readonly workSystem: 'workSystem';
    readonly shift: 'shift';
    readonly date: 'date';
    readonly km: 'km';
    readonly hourMeter: 'hourMeter';
    readonly damageChecks: 'damageChecks';
    readonly tyreCheck: 'tyreCheck';
    readonly safetyTools: 'safetyTools';
    readonly fitToWork: 'fitToWork';
    readonly warningDetails: 'warningDetails';
    readonly driverValidation: 'driverValidation';
    readonly unitStatus: 'unitStatus';
    readonly driverStatus: 'driverStatus';
    readonly supervisorNotes: 'supervisorNotes';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type P2HInspectionScalarFieldEnum = (typeof P2HInspectionScalarFieldEnum)[keyof typeof P2HInspectionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map