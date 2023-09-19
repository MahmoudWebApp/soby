import { testimonialsVideosHomeApi } from './api/homePageApi/testimoialsVideos';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./api/usersApi/usersApi";
import { testimonialsHomeApi } from "./api/homePageApi/TestimonialsHomeApi";
import { aboutHomeApi } from "./api/homePageApi/aboutHomeApi";
import { networksHomeApi } from './api/homePageApi/networksHomeApi';
import { companiesHomeApi } from './api/homePageApi/companiesHomeApi';
import { bannerHomeApi } from './api/homePageApi/bannerHomeApi';
import { slidesHomeApi } from './api/homePageApi/sliderHomeApi';


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [testimonialsHomeApi.reducerPath]: testimonialsHomeApi.reducer,
        [aboutHomeApi.reducerPath]: aboutHomeApi.reducer,
        [testimonialsVideosHomeApi.reducerPath]: testimonialsVideosHomeApi.reducer,
        [networksHomeApi.reducerPath]: networksHomeApi.reducer,
        [companiesHomeApi.reducerPath]:companiesHomeApi.reducer,
        [bannerHomeApi.reducerPath]:bannerHomeApi.reducer,
        [slidesHomeApi.reducerPath]:slidesHomeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            usersApi.middleware,
            testimonialsHomeApi.middleware,
            aboutHomeApi.middleware,
            testimonialsVideosHomeApi.middleware,
            networksHomeApi.middleware,
            companiesHomeApi.middleware,
            bannerHomeApi.middleware,
            slidesHomeApi.middleware
        ]),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)