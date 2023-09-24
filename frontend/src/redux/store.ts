import { postsApi } from './api/blogPageApi/blogApi';
import { networkPlayListsApi } from './api/networkPageApi/networkPlayListApi';
import { coursesApi } from './api/coursesPageApi/coursesApi';
import { trainingApi } from './api/trainingPageApi/trainingApi';
import { experiencesVideosHomeApi } from './api/aboutPageApi/experiencesAboutApi';
import { educationAboutApi } from './api/aboutPageApi/educationAboutApi';
import { cliftonAboutApi } from './api/aboutPageApi/cliftonAboutApi';
import { brandAboutApi } from './api/aboutPageApi/brandAboutApi';
import { storyAboutApi } from './api/aboutPageApi/storyAboutApi';
import { missionVisionApi } from './api/aboutPageApi/missionVisionApi';
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
import { booksAboutApi } from './api/aboutPageApi/booksAboutApi';
import { formGiftsApi } from './api/formGifts/formGiftsApi';
import { trainersApi } from './api/brandingPageApi/trainersBrandingApi';
import { faqBrandingApi } from './api/brandingPageApi/faqBrandingApi';
import { stepsBrandingApi } from './api/brandingPageApi/stepsBrandingApi';
import { sufferBrandingApi } from './api/brandingPageApi/sufferBrandingApi';
import { landingPageBrandingApi } from './api/brandingPageApi/landingPageBrandingApi';
import { profilePdfApi } from './api/aboutPageApi/profilePdfApi';


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        //Home Api
        [testimonialsHomeApi.reducerPath]: testimonialsHomeApi.reducer,
        [aboutHomeApi.reducerPath]: aboutHomeApi.reducer,
        [testimonialsVideosHomeApi.reducerPath]: testimonialsVideosHomeApi.reducer,
        [networksHomeApi.reducerPath]: networksHomeApi.reducer,
        [companiesHomeApi.reducerPath]: companiesHomeApi.reducer,
        [bannerHomeApi.reducerPath]: bannerHomeApi.reducer,
        [slidesHomeApi.reducerPath]: slidesHomeApi.reducer,
        //About Api
        [missionVisionApi.reducerPath]: missionVisionApi.reducer,
        [storyAboutApi.reducerPath]: storyAboutApi.reducer,
        [brandAboutApi.reducerPath]: brandAboutApi.reducer,
        [cliftonAboutApi.reducerPath]: cliftonAboutApi.reducer,
        [educationAboutApi.reducerPath]: educationAboutApi.reducer,
        [experiencesVideosHomeApi.reducerPath]: experiencesVideosHomeApi.reducer,
        [booksAboutApi.reducerPath]: booksAboutApi.reducer,
        [profilePdfApi.reducerPath]:profilePdfApi.reducer,
        // Branding Page
        [trainersApi.reducerPath]: trainersApi.reducer,
        [faqBrandingApi.reducerPath]: faqBrandingApi.reducer,
        [stepsBrandingApi.reducerPath]: stepsBrandingApi.reducer,
        [sufferBrandingApi.reducerPath]: sufferBrandingApi.reducer,
        [landingPageBrandingApi.reducerPath]:landingPageBrandingApi.reducer,
        // Other Pages
        [trainingApi.reducerPath]: trainingApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [networkPlayListsApi.reducerPath]: networkPlayListsApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [formGiftsApi.reducerPath]: formGiftsApi.reducer


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
            slidesHomeApi.middleware,
            missionVisionApi.middleware,
            storyAboutApi.middleware,
            brandAboutApi.middleware,
            cliftonAboutApi.middleware,
            educationAboutApi.middleware,
            experiencesVideosHomeApi.middleware,
            booksAboutApi.middleware,
            trainingApi.middleware,
            coursesApi.middleware,
            networkPlayListsApi.middleware,
            postsApi.middleware,
            formGiftsApi.middleware,
            trainersApi.middleware,
            faqBrandingApi.middleware,
            stepsBrandingApi.middleware,
            sufferBrandingApi.middleware,
            landingPageBrandingApi.middleware,
            profilePdfApi.middleware

        ]),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)