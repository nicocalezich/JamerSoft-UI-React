import axios from "axios";

const apiClient = axios.create({baseURL: 'https://springboot-api-jamersoft.herokuapp.com/'})

export default apiClient