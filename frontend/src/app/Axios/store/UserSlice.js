
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential) =>{
        console.log(userCredential.userCredential)
        const request = await axios.post(`http://192.168.0.105:3080/api/login`, userCredential.userCredential);
        const response = await request.data.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
)
const userSlice  = createSlice({
name: "user",
initialState:{
    loading: false,
    user: null,
    error:null
}
,
extraReducers: (builder) =>{
    builder 
    .addCase(loginUser.pending, (state) =>{
        state.loading = true;
        state.user = null;
        state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action)=>{
        state.loading = false;
        state.user=action.payload;
        state.error=null;
    })
    .addCase(loginUser.rejected, (state, action)=>{
        state.loading=false;
        state.user=null;
        console.log(action.error.message);
        if(action.error.message === 'Request Failed with Status code 401'){
            state.error = "Access Denied! Invalid Credentials";
        }else{
            state.error = action.error.message;
        }
    })


}
});
export default userSlice.reducer;