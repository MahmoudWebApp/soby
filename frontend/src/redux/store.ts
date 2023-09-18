import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./api/usersApi/usersApi";
import { testimonialsHomeApi } from "./api/homePageApi/TestimonialsHomeApi";
import { aboutHomeApi } from "./api/homePageApi/aboutHomeApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [testimonialsHomeApi.reducerPath]: testimonialsHomeApi.reducer,
        [aboutHomeApi.reducerPath]:aboutHomeApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            usersApi.middleware,
            testimonialsHomeApi.middleware,
            aboutHomeApi.middleware
        ]),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)