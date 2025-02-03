import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { store } from "./store";

const apiUrl = 'http://localhost:5000/users'

export const fetchUsers = createAsyncThunk( 'users/fetchusers' , async()=>{

    const response = await axios.get(apiUrl)
    return response.data
})

export const addUser = createAsyncThunk(
    'users/addUser',
    async (newUser) => {
        const response = await axios.post(apiUrl , newUser)
        return response.data
    }  
)

export const updateUser = createAsyncThunc( 'users/updateUser',
    async(updatedUser) => ( 
        response = await axios.put(`${apiUrl}/${updatedUser.id}` , updatedUser))
)

export const deleteUser = createAsyncThunk('users/deleteUser',

 await axios.delete(`${apiUrl}/${userid}`) 
)

const initialState = {
    items: [],
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name : 'users',
    initialState ,
    reducers: {},
    extraReducers:(builder) => {

        builder
        .addCase(fetchUsers.fulfilled, (state , action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        })

        .addCase(addUser.fulfilled , (state , action) => {
            store.status = 'succeeded';
            store.items = action.payload;            
        })
    }
})

export default userSlice.reducer;