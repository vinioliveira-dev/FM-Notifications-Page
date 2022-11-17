import { createSlice } from '@reduxjs/toolkit';

export const allNotifications = [];

const initialState = Object.fromEntries(allNotifications.map(notification => [...allNotifications, {notification}]));

const allNotificationsSlice = createSlice({
    name: 'allNotifications',
    initialState: initialState,
    reducers: {
        addNotification: (state, action) => {
            
        }
    }
})