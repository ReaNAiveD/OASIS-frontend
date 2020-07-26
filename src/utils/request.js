import axios from 'axios'

const service = axios.create({
    // baseURL: 'http://101.37.80.37:8081',
    baseURL: 'http://47.100.97.17:8082',
    // baseURL: 'http://localhost:8081',
    timeout: 5000,
});

export default service
