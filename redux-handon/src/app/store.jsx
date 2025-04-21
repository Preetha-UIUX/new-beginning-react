import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/UserSlice'

const store = configureStore({
    reducer: {
        usersInfo:  userReducer
    }
})

export default store