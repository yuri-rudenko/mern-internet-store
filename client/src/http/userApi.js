import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    try {
        const {data} = await $host.post('/api/user/registration', {email, password, role: "ADMIN"});
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        alert(error.response.data.message);
    }

}

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('/api/user/login', {email, password});
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        alert(error.response.data.message);
    }
    
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('/api/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    } catch (error) {
        console.log(error);
    }
    
}
