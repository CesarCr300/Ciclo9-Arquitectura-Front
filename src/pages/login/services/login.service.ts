import { AxiosCall } from "../../../entities/axios-call.entity";
import { axiosInstance } from "../../../services/api.service";
import { LoginRequest } from "../entities/login-request.entity";
import { LoginResponse } from "../entities/login-response.entity";

export const loginService = (
  request: LoginRequest
): AxiosCall<LoginResponse> => {
  const controller = new AbortController();
  const response = axiosInstance.post<LoginResponse>("auth/login", request, {
    signal: controller.signal,
  });
  return {
    call: response,
    controller,
  };
};
