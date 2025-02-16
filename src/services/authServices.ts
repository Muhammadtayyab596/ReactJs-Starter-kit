import instance from "./request";

interface Icredentials {
  email: string;
  password: string;
}

export const loginRequest = async (credentials: Icredentials) => {
  return instance.post("/auth/login", credentials);
};

export const signUpRequest = async (credentials: Icredentials) => {
  return instance.post("/auth/signup", credentials);
};
