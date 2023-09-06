import axios from 'axios';

class mockAxios {
  static all() {
    return axios.get('http://localhost:8080/getOldbrews').then(resp => resp.data);
  }
}

export default mockAxios;