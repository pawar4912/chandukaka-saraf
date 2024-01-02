import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService()
export const getLiveRateForCSPL = async () => {
  return await httpService.get(`getliveRateForCSPL/Z2V0bGl2ZVJhdGVGb3JDU1BM`)
}

export const login = async (data) => {
  return await httpService.post(`login`, data)
}

export const verifyOtp = async (data) => {
  const result = await httpService.post(`verifyOTP`, data)
  httpService.saveToken('')
  console.log(result)
}