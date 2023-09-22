import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const brandAboutApi = createApi({
    reducerPath: "brandAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['brand-about'],
    endpoints: (builder) => ({
        getBrandAbout: builder.query({
            query: () => {
                return {
                    url: endPoints.getBrandAbout,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['brand-about']
        }),

        AddUpdateBrandAbout: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateBrandAbout,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['brand-about'],
        }),

    })
})
export const {
    useGetBrandAboutQuery,
    useAddUpdateBrandAboutMutation
} = brandAboutApi