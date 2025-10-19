
import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";

interface UserState {
    allVistors: [],
    isLoading: boolean,
    error: SerializedError | null,
}

const initialState: UserState = {
    allVistors: [],
    isLoading: false,
    error: null,
};

export const getVistor = createAsyncThunk("vistorSlice/getVistor", async () => {
    const res = await fetch("https://68f141e90b966ad50035db41.mockapi.io/api/v1/Vistors")
    const data = await res.json();
    return data
})

const vistorSlice = createSlice({
    name: "vistorSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVistor.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getVistor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allVistors = action.payload;
        });
        builder.addCase(getVistor.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error || "Something went wrong";
        });
    }

})

export default vistorSlice.reducer;