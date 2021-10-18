/**
 * 暴露出去的接口方法
 */
import apiAddr from "../constant/apiAddr";
import http from "./http";

export const login = () => http.get({ url: apiAddr.login });
export const about = () => http.get({ url: apiAddr.about, showErrorToast: false });
