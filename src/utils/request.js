import axios from 'axios'

const service = axios.create({
    baseURL: '101.37.80.37:8081',
    timeout: 5000
});

export default service