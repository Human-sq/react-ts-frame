/* eslint-disable no-undef */
import { message } from 'antd';
import axios from 'axios';

message.config({
  duration: 2,
  maxCount: 1,
});

let API_VERSION = 'http://172.168.1.30:81';
if (process.env.NODE_ENV !== 'production') {
  API_VERSION = 'http://172.168.3.20:81';
  // http://172.168.3.20:81
}

const GET = 'get';
const POST = 'post';
const PUT = 'PUT';

const formatParams = (data, url) => {
  const keys = Object.keys(data).filter(key => undefined !== data[key]);
  if (keys.length) {
    return `${url}?${keys.map(key => `${key}=${data[key]}`).join('&')}`;
  }
  return '';
};

const getHeader = () => ({
  'Content-Type': 'application/json',
});

export default (url, method = GET) => {
  return async (data) => {
    let urlParams = null;
    if (method === GET && data) { // convert object to url parameters & append to extra urls
      urlParams = formatParams(data, url);
    }

    // if (window.token) {
    //   headers.token = window.token;
    // }
    try {
      const response = await axios({
        url: `${API_VERSION}${urlParams || url}`,
        method,
        data: method === GET ? '' : JSON.stringify(data),
        headers: getHeader(),
      });
      // console.log(response);
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  };
};

export {
  GET,
  POST,
  PUT,
  formatParams,
};
