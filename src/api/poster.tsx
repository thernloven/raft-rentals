import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { BASE_API } from "./constant";
import { useAppSelector } from "../store/hooks";

interface PosterType {
  method: "POST" | "PUT" | "DELETE" | "GET";
  bodyData?: any;
  url: string;
  authToken?: any;
}

// By using  this function we can call POST DELETE and PUT methods
const poster = async ({ url, method, bodyData, authToken }: PosterType) => {
  const token = localStorage.getItem("authToken");
  console.log(token, "cookiecookiecookie");
  const config = {
    method: method,
    url: BASE_API + url,
    mode: "no-cors",
    data: bodyData,
    headers: {
      Authorization: `Bearer ${token}`,
      // Cookie: "PHPSESSID=" + cookie,
    },
  };

  return axios(config)
    .then((response: AxiosResponse) => {
      if (HttpStatusCode.Ok === response.status) {
        return response.data;
      } else {
        throw new Error(response?.data?.message);
      }
    })
    .catch((error) => {
      throw error;
      // Swal.fire('Error', error.message, 'error');
    });
};

export { poster };
