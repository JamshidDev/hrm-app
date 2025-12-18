import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;
import {appSetting} from '@/utils/index.js'
import { showNotify} from 'vant';

const instance = axios.create({
  baseURL: `${apiUrl}/api`
});


instance.interceptors.request.use(function (config) {

  let token = localStorage.getItem(appSetting.accessTokenKey) || null;
  config.headers['Accept-Language'] = localStorage.getItem(appSetting.appLanguageKey) || appSetting.appDefaultLanguage
  config.headers['Access-Control-Allow-Origin'] = '*'
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }

  return config;
})

instance.interceptors.response.use(
  response => {
    // some action here
    return Promise.resolve(response)
  },
  error => {
    if(error?.response?.data?.message){
      showNotify({ type: 'danger', message: error.response.data.message });
    }
    return Promise.reject(error)
  }
);

export default instance
