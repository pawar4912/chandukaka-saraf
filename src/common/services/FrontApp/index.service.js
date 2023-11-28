import UserHTTPService from "../user-http.service"

const httpService = new UserHTTPService()
export const getLiveRateForCSPL = async () => {
  httpService.addHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
  return await httpService.get(`getliveRateForCSPL/Z2V0bGl2ZVJhdGVGb3JDU1BM`)
}