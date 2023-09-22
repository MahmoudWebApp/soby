import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const cliftonAboutApi = createApi({
    reducerPath: "cliftonAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['clifton-about'],
    endpoints: (builder) => ({
        getCliftonAbout: builder.query({
            query: () => {
                return {
                    url: endPoints.getCliftonAbout,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['clifton-about']
        }),

        AddUpdateCliftonAbout: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateCliftonAbout,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['clifton-about'],
        }),

    })
})
export const {
    useGetCliftonAboutQuery,
    useAddUpdateCliftonAboutMutation
} = cliftonAboutApi