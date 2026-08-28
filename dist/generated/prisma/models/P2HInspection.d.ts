import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model P2HInspection
 *
 */
export type P2HInspectionModel = runtime.Types.Result.DefaultSelection<Prisma.$P2HInspectionPayload>;
export type AggregateP2HInspection = {
    _count: P2HInspectionCountAggregateOutputType | null;
    _avg: P2HInspectionAvgAggregateOutputType | null;
    _sum: P2HInspectionSumAggregateOutputType | null;
    _min: P2HInspectionMinAggregateOutputType | null;
    _max: P2HInspectionMaxAggregateOutputType | null;
};
export type P2HInspectionAvgAggregateOutputType = {
    id: number | null;
    unitId: number | null;
    userId: number | null;
    driverNrp: number | null;
    km: number | null;
    hourMeter: number | null;
};
export type P2HInspectionSumAggregateOutputType = {
    id: number | null;
    unitId: number | null;
    userId: number | null;
    driverNrp: number | null;
    km: number | null;
    hourMeter: number | null;
};
export type P2HInspectionMinAggregateOutputType = {
    id: number | null;
    p2hNo: string | null;
    unitId: number | null;
    userId: number | null;
    driverName: string | null;
    driverNrp: number | null;
    nopol: string | null;
    section: string | null;
    shift: $Enums.Shift | null;
    date: Date | null;
    km: number | null;
    hourMeter: number | null;
    driverValidation: boolean | null;
    unitStatus: $Enums.P2HUnitStatus | null;
    driverStatus: $Enums.P2HDriverStatus | null;
    supervisorNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type P2HInspectionMaxAggregateOutputType = {
    id: number | null;
    p2hNo: string | null;
    unitId: number | null;
    userId: number | null;
    driverName: string | null;
    driverNrp: number | null;
    nopol: string | null;
    section: string | null;
    shift: $Enums.Shift | null;
    date: Date | null;
    km: number | null;
    hourMeter: number | null;
    driverValidation: boolean | null;
    unitStatus: $Enums.P2HUnitStatus | null;
    driverStatus: $Enums.P2HDriverStatus | null;
    supervisorNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type P2HInspectionCountAggregateOutputType = {
    id: number;
    p2hNo: number;
    unitId: number;
    userId: number;
    driverName: number;
    driverNrp: number;
    nopol: number;
    section: number;
    workSystem: number;
    shift: number;
    date: number;
    km: number;
    hourMeter: number;
    damageChecks: number;
    tyreCheck: number;
    safetyTools: number;
    fitToWork: number;
    warningDetails: number;
    driverValidation: number;
    unitStatus: number;
    driverStatus: number;
    supervisorNotes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type P2HInspectionAvgAggregateInputType = {
    id?: true;
    unitId?: true;
    userId?: true;
    driverNrp?: true;
    km?: true;
    hourMeter?: true;
};
export type P2HInspectionSumAggregateInputType = {
    id?: true;
    unitId?: true;
    userId?: true;
    driverNrp?: true;
    km?: true;
    hourMeter?: true;
};
export type P2HInspectionMinAggregateInputType = {
    id?: true;
    p2hNo?: true;
    unitId?: true;
    userId?: true;
    driverName?: true;
    driverNrp?: true;
    nopol?: true;
    section?: true;
    shift?: true;
    date?: true;
    km?: true;
    hourMeter?: true;
    driverValidation?: true;
    unitStatus?: true;
    driverStatus?: true;
    supervisorNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type P2HInspectionMaxAggregateInputType = {
    id?: true;
    p2hNo?: true;
    unitId?: true;
    userId?: true;
    driverName?: true;
    driverNrp?: true;
    nopol?: true;
    section?: true;
    shift?: true;
    date?: true;
    km?: true;
    hourMeter?: true;
    driverValidation?: true;
    unitStatus?: true;
    driverStatus?: true;
    supervisorNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type P2HInspectionCountAggregateInputType = {
    id?: true;
    p2hNo?: true;
    unitId?: true;
    userId?: true;
    driverName?: true;
    driverNrp?: true;
    nopol?: true;
    section?: true;
    workSystem?: true;
    shift?: true;
    date?: true;
    km?: true;
    hourMeter?: true;
    damageChecks?: true;
    tyreCheck?: true;
    safetyTools?: true;
    fitToWork?: true;
    warningDetails?: true;
    driverValidation?: true;
    unitStatus?: true;
    driverStatus?: true;
    supervisorNotes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type P2HInspectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which P2HInspection to aggregate.
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of P2HInspections to fetch.
     */
    orderBy?: Prisma.P2HInspectionOrderByWithRelationInput | Prisma.P2HInspectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.P2HInspectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` P2HInspections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` P2HInspections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned P2HInspections
    **/
    _count?: true | P2HInspectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: P2HInspectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: P2HInspectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: P2HInspectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: P2HInspectionMaxAggregateInputType;
};
export type GetP2HInspectionAggregateType<T extends P2HInspectionAggregateArgs> = {
    [P in keyof T & keyof AggregateP2HInspection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateP2HInspection[P]> : Prisma.GetScalarType<T[P], AggregateP2HInspection[P]>;
};
export type P2HInspectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.P2HInspectionWhereInput;
    orderBy?: Prisma.P2HInspectionOrderByWithAggregationInput | Prisma.P2HInspectionOrderByWithAggregationInput[];
    by: Prisma.P2HInspectionScalarFieldEnum[] | Prisma.P2HInspectionScalarFieldEnum;
    having?: Prisma.P2HInspectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: P2HInspectionCountAggregateInputType | true;
    _avg?: P2HInspectionAvgAggregateInputType;
    _sum?: P2HInspectionSumAggregateInputType;
    _min?: P2HInspectionMinAggregateInputType;
    _max?: P2HInspectionMaxAggregateInputType;
};
export type P2HInspectionGroupByOutputType = {
    id: number;
    p2hNo: string;
    unitId: number;
    userId: number;
    driverName: string | null;
    driverNrp: number | null;
    nopol: string | null;
    section: string | null;
    workSystem: runtime.JsonValue | null;
    shift: $Enums.Shift;
    date: Date;
    km: number;
    hourMeter: number | null;
    damageChecks: runtime.JsonValue;
    tyreCheck: runtime.JsonValue;
    safetyTools: runtime.JsonValue;
    fitToWork: runtime.JsonValue;
    warningDetails: runtime.JsonValue | null;
    driverValidation: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: P2HInspectionCountAggregateOutputType | null;
    _avg: P2HInspectionAvgAggregateOutputType | null;
    _sum: P2HInspectionSumAggregateOutputType | null;
    _min: P2HInspectionMinAggregateOutputType | null;
    _max: P2HInspectionMaxAggregateOutputType | null;
};
export type GetP2HInspectionGroupByPayload<T extends P2HInspectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<P2HInspectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof P2HInspectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], P2HInspectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], P2HInspectionGroupByOutputType[P]>;
}>>;
export type P2HInspectionWhereInput = {
    AND?: Prisma.P2HInspectionWhereInput | Prisma.P2HInspectionWhereInput[];
    OR?: Prisma.P2HInspectionWhereInput[];
    NOT?: Prisma.P2HInspectionWhereInput | Prisma.P2HInspectionWhereInput[];
    id?: Prisma.IntFilter<"P2HInspection"> | number;
    p2hNo?: Prisma.StringFilter<"P2HInspection"> | string;
    unitId?: Prisma.IntFilter<"P2HInspection"> | number;
    userId?: Prisma.IntFilter<"P2HInspection"> | number;
    driverName?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    driverNrp?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    nopol?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    section?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    workSystem?: Prisma.JsonNullableFilter<"P2HInspection">;
    shift?: Prisma.EnumShiftFilter<"P2HInspection"> | $Enums.Shift;
    date?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    km?: Prisma.IntFilter<"P2HInspection"> | number;
    hourMeter?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    damageChecks?: Prisma.JsonFilter<"P2HInspection">;
    tyreCheck?: Prisma.JsonFilter<"P2HInspection">;
    safetyTools?: Prisma.JsonFilter<"P2HInspection">;
    fitToWork?: Prisma.JsonFilter<"P2HInspection">;
    warningDetails?: Prisma.JsonNullableFilter<"P2HInspection">;
    driverValidation?: Prisma.BoolFilter<"P2HInspection"> | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFilter<"P2HInspection"> | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFilter<"P2HInspection"> | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    unit?: Prisma.XOR<Prisma.UnitScalarRelationFilter, Prisma.UnitWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type P2HInspectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    p2hNo?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverName?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverNrp?: Prisma.SortOrderInput | Prisma.SortOrder;
    nopol?: Prisma.SortOrderInput | Prisma.SortOrder;
    section?: Prisma.SortOrderInput | Prisma.SortOrder;
    workSystem?: Prisma.SortOrderInput | Prisma.SortOrder;
    shift?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrderInput | Prisma.SortOrder;
    damageChecks?: Prisma.SortOrder;
    tyreCheck?: Prisma.SortOrder;
    safetyTools?: Prisma.SortOrder;
    fitToWork?: Prisma.SortOrder;
    warningDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverValidation?: Prisma.SortOrder;
    unitStatus?: Prisma.SortOrder;
    driverStatus?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    unit?: Prisma.UnitOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type P2HInspectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    p2hNo?: string;
    AND?: Prisma.P2HInspectionWhereInput | Prisma.P2HInspectionWhereInput[];
    OR?: Prisma.P2HInspectionWhereInput[];
    NOT?: Prisma.P2HInspectionWhereInput | Prisma.P2HInspectionWhereInput[];
    unitId?: Prisma.IntFilter<"P2HInspection"> | number;
    userId?: Prisma.IntFilter<"P2HInspection"> | number;
    driverName?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    driverNrp?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    nopol?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    section?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    workSystem?: Prisma.JsonNullableFilter<"P2HInspection">;
    shift?: Prisma.EnumShiftFilter<"P2HInspection"> | $Enums.Shift;
    date?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    km?: Prisma.IntFilter<"P2HInspection"> | number;
    hourMeter?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    damageChecks?: Prisma.JsonFilter<"P2HInspection">;
    tyreCheck?: Prisma.JsonFilter<"P2HInspection">;
    safetyTools?: Prisma.JsonFilter<"P2HInspection">;
    fitToWork?: Prisma.JsonFilter<"P2HInspection">;
    warningDetails?: Prisma.JsonNullableFilter<"P2HInspection">;
    driverValidation?: Prisma.BoolFilter<"P2HInspection"> | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFilter<"P2HInspection"> | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFilter<"P2HInspection"> | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    unit?: Prisma.XOR<Prisma.UnitScalarRelationFilter, Prisma.UnitWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "p2hNo">;
export type P2HInspectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    p2hNo?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverName?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverNrp?: Prisma.SortOrderInput | Prisma.SortOrder;
    nopol?: Prisma.SortOrderInput | Prisma.SortOrder;
    section?: Prisma.SortOrderInput | Prisma.SortOrder;
    workSystem?: Prisma.SortOrderInput | Prisma.SortOrder;
    shift?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrderInput | Prisma.SortOrder;
    damageChecks?: Prisma.SortOrder;
    tyreCheck?: Prisma.SortOrder;
    safetyTools?: Prisma.SortOrder;
    fitToWork?: Prisma.SortOrder;
    warningDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverValidation?: Prisma.SortOrder;
    unitStatus?: Prisma.SortOrder;
    driverStatus?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.P2HInspectionCountOrderByAggregateInput;
    _avg?: Prisma.P2HInspectionAvgOrderByAggregateInput;
    _max?: Prisma.P2HInspectionMaxOrderByAggregateInput;
    _min?: Prisma.P2HInspectionMinOrderByAggregateInput;
    _sum?: Prisma.P2HInspectionSumOrderByAggregateInput;
};
export type P2HInspectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.P2HInspectionScalarWhereWithAggregatesInput | Prisma.P2HInspectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.P2HInspectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.P2HInspectionScalarWhereWithAggregatesInput | Prisma.P2HInspectionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"P2HInspection"> | number;
    p2hNo?: Prisma.StringWithAggregatesFilter<"P2HInspection"> | string;
    unitId?: Prisma.IntWithAggregatesFilter<"P2HInspection"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"P2HInspection"> | number;
    driverName?: Prisma.StringNullableWithAggregatesFilter<"P2HInspection"> | string | null;
    driverNrp?: Prisma.IntNullableWithAggregatesFilter<"P2HInspection"> | number | null;
    nopol?: Prisma.StringNullableWithAggregatesFilter<"P2HInspection"> | string | null;
    section?: Prisma.StringNullableWithAggregatesFilter<"P2HInspection"> | string | null;
    workSystem?: Prisma.JsonNullableWithAggregatesFilter<"P2HInspection">;
    shift?: Prisma.EnumShiftWithAggregatesFilter<"P2HInspection"> | $Enums.Shift;
    date?: Prisma.DateTimeWithAggregatesFilter<"P2HInspection"> | Date | string;
    km?: Prisma.IntWithAggregatesFilter<"P2HInspection"> | number;
    hourMeter?: Prisma.IntNullableWithAggregatesFilter<"P2HInspection"> | number | null;
    damageChecks?: Prisma.JsonWithAggregatesFilter<"P2HInspection">;
    tyreCheck?: Prisma.JsonWithAggregatesFilter<"P2HInspection">;
    safetyTools?: Prisma.JsonWithAggregatesFilter<"P2HInspection">;
    fitToWork?: Prisma.JsonWithAggregatesFilter<"P2HInspection">;
    warningDetails?: Prisma.JsonNullableWithAggregatesFilter<"P2HInspection">;
    driverValidation?: Prisma.BoolWithAggregatesFilter<"P2HInspection"> | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusWithAggregatesFilter<"P2HInspection"> | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusWithAggregatesFilter<"P2HInspection"> | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.StringNullableWithAggregatesFilter<"P2HInspection"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"P2HInspection"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"P2HInspection"> | Date | string;
};
export type P2HInspectionCreateInput = {
    p2hNo: string;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    unit: Prisma.UnitCreateNestedOneWithoutP2hInspectionsInput;
    user: Prisma.UserCreateNestedOneWithoutP2hInspectionsInput;
};
export type P2HInspectionUncheckedCreateInput = {
    id?: number;
    p2hNo: string;
    unitId: number;
    userId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionUpdateInput = {
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit?: Prisma.UnitUpdateOneRequiredWithoutP2hInspectionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutP2hInspectionsNestedInput;
};
export type P2HInspectionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    unitId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionCreateManyInput = {
    id?: number;
    p2hNo: string;
    unitId: number;
    userId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionUpdateManyMutationInput = {
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    unitId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionListRelationFilter = {
    every?: Prisma.P2HInspectionWhereInput;
    some?: Prisma.P2HInspectionWhereInput;
    none?: Prisma.P2HInspectionWhereInput;
};
export type P2HInspectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type P2HInspectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    p2hNo?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverNrp?: Prisma.SortOrder;
    nopol?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    workSystem?: Prisma.SortOrder;
    shift?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrder;
    damageChecks?: Prisma.SortOrder;
    tyreCheck?: Prisma.SortOrder;
    safetyTools?: Prisma.SortOrder;
    fitToWork?: Prisma.SortOrder;
    warningDetails?: Prisma.SortOrder;
    driverValidation?: Prisma.SortOrder;
    unitStatus?: Prisma.SortOrder;
    driverStatus?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type P2HInspectionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverNrp?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrder;
};
export type P2HInspectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    p2hNo?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverNrp?: Prisma.SortOrder;
    nopol?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    shift?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrder;
    driverValidation?: Prisma.SortOrder;
    unitStatus?: Prisma.SortOrder;
    driverStatus?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type P2HInspectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    p2hNo?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverNrp?: Prisma.SortOrder;
    nopol?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    shift?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrder;
    driverValidation?: Prisma.SortOrder;
    unitStatus?: Prisma.SortOrder;
    driverStatus?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type P2HInspectionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    driverNrp?: Prisma.SortOrder;
    km?: Prisma.SortOrder;
    hourMeter?: Prisma.SortOrder;
};
export type P2HInspectionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput> | Prisma.P2HInspectionCreateWithoutUserInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUserInput | Prisma.P2HInspectionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.P2HInspectionCreateManyUserInputEnvelope;
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
};
export type P2HInspectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput> | Prisma.P2HInspectionCreateWithoutUserInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUserInput | Prisma.P2HInspectionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.P2HInspectionCreateManyUserInputEnvelope;
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
};
export type P2HInspectionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput> | Prisma.P2HInspectionCreateWithoutUserInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUserInput | Prisma.P2HInspectionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUserInput | Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.P2HInspectionCreateManyUserInputEnvelope;
    set?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    disconnect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    delete?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    update?: Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUserInput | Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.P2HInspectionUpdateManyWithWhereWithoutUserInput | Prisma.P2HInspectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
};
export type P2HInspectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput> | Prisma.P2HInspectionCreateWithoutUserInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUserInput | Prisma.P2HInspectionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUserInput | Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.P2HInspectionCreateManyUserInputEnvelope;
    set?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    disconnect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    delete?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    update?: Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUserInput | Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.P2HInspectionUpdateManyWithWhereWithoutUserInput | Prisma.P2HInspectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
};
export type P2HInspectionCreateNestedManyWithoutUnitInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput> | Prisma.P2HInspectionCreateWithoutUnitInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUnitInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUnitInput | Prisma.P2HInspectionCreateOrConnectWithoutUnitInput[];
    createMany?: Prisma.P2HInspectionCreateManyUnitInputEnvelope;
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
};
export type P2HInspectionUncheckedCreateNestedManyWithoutUnitInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput> | Prisma.P2HInspectionCreateWithoutUnitInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUnitInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUnitInput | Prisma.P2HInspectionCreateOrConnectWithoutUnitInput[];
    createMany?: Prisma.P2HInspectionCreateManyUnitInputEnvelope;
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
};
export type P2HInspectionUpdateManyWithoutUnitNestedInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput> | Prisma.P2HInspectionCreateWithoutUnitInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUnitInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUnitInput | Prisma.P2HInspectionCreateOrConnectWithoutUnitInput[];
    upsert?: Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUnitInput | Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUnitInput[];
    createMany?: Prisma.P2HInspectionCreateManyUnitInputEnvelope;
    set?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    disconnect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    delete?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    update?: Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUnitInput | Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUnitInput[];
    updateMany?: Prisma.P2HInspectionUpdateManyWithWhereWithoutUnitInput | Prisma.P2HInspectionUpdateManyWithWhereWithoutUnitInput[];
    deleteMany?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
};
export type P2HInspectionUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput> | Prisma.P2HInspectionCreateWithoutUnitInput[] | Prisma.P2HInspectionUncheckedCreateWithoutUnitInput[];
    connectOrCreate?: Prisma.P2HInspectionCreateOrConnectWithoutUnitInput | Prisma.P2HInspectionCreateOrConnectWithoutUnitInput[];
    upsert?: Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUnitInput | Prisma.P2HInspectionUpsertWithWhereUniqueWithoutUnitInput[];
    createMany?: Prisma.P2HInspectionCreateManyUnitInputEnvelope;
    set?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    disconnect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    delete?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    connect?: Prisma.P2HInspectionWhereUniqueInput | Prisma.P2HInspectionWhereUniqueInput[];
    update?: Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUnitInput | Prisma.P2HInspectionUpdateWithWhereUniqueWithoutUnitInput[];
    updateMany?: Prisma.P2HInspectionUpdateManyWithWhereWithoutUnitInput | Prisma.P2HInspectionUpdateManyWithWhereWithoutUnitInput[];
    deleteMany?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
};
export type EnumShiftFieldUpdateOperationsInput = {
    set?: $Enums.Shift;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumP2HUnitStatusFieldUpdateOperationsInput = {
    set?: $Enums.P2HUnitStatus;
};
export type EnumP2HDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.P2HDriverStatus;
};
export type P2HInspectionCreateWithoutUserInput = {
    p2hNo: string;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    unit: Prisma.UnitCreateNestedOneWithoutP2hInspectionsInput;
};
export type P2HInspectionUncheckedCreateWithoutUserInput = {
    id?: number;
    p2hNo: string;
    unitId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionCreateOrConnectWithoutUserInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput>;
};
export type P2HInspectionCreateManyUserInputEnvelope = {
    data: Prisma.P2HInspectionCreateManyUserInput | Prisma.P2HInspectionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type P2HInspectionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.P2HInspectionUpdateWithoutUserInput, Prisma.P2HInspectionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUserInput, Prisma.P2HInspectionUncheckedCreateWithoutUserInput>;
};
export type P2HInspectionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.P2HInspectionUpdateWithoutUserInput, Prisma.P2HInspectionUncheckedUpdateWithoutUserInput>;
};
export type P2HInspectionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.P2HInspectionScalarWhereInput;
    data: Prisma.XOR<Prisma.P2HInspectionUpdateManyMutationInput, Prisma.P2HInspectionUncheckedUpdateManyWithoutUserInput>;
};
export type P2HInspectionScalarWhereInput = {
    AND?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
    OR?: Prisma.P2HInspectionScalarWhereInput[];
    NOT?: Prisma.P2HInspectionScalarWhereInput | Prisma.P2HInspectionScalarWhereInput[];
    id?: Prisma.IntFilter<"P2HInspection"> | number;
    p2hNo?: Prisma.StringFilter<"P2HInspection"> | string;
    unitId?: Prisma.IntFilter<"P2HInspection"> | number;
    userId?: Prisma.IntFilter<"P2HInspection"> | number;
    driverName?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    driverNrp?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    nopol?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    section?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    workSystem?: Prisma.JsonNullableFilter<"P2HInspection">;
    shift?: Prisma.EnumShiftFilter<"P2HInspection"> | $Enums.Shift;
    date?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    km?: Prisma.IntFilter<"P2HInspection"> | number;
    hourMeter?: Prisma.IntNullableFilter<"P2HInspection"> | number | null;
    damageChecks?: Prisma.JsonFilter<"P2HInspection">;
    tyreCheck?: Prisma.JsonFilter<"P2HInspection">;
    safetyTools?: Prisma.JsonFilter<"P2HInspection">;
    fitToWork?: Prisma.JsonFilter<"P2HInspection">;
    warningDetails?: Prisma.JsonNullableFilter<"P2HInspection">;
    driverValidation?: Prisma.BoolFilter<"P2HInspection"> | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFilter<"P2HInspection"> | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFilter<"P2HInspection"> | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.StringNullableFilter<"P2HInspection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"P2HInspection"> | Date | string;
};
export type P2HInspectionCreateWithoutUnitInput = {
    p2hNo: string;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutP2hInspectionsInput;
};
export type P2HInspectionUncheckedCreateWithoutUnitInput = {
    id?: number;
    p2hNo: string;
    userId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionCreateOrConnectWithoutUnitInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput>;
};
export type P2HInspectionCreateManyUnitInputEnvelope = {
    data: Prisma.P2HInspectionCreateManyUnitInput | Prisma.P2HInspectionCreateManyUnitInput[];
    skipDuplicates?: boolean;
};
export type P2HInspectionUpsertWithWhereUniqueWithoutUnitInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.P2HInspectionUpdateWithoutUnitInput, Prisma.P2HInspectionUncheckedUpdateWithoutUnitInput>;
    create: Prisma.XOR<Prisma.P2HInspectionCreateWithoutUnitInput, Prisma.P2HInspectionUncheckedCreateWithoutUnitInput>;
};
export type P2HInspectionUpdateWithWhereUniqueWithoutUnitInput = {
    where: Prisma.P2HInspectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.P2HInspectionUpdateWithoutUnitInput, Prisma.P2HInspectionUncheckedUpdateWithoutUnitInput>;
};
export type P2HInspectionUpdateManyWithWhereWithoutUnitInput = {
    where: Prisma.P2HInspectionScalarWhereInput;
    data: Prisma.XOR<Prisma.P2HInspectionUpdateManyMutationInput, Prisma.P2HInspectionUncheckedUpdateManyWithoutUnitInput>;
};
export type P2HInspectionCreateManyUserInput = {
    id?: number;
    p2hNo: string;
    unitId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionUpdateWithoutUserInput = {
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit?: Prisma.UnitUpdateOneRequiredWithoutP2hInspectionsNestedInput;
};
export type P2HInspectionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    unitId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    unitId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionCreateManyUnitInput = {
    id?: number;
    p2hNo: string;
    userId: number;
    driverName?: string | null;
    driverNrp?: number | null;
    nopol?: string | null;
    section?: string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: $Enums.Shift;
    date?: Date | string;
    km: number;
    hourMeter?: number | null;
    damageChecks: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: boolean;
    unitStatus: $Enums.P2HUnitStatus;
    driverStatus: $Enums.P2HDriverStatus;
    supervisorNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type P2HInspectionUpdateWithoutUnitInput = {
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutP2hInspectionsNestedInput;
};
export type P2HInspectionUncheckedUpdateWithoutUnitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionUncheckedUpdateManyWithoutUnitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    p2hNo?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverNrp?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nopol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workSystem?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shift?: Prisma.EnumShiftFieldUpdateOperationsInput | $Enums.Shift;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    km?: Prisma.IntFieldUpdateOperationsInput | number;
    hourMeter?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    damageChecks?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tyreCheck?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    safetyTools?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fitToWork?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    warningDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    driverValidation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unitStatus?: Prisma.EnumP2HUnitStatusFieldUpdateOperationsInput | $Enums.P2HUnitStatus;
    driverStatus?: Prisma.EnumP2HDriverStatusFieldUpdateOperationsInput | $Enums.P2HDriverStatus;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type P2HInspectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    p2hNo?: boolean;
    unitId?: boolean;
    userId?: boolean;
    driverName?: boolean;
    driverNrp?: boolean;
    nopol?: boolean;
    section?: boolean;
    workSystem?: boolean;
    shift?: boolean;
    date?: boolean;
    km?: boolean;
    hourMeter?: boolean;
    damageChecks?: boolean;
    tyreCheck?: boolean;
    safetyTools?: boolean;
    fitToWork?: boolean;
    warningDetails?: boolean;
    driverValidation?: boolean;
    unitStatus?: boolean;
    driverStatus?: boolean;
    supervisorNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["p2HInspection"]>;
export type P2HInspectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    p2hNo?: boolean;
    unitId?: boolean;
    userId?: boolean;
    driverName?: boolean;
    driverNrp?: boolean;
    nopol?: boolean;
    section?: boolean;
    workSystem?: boolean;
    shift?: boolean;
    date?: boolean;
    km?: boolean;
    hourMeter?: boolean;
    damageChecks?: boolean;
    tyreCheck?: boolean;
    safetyTools?: boolean;
    fitToWork?: boolean;
    warningDetails?: boolean;
    driverValidation?: boolean;
    unitStatus?: boolean;
    driverStatus?: boolean;
    supervisorNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["p2HInspection"]>;
export type P2HInspectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    p2hNo?: boolean;
    unitId?: boolean;
    userId?: boolean;
    driverName?: boolean;
    driverNrp?: boolean;
    nopol?: boolean;
    section?: boolean;
    workSystem?: boolean;
    shift?: boolean;
    date?: boolean;
    km?: boolean;
    hourMeter?: boolean;
    damageChecks?: boolean;
    tyreCheck?: boolean;
    safetyTools?: boolean;
    fitToWork?: boolean;
    warningDetails?: boolean;
    driverValidation?: boolean;
    unitStatus?: boolean;
    driverStatus?: boolean;
    supervisorNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["p2HInspection"]>;
export type P2HInspectionSelectScalar = {
    id?: boolean;
    p2hNo?: boolean;
    unitId?: boolean;
    userId?: boolean;
    driverName?: boolean;
    driverNrp?: boolean;
    nopol?: boolean;
    section?: boolean;
    workSystem?: boolean;
    shift?: boolean;
    date?: boolean;
    km?: boolean;
    hourMeter?: boolean;
    damageChecks?: boolean;
    tyreCheck?: boolean;
    safetyTools?: boolean;
    fitToWork?: boolean;
    warningDetails?: boolean;
    driverValidation?: boolean;
    unitStatus?: boolean;
    driverStatus?: boolean;
    supervisorNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type P2HInspectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "p2hNo" | "unitId" | "userId" | "driverName" | "driverNrp" | "nopol" | "section" | "workSystem" | "shift" | "date" | "km" | "hourMeter" | "damageChecks" | "tyreCheck" | "safetyTools" | "fitToWork" | "warningDetails" | "driverValidation" | "unitStatus" | "driverStatus" | "supervisorNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["p2HInspection"]>;
export type P2HInspectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type P2HInspectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type P2HInspectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unit?: boolean | Prisma.UnitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $P2HInspectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "P2HInspection";
    objects: {
        unit: Prisma.$UnitPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        p2hNo: string;
        unitId: number;
        userId: number;
        driverName: string | null;
        driverNrp: number | null;
        nopol: string | null;
        section: string | null;
        workSystem: runtime.JsonValue | null;
        shift: $Enums.Shift;
        date: Date;
        km: number;
        hourMeter: number | null;
        damageChecks: runtime.JsonValue;
        tyreCheck: runtime.JsonValue;
        safetyTools: runtime.JsonValue;
        fitToWork: runtime.JsonValue;
        warningDetails: runtime.JsonValue | null;
        driverValidation: boolean;
        unitStatus: $Enums.P2HUnitStatus;
        driverStatus: $Enums.P2HDriverStatus;
        supervisorNotes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["p2HInspection"]>;
    composites: {};
};
export type P2HInspectionGetPayload<S extends boolean | null | undefined | P2HInspectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload, S>;
export type P2HInspectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<P2HInspectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: P2HInspectionCountAggregateInputType | true;
};
export interface P2HInspectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['P2HInspection'];
        meta: {
            name: 'P2HInspection';
        };
    };
    /**
     * Find zero or one P2HInspection that matches the filter.
     * @param {P2HInspectionFindUniqueArgs} args - Arguments to find a P2HInspection
     * @example
     * // Get one P2HInspection
     * const p2HInspection = await prisma.p2HInspection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends P2HInspectionFindUniqueArgs>(args: Prisma.SelectSubset<T, P2HInspectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one P2HInspection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {P2HInspectionFindUniqueOrThrowArgs} args - Arguments to find a P2HInspection
     * @example
     * // Get one P2HInspection
     * const p2HInspection = await prisma.p2HInspection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends P2HInspectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, P2HInspectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first P2HInspection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionFindFirstArgs} args - Arguments to find a P2HInspection
     * @example
     * // Get one P2HInspection
     * const p2HInspection = await prisma.p2HInspection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends P2HInspectionFindFirstArgs>(args?: Prisma.SelectSubset<T, P2HInspectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first P2HInspection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionFindFirstOrThrowArgs} args - Arguments to find a P2HInspection
     * @example
     * // Get one P2HInspection
     * const p2HInspection = await prisma.p2HInspection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends P2HInspectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, P2HInspectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more P2HInspections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2HInspections
     * const p2HInspections = await prisma.p2HInspection.findMany()
     *
     * // Get first 10 P2HInspections
     * const p2HInspections = await prisma.p2HInspection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const p2HInspectionWithIdOnly = await prisma.p2HInspection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends P2HInspectionFindManyArgs>(args?: Prisma.SelectSubset<T, P2HInspectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a P2HInspection.
     * @param {P2HInspectionCreateArgs} args - Arguments to create a P2HInspection.
     * @example
     * // Create one P2HInspection
     * const P2HInspection = await prisma.p2HInspection.create({
     *   data: {
     *     // ... data to create a P2HInspection
     *   }
     * })
     *
     */
    create<T extends P2HInspectionCreateArgs>(args: Prisma.SelectSubset<T, P2HInspectionCreateArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many P2HInspections.
     * @param {P2HInspectionCreateManyArgs} args - Arguments to create many P2HInspections.
     * @example
     * // Create many P2HInspections
     * const p2HInspection = await prisma.p2HInspection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends P2HInspectionCreateManyArgs>(args?: Prisma.SelectSubset<T, P2HInspectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many P2HInspections and returns the data saved in the database.
     * @param {P2HInspectionCreateManyAndReturnArgs} args - Arguments to create many P2HInspections.
     * @example
     * // Create many P2HInspections
     * const p2HInspection = await prisma.p2HInspection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many P2HInspections and only return the `id`
     * const p2HInspectionWithIdOnly = await prisma.p2HInspection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends P2HInspectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, P2HInspectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a P2HInspection.
     * @param {P2HInspectionDeleteArgs} args - Arguments to delete one P2HInspection.
     * @example
     * // Delete one P2HInspection
     * const P2HInspection = await prisma.p2HInspection.delete({
     *   where: {
     *     // ... filter to delete one P2HInspection
     *   }
     * })
     *
     */
    delete<T extends P2HInspectionDeleteArgs>(args: Prisma.SelectSubset<T, P2HInspectionDeleteArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one P2HInspection.
     * @param {P2HInspectionUpdateArgs} args - Arguments to update one P2HInspection.
     * @example
     * // Update one P2HInspection
     * const p2HInspection = await prisma.p2HInspection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends P2HInspectionUpdateArgs>(args: Prisma.SelectSubset<T, P2HInspectionUpdateArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more P2HInspections.
     * @param {P2HInspectionDeleteManyArgs} args - Arguments to filter P2HInspections to delete.
     * @example
     * // Delete a few P2HInspections
     * const { count } = await prisma.p2HInspection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends P2HInspectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, P2HInspectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more P2HInspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2HInspections
     * const p2HInspection = await prisma.p2HInspection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends P2HInspectionUpdateManyArgs>(args: Prisma.SelectSubset<T, P2HInspectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more P2HInspections and returns the data updated in the database.
     * @param {P2HInspectionUpdateManyAndReturnArgs} args - Arguments to update many P2HInspections.
     * @example
     * // Update many P2HInspections
     * const p2HInspection = await prisma.p2HInspection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more P2HInspections and only return the `id`
     * const p2HInspectionWithIdOnly = await prisma.p2HInspection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends P2HInspectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, P2HInspectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one P2HInspection.
     * @param {P2HInspectionUpsertArgs} args - Arguments to update or create a P2HInspection.
     * @example
     * // Update or create a P2HInspection
     * const p2HInspection = await prisma.p2HInspection.upsert({
     *   create: {
     *     // ... data to create a P2HInspection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2HInspection we want to update
     *   }
     * })
     */
    upsert<T extends P2HInspectionUpsertArgs>(args: Prisma.SelectSubset<T, P2HInspectionUpsertArgs<ExtArgs>>): Prisma.Prisma__P2HInspectionClient<runtime.Types.Result.GetResult<Prisma.$P2HInspectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of P2HInspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionCountArgs} args - Arguments to filter P2HInspections to count.
     * @example
     * // Count the number of P2HInspections
     * const count = await prisma.p2HInspection.count({
     *   where: {
     *     // ... the filter for the P2HInspections we want to count
     *   }
     * })
    **/
    count<T extends P2HInspectionCountArgs>(args?: Prisma.Subset<T, P2HInspectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], P2HInspectionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a P2HInspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends P2HInspectionAggregateArgs>(args: Prisma.Subset<T, P2HInspectionAggregateArgs>): Prisma.PrismaPromise<GetP2HInspectionAggregateType<T>>;
    /**
     * Group by P2HInspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2HInspectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends P2HInspectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: P2HInspectionGroupByArgs['orderBy'];
    } : {
        orderBy?: P2HInspectionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, P2HInspectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2HInspectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the P2HInspection model
     */
    readonly fields: P2HInspectionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for P2HInspection.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__P2HInspectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unit<T extends Prisma.UnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UnitDefaultArgs<ExtArgs>>): Prisma.Prisma__UnitClient<runtime.Types.Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the P2HInspection model
 */
export interface P2HInspectionFieldRefs {
    readonly id: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly p2hNo: Prisma.FieldRef<"P2HInspection", 'String'>;
    readonly unitId: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly userId: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly driverName: Prisma.FieldRef<"P2HInspection", 'String'>;
    readonly driverNrp: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly nopol: Prisma.FieldRef<"P2HInspection", 'String'>;
    readonly section: Prisma.FieldRef<"P2HInspection", 'String'>;
    readonly workSystem: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly shift: Prisma.FieldRef<"P2HInspection", 'Shift'>;
    readonly date: Prisma.FieldRef<"P2HInspection", 'DateTime'>;
    readonly km: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly hourMeter: Prisma.FieldRef<"P2HInspection", 'Int'>;
    readonly damageChecks: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly tyreCheck: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly safetyTools: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly fitToWork: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly warningDetails: Prisma.FieldRef<"P2HInspection", 'Json'>;
    readonly driverValidation: Prisma.FieldRef<"P2HInspection", 'Boolean'>;
    readonly unitStatus: Prisma.FieldRef<"P2HInspection", 'P2HUnitStatus'>;
    readonly driverStatus: Prisma.FieldRef<"P2HInspection", 'P2HDriverStatus'>;
    readonly supervisorNotes: Prisma.FieldRef<"P2HInspection", 'String'>;
    readonly createdAt: Prisma.FieldRef<"P2HInspection", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"P2HInspection", 'DateTime'>;
}
/**
 * P2HInspection findUnique
 */
export type P2HInspectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter, which P2HInspection to fetch.
     */
    where: Prisma.P2HInspectionWhereUniqueInput;
};
/**
 * P2HInspection findUniqueOrThrow
 */
export type P2HInspectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter, which P2HInspection to fetch.
     */
    where: Prisma.P2HInspectionWhereUniqueInput;
};
/**
 * P2HInspection findFirst
 */
export type P2HInspectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter, which P2HInspection to fetch.
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of P2HInspections to fetch.
     */
    orderBy?: Prisma.P2HInspectionOrderByWithRelationInput | Prisma.P2HInspectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for P2HInspections.
     */
    cursor?: Prisma.P2HInspectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` P2HInspections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` P2HInspections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of P2HInspections.
     */
    distinct?: Prisma.P2HInspectionScalarFieldEnum | Prisma.P2HInspectionScalarFieldEnum[];
};
/**
 * P2HInspection findFirstOrThrow
 */
export type P2HInspectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter, which P2HInspection to fetch.
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of P2HInspections to fetch.
     */
    orderBy?: Prisma.P2HInspectionOrderByWithRelationInput | Prisma.P2HInspectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for P2HInspections.
     */
    cursor?: Prisma.P2HInspectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` P2HInspections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` P2HInspections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of P2HInspections.
     */
    distinct?: Prisma.P2HInspectionScalarFieldEnum | Prisma.P2HInspectionScalarFieldEnum[];
};
/**
 * P2HInspection findMany
 */
export type P2HInspectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter, which P2HInspections to fetch.
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of P2HInspections to fetch.
     */
    orderBy?: Prisma.P2HInspectionOrderByWithRelationInput | Prisma.P2HInspectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing P2HInspections.
     */
    cursor?: Prisma.P2HInspectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` P2HInspections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` P2HInspections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of P2HInspections.
     */
    distinct?: Prisma.P2HInspectionScalarFieldEnum | Prisma.P2HInspectionScalarFieldEnum[];
};
/**
 * P2HInspection create
 */
export type P2HInspectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a P2HInspection.
     */
    data: Prisma.XOR<Prisma.P2HInspectionCreateInput, Prisma.P2HInspectionUncheckedCreateInput>;
};
/**
 * P2HInspection createMany
 */
export type P2HInspectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many P2HInspections.
     */
    data: Prisma.P2HInspectionCreateManyInput | Prisma.P2HInspectionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * P2HInspection createManyAndReturn
 */
export type P2HInspectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * The data used to create many P2HInspections.
     */
    data: Prisma.P2HInspectionCreateManyInput | Prisma.P2HInspectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * P2HInspection update
 */
export type P2HInspectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a P2HInspection.
     */
    data: Prisma.XOR<Prisma.P2HInspectionUpdateInput, Prisma.P2HInspectionUncheckedUpdateInput>;
    /**
     * Choose, which P2HInspection to update.
     */
    where: Prisma.P2HInspectionWhereUniqueInput;
};
/**
 * P2HInspection updateMany
 */
export type P2HInspectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update P2HInspections.
     */
    data: Prisma.XOR<Prisma.P2HInspectionUpdateManyMutationInput, Prisma.P2HInspectionUncheckedUpdateManyInput>;
    /**
     * Filter which P2HInspections to update
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * Limit how many P2HInspections to update.
     */
    limit?: number;
};
/**
 * P2HInspection updateManyAndReturn
 */
export type P2HInspectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * The data used to update P2HInspections.
     */
    data: Prisma.XOR<Prisma.P2HInspectionUpdateManyMutationInput, Prisma.P2HInspectionUncheckedUpdateManyInput>;
    /**
     * Filter which P2HInspections to update
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * Limit how many P2HInspections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * P2HInspection upsert
 */
export type P2HInspectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the P2HInspection to update in case it exists.
     */
    where: Prisma.P2HInspectionWhereUniqueInput;
    /**
     * In case the P2HInspection found by the `where` argument doesn't exist, create a new P2HInspection with this data.
     */
    create: Prisma.XOR<Prisma.P2HInspectionCreateInput, Prisma.P2HInspectionUncheckedCreateInput>;
    /**
     * In case the P2HInspection was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.P2HInspectionUpdateInput, Prisma.P2HInspectionUncheckedUpdateInput>;
};
/**
 * P2HInspection delete
 */
export type P2HInspectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
    /**
     * Filter which P2HInspection to delete.
     */
    where: Prisma.P2HInspectionWhereUniqueInput;
};
/**
 * P2HInspection deleteMany
 */
export type P2HInspectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which P2HInspections to delete
     */
    where?: Prisma.P2HInspectionWhereInput;
    /**
     * Limit how many P2HInspections to delete.
     */
    limit?: number;
};
/**
 * P2HInspection without action
 */
export type P2HInspectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2HInspection
     */
    select?: Prisma.P2HInspectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the P2HInspection
     */
    omit?: Prisma.P2HInspectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.P2HInspectionInclude<ExtArgs> | null;
};
//# sourceMappingURL=P2HInspection.d.ts.map