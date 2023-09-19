import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const companiesHomeApi = createApi({
    reducerPath: "companiesHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['companies'],
    endpoints: (builder) => ({
        getAllCompanies: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllCompanies,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['companies']
        }),
        addCompany: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addCompany,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['companies'],
        }),

        deleteCompany: builder.mutation({
            query: ({ company_id }) => {
                return {
                    url: `${endPoints.deleteCompany}${company_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['companies'],
        }),
    })
})
export const {
    useGetAllCompaniesQuery,
    useAddCompanyMutation,
    useDeleteCompanyMutation
} =
    companiesHomeApi