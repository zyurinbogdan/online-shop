import { createSlice, createSelector } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: {
        isAuth: false,
        userName: "Bogdan",
    },
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    }
});

export const userAuthReducer = userAuthSlice.reducer;
export const {login, logout} = userAuthSlice.actions;
export const selectUserAuth = ({userAuth}) => userAuth;
export const selectUserName = createSelector(
    selectUserAuth,
    ({userName}) => ({userName})
);