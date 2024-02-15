import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    try {
        const {data} = await $host.post('/api/user/registration', {email, password, role: "ADMIN"});
        return jwtDecode(data.token)

    } catch (error) {
        alert(error.message);
    }

}

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('/api/user/login', {email, password});
        return jwtDecode(data.token)
    } catch (error) {
        alert(error.message);
    }
    
}

export const check = async () => {
    try {
        const {data} = await $host.post('/api/user/registration');
        return data
    } catch (error) {
        alert(error.message);
    }
    
}
