import UserHTTPService from "./user-http.service"

const httpService = new UserHTTPService()

export const myProfile = async (data = {}) => {
  return await httpService.post(`myProfile`, data)
}

export const updateProfile = async (data = {}) => {
  return await httpService.post(`updateProfile`, data)
}

export const addAddress = async (data = {}) => {
  return await httpService.post(`profile/address/add`, data)
}

export const getAllAddAddress = async () => {
  return await httpService.get(`profile/address`)
}

export const removeAddress = async (id) => {
  return await httpService.get(`profile/address/remove/${id}`)
}
