
import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";

interface UserState {
    allUsers: [],
    isLoading: boolean,
    error: SerializedError | null,
}

const initialState: UserState = {
    allUsers: [],
    isLoading: false,
    error: null,
};

export const getUsers = createAsyncThunk("userSlice/getUsers", async () => {
    const res = await fetch("https://68f141e90b966ad50035db41.mockapi.io/api/v1/users")
    const data = await res.json();
    console.log(data);
    return data
})

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allUsers = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error || "Something went wrong";
        });
    }

})

export default userSlice.reducer;