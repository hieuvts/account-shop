import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';

export const accountStore = configureStore({
    reducer: {
        account: accountReducer,
    }
})
