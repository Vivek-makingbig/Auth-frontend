import axios from "axios";

const API = axios.create({ baseURL: "https://authentication-authorization-phi.vercel.app/" });

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);
