import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action)=> {

        }
    }
})