import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const investmentBrandApi = createApi({
    reducerPath: "investmentBrandApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['investments'],
    endpoints: (builder) => ({
        getAllInvestments: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllInvestments,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['investments']
        }),
        addUpdateInvestment: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateInvestment,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['investments'],
        }),
      
    })
})
export const {
   useGetAllInvestmentsQuery,
   useAddUpdateInvestmentMutation
 } = investmentBrandApi