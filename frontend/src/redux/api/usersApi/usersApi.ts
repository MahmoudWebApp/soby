import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";


export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: endPoints.login,
                    method: "post",
                    body,
                };
            },

        }),


    })
})
export const { useLoginUserMutation } = usersApi
