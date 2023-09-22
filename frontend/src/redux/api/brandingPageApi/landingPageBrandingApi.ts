import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const landingPageBrandingApi = createApi({
    reducerPath: "landingPageBrandingApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['landing-branding'],
    endpoints: (builder) => ({
        getLandingPageBranding: builder.query({
            query: () => {
                return {
                    url: endPoints.getLandingPage,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['landing-branding']
        }),

        AddUpdateLandingPageBranding: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateLandingPage,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['landing-branding'],
        }),

    })
})
export const {
    useGetLandingPageBrandingQuery,
    useAddUpdateLandingPageBrandingMutation
} = landingPageBrandingApi