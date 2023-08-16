import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        userInfo: null
    },
    reducers: {
        USER_LOGIN_SUCCESS: (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload.userInfo;
        },
        USER_LOGIN_FAIL: (state) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
        PROCESS_LOGOUT: (state) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
    }
})

export const { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, PROCESS_LOGOUT } = userSlice.actions;
export default userSlice.reducer;