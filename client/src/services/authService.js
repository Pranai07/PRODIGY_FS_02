import * as authApi from "../api/authApi";

export const loginUser = authApi.login;
export const registerUser = authApi.register;
export const logoutUser = authApi.logout;
export const getProfile = authApi.getProfile;