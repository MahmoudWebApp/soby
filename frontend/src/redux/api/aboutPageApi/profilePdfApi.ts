import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const profilePdfApi = createApi({
    reducerPath: "profilePdfApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profile-pdf'],
    endpoints: (builder) => ({
        getProfilePdf: builder.query({
            query: () => {
                return {
                    url: endPoints.getProfilePdf,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['profile-pdf']
        }),

        AddUpdateProfilePdf: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateProfilePdf,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['profile-pdf'],
        }),

    })
})
export const {
    useGetProfilePdfQuery,
    useAddUpdateProfilePdfMutation
} = profilePdfApi