import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const setAuthHeader = (token) => { axios.defaults.headers.common.Authorization = `Bearer ${token}`; };

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkApi) => {
    try {
        const { data } = await axios.post('https://connections-api.goit.global/users/signup', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkApi) => {
    try {
        console.log(credentials);
        const { data } = await axios.post('https://connections-api.goit.global/users/login', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
        await axios.post("https://connections-api.goit.global/users/logout");
        clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const res = await axios.get("https://connections-api.goit.global/users/current");
    return res.data;
}, {
    condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;

    },
})