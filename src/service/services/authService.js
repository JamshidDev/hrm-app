
import axios from "../index.js"


export const login = async (payload)=>{
  return await axios.post(`/auth/mobile/login`, payload.data)
}



export default {
  login
}
