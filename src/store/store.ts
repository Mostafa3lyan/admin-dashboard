"use client";
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/slices/userSlice'
import vistorsReducer from '../store/slices/vistorSlice'
export const store = configureStore({
    reducer: {
        // your reducers here
        user: userReducer,
        vistor: vistorsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch