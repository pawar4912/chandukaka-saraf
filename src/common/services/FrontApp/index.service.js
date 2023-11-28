import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService()
export const getLiveRateForCSPL = async () => {
  return await httpService.get(`getliveRateForCSPL/Z2V0bGl2ZVJhdGVGb3JDU1BM`)
}