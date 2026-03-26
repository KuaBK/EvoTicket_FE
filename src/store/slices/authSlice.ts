import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { decodeJWT } from '@/src/lib/jwt';

interface UserProfile {
    id: number;
    accountId: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    phoneNumber: string;
    roles: string[];
}

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    user: UserProfile | null;
    isAuthenticated: boolean;
    isOrganization: boolean;
    organizationId: number;
}

const initialState: AuthState = {
    token: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
    isOrganization: false,
    organizationId: -1,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ token: string; refreshToken?: string; user?: UserProfile }>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            if (action.payload.refreshToken) {
                state.refreshToken = action.payload.refreshToken;
            }
            if (action.payload.user) {
                state.user = action.payload.user;
            }

            // Decode JWT to get organization info
            const payload = decodeJWT(action.payload.token);
            if (payload) {
                state.isOrganization = payload.isOrganization;
                state.organizationId = payload.organizationId;
            }
        },

        setUser: (state, action: PayloadAction<UserProfile>) => {
            state.user = action.payload;
        },

        updateToken: (state, action: PayloadAction<{ token: string; refreshToken?: string }>) => {
            state.token = action.payload.token;
            if (action.payload.refreshToken) {
                state.refreshToken = action.payload.refreshToken;
            }

            // Update organization status from new token
            const payload = decodeJWT(action.payload.token);
            if (payload) {
                state.isOrganization = payload.isOrganization;
                state.organizationId = payload.organizationId;
            }
        },

        logout: (state) => {
            state.token = null;
            state.refreshToken = null;
            state.user = null;
            state.isAuthenticated = false;
            state.isOrganization = false;
            state.organizationId = -1;
        },
    },
});

export const { setCredentials, setUser, updateToken, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsOrganization = (state: { auth: AuthState }) => state.auth.isOrganization;
