import {
    BaseRecord,
    DataProvider,
    GetListParams,
    GetListResponse,
} from "@refinedev/core";
import {mockSubjects} from "@/constants/mock-subjects.ts";

export const dataProvider: DataProvider = {
    getList: async <
        TData extends BaseRecord = BaseRecord
    >(
        { resource }: GetListParams
    ): Promise<GetListResponse<TData>> => {
        if (resource !== "subjects") {
            return {
                data: [] as TData[],
                total: 0,
            };
        }

        return {
            data: mockSubjects as unknown as TData[],
            total: mockSubjects.length,
        };
    },

    getOne: async () => {
        throw new Error("This func is not in mock data providers");
    },

    create: async () => {
        throw new Error("This func is not in mock data providers");
    },

    update: async () => {
        throw new Error("This func is not in mock data providers");
    },

    deleteOne: async () => {
        throw new Error("This func is not in mock data providers");
    },

    getApiUrl: () => "",
};