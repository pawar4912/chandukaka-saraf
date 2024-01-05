import UserHTTPService from "./user-http.service"

const httpService = new UserHTTPService()

export const myProfile = async (data = {}) => {
  return await httpService.post(`myProfile`, data)
}

export const updateProfile = async (data = {}) => {
  return await httpService.post(`updateProfile`, data)
}