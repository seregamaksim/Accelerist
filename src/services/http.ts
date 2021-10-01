import { API_URL } from '../constants';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { store } from '../store/store';
// import { actions } from '../store/ducks';

export class Http {
  constructor(private readonly _axios: AxiosInstance) {
    this.useInterceptors();
  }

  setAuthorizationHeader(token: string): void {
    this._axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  unsetAuthorizationHeader(): void {
    delete this._axios.defaults.headers.Authorization;
  }

  private useInterceptors(): void {
    this._axios.interceptors.response.use(
      undefined,
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response?.status === 401) {
          // store.dispatch({ type: 'auth/signOut' });
        }
        return Promise.reject(error.response?.data);
      }
    );
  }

  get get() {
    return this._axios.get;
  }

  get post() {
    return this._axios.post;
  }

  get put() {
    return this._axios.put;
  }

  get patch() {
    return this._axios.patch;
  }
  get delete() {
    return this._axios.delete;
  }

  get request() {
    return this._axios.request;
  }

  get axios(): AxiosInstance {
    return this._axios;
  }
}

export const http = new Http(
  axios.create({
    baseURL: API_URL,
    timeout: 60000,
  })
);
