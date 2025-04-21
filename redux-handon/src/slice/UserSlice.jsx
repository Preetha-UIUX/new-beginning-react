import { createSlice } from "@reduxjs/toolkit";

// create State
const initialState = {
    users: []
}   


// Create Slice. 
// in createSlice pass the object
// in the object 
// - set a unique name property
// - set initialState property
// - mention reducers function:
// functions inside reducers will have 2 properties 1st- Action, 2nd Payload
// action - the action that we dispatch
// payload - when dispatch the action if we send any information, that receive in payload. 

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers:(state, actions) => { 
            state.users = [...state.users, actions.payload]
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user, index) => index !== action.payload)
        }
    }
})

export const {setUsers, deleteUser} = userSlice.actions

export default userSlice.reducer;