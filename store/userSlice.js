import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    listUsers: [],
    val: 0
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

        setUsersState(state, action) {
            state.listUsers = action.payload;
        },
        setVal(state, action){
            state.val= action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('EXTRA HYDRATE')
            console.log(action)
            return {
                ...state,
                ...action.payload.users,
            };
        },
    },
});

export const { setUsersState, setVal } = usersSlice.actions;

export const selectUserList = (state) => state.users.listUsers;
export const selectVal  = state => state.users.val;

export default usersSlice.reducer;