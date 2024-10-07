import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
    const res = await axios.get("https://connections-api.goit.global/contacts");
    return res.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);    }


});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
    const res = await axios.post("https://connections-api.goit.global/contacts", newContact);
    return res.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);    }


});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
    const res = await axios.delete(`https://connections-api.goit.global/contacts/${contactId}`);
    return res.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);    }


});