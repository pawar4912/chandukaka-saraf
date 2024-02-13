import axios from "axios";
import * as tokenService from "./token.service";

export default class BaseHttpService {
  BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
  _accessToken = null;
  _accessTokenKey = null;
  _headers = {};

  //constructor() {}

  async get(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .get(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async post(endpoint, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async delete(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async patch(endpoint, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .patch(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async put(endpoint, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  _handleHttpError(error) {
    const statusCode = error.response.status;

    if (statusCode == 400) {
      return this._handle400(error);
    } else if (statusCode == 401) {
      return this._handle401(error);
    } else {
      throw error;
    }
  }

  _handle401(error) {
    window.location = "/";
  }

  async createGuestId() {
    const guestSessionId = localStorage.getItem("Guest-Session-ID")
    if (!guestSessionId) {
      const data = {
        secret_key: process.env.REACT_APP_LOGIN_SECRET_KEY
      }
      const result = await this.post('indexAction', data)
      this.addHeader("Guest-Session-ID", result.data.guest_id)
      localStorage.setItem("Guest-Session-ID", result.data.guest_id)
    }
  }

  async previousRequestRecall(request) {
    const instance = axios.create({
      baseURL: this.BASE_URL,
      options: this._getCommonOptions(),
    });
    Object.assign(request.headers, this.getHeaders());
    return instance(request);
  }

  async _handle400(error) {
    createGuestId()
    return this.previousRequestRecall(error.config)
  }

  _getCommonOptions() {
    const token = this.loadToken();
    const guestSessionId = localStorage.getItem("Guest-Session-ID")
    if (token) {
      this.addHeader("Authorization", `Bearer ${token}`);
    } else if (guestSessionId) {
      this.addHeader("Guest-Session-ID", guestSessionId)
    }

    return {
      headers: this.getHeaders(),
    };
  }

  addHeader(key, value) {
    this._headers = Object.assign(this._headers, { [key]: value });
    return this;
  }

  getHeaders() {
    return this._headers;
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken) {
    this._accessToken = accessToken;
    tokenService.saveToken(this._accessTokenKey, accessToken);
  }

  loadToken() {
    const token = tokenService.getToken(this._accessTokenKey);
    this._accessToken = token;
    return token;
  }

  removeToken() {
    tokenService.removeToken(this._accessTokenKey);
  }
}
