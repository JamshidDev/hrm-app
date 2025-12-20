
import axios from "../index.js"


const login = async (payload)=>{
  return await axios.post(`/auth/mobile/login`, payload.data)
}

const logOut = async (payload)=>{
  return await axios.post(`/auth/mobile/logout`, payload.data)
}

const profile = async (payload)=>{
  return await axios.get(`/v1/user/profile`)
}

const personalList = async (payload)=>{
  return await axios.get(`/v1/user/mobile/personal-list`)
}



export default {
  login,
  logOut,
  profile,
  personalList,
}
