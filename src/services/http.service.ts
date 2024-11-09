import { Injectable } from "@angular/core";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(url, options)
  }

  public post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(url, data, options);
  }

  public put<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(url, data, options);
  }

  public patch<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch(url, data, options);
  }

  public delete<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(url, options);
  }
}
