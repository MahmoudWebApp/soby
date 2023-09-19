import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const bannerHomeApi = createApi({
    reducerPath: "bannerHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['banner-home'],
    endpoints: (builder) => ({
        getBannerHomeData: builder.query({
            query: () => {
                return {
                    url: endPoints.getBannerHome,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['banner-home']
        }),

        AddUpdateBannerHomeData: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateBannerHome,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['banner-home'],
        }),

    })
})
export const { useGetBannerHomeDataQuery,
    useAddUpdateBannerHomeDataMutation } = bannerHomeApi