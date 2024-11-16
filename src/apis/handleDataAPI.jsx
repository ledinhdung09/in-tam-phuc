import axiosClient from "./axiosClient";

const END_POINT = {
  LOGIN: "login.php",
};

export const postLoginAPI = (username, password) => {
  return axiosClient.post(END_POINT.LOGIN, {
    username,
    password,
  });
};
