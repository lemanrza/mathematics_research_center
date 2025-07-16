/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "./instance";
import type { AxiosResponse } from "axios";

type ApiResponse<T> = Promise<T>;

// Helper function to get language from localStorage
const getLangFromLocalStorage = (): string => {
  const lang = localStorage.getItem('i18nextLng');
  return lang || 'az'; // Default to 'az' (Azerbaijani) if no language is set
};

export const getAll = async <T>(
  endpoint: string
): ApiResponse<T> => {
  try {
    const lang = getLangFromLocalStorage(); // Get language from localStorage
    const response: AxiosResponse<T> = await instance.get(endpoint, {
      params: { lang },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch data.");
  }
};

export const getOne = async <T>(
  endpoint: string,
  id: string | number
): ApiResponse<T> => {
  try {
    const lang = getLangFromLocalStorage(); // Get language from localStorage
    const response: AxiosResponse<T> = await instance.get(`${endpoint}/${id}`, {
      params: { lang },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch item.");
  }
};

export const post = async <T, D>(
  endpoint: string,
  data: D,
  options?: object
): ApiResponse<T> => {
  try {
    const lang = getLangFromLocalStorage(); // Get language from localStorage
    const response: AxiosResponse<T> = await instance.post(
      endpoint,
      data,
      {
        params: { lang },
        ...options,
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to create item.");
  }
};

export const put = async <T, D>(
  endpoint: string,
  id: string | number,
  data: D
): ApiResponse<T> => {
  try {
    const lang = getLangFromLocalStorage(); // Get language from localStorage
    const response: AxiosResponse<T> = await instance.put(
      `${endpoint}/${id}`,
      data,
      {
        params: { lang },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to update item.");
  }
};

export const remove = async <T>(
  endpoint: string,
  id: string | number
): ApiResponse<T> => {
  try {
    const lang = getLangFromLocalStorage(); // Get language from localStorage
    const response: AxiosResponse<T> = await instance.delete(
      `${endpoint}/${id}`,
      {
        params: { lang },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete item.");
  }
};
