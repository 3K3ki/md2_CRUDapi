// Khở tạo 1 đối tượng axos từ đường dẫn của api
import axios from 'axios';
export const instances = axios.create({
    baseURL: 'http://localhost:3002/'
})