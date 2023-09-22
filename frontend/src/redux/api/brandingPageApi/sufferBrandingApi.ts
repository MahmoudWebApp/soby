import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const sufferBrandingApi = createApi({
    reducerPath: "sufferBrandingApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['suffer-branding'],
    endpoints: (builder) => ({
        getSufferBranding: builder.query({
            query: () => {
                return {
                    url: endPoints.getSuffer,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['suffer-branding']
        }),

        AddUpdateSufferBranding: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateSuffer,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['suffer-branding'],
        }),

    })
})
export const {
    useGetSufferBrandingQuery,
    useAddUpdateSufferBrandingMutation
} = sufferBrandingApi