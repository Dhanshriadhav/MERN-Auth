import {configureStore} from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';

export const Store = configureStore({
    reducer:{user : userReducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});