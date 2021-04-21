import axios from '../utils/axios';

const testApi = {
  getAxiosTest() {
    const url = '/users/XPoet';
    return axios.get(url).then((res) => res.data) 
  }
}
 
export default testApi
  
  
