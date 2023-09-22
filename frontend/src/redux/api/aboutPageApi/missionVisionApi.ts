import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const missionVisionApi = createApi({
    reducerPath: "missionVisionApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['vision-mission'],
    endpoints: (builder) => ({
        getMissionVisionData: builder.query({
            query: () => {
                return {
                    url: endPoints.getMissionVision,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['vision-mission']
        }),

        AddUpdateMissionVisionData: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateMissionVision,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['vision-mission'],
        }),

    })
})
export const {
    useGetMissionVisionDataQuery,
    useAddUpdateMissionVisionDataMutation
} = missionVisionApi